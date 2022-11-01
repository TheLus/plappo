import React, { MouseEvent, useCallback, useEffect, useState } from "react";
import Value from "storage-value";
import "./App.css";
import { Box, Button, TextField, Grid, SxProps, Typography } from "@mui/material";
import awsConfig from "./aws-exports";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Room } from "./models";
import { getRoom, getUser, listCards } from "./graphql/queries";
import { createCard as _createCard, createUser as _createUser, deleteCard, updateCard as _updateCard, updateRoom, updateUser } from "./graphql/mutations";
import { CreateCardMutation, GetUserQuery, UpdateCardInput, UpdateCardMutation } from "./API";
import { PokerCard } from "./modules/PokerCard";
import { Theme } from "@mui/system";
import { GraphQLResult } from "@aws-amplify/api";
import { onCreateCard, onDeleteCard, onUpdateCard, onUpdateRoom } from "./graphql/subscriptions";

Amplify.configure(awsConfig);

type SubscriptionEvent = { value: { data: any } };

const styles: Record<string, React.CSSProperties> = {
  app: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: 16,
    overflowY: 'auto',
    backgroundColor: '#cbffee',
    boxSizing: 'border-box',
  },
  main: {
    margin: 16,
  },
  footer: {
    margin: 16,
    marginLeft: 24,
    height: 64,
  },
  message: {
    margin: 8,
    padding: 8,
    display: "flex",
    width: 300,
  },
  messageInput: {
    width: 300,
    marginRight: 8,
  },
};

const userId = new Value('userId');

type User = {
  id: string;
  name: string;
  card?: Card | null;
};

type Card = {
  id?: string;
  number?: number | null;
  user?: User;
  createdAt?: string;
};

function App() {
  const [userName, setUserName] = useState<string>("");
  const [selectedCard, setSelectedCard] = useState<Card | undefined | null>();
  const [user, setUser] = useState<User | null>(null);
  const [room, setRoom] = useState<Room | null>(null);
  const [cards, setCards] = useState<Card[]>([]);
  // const [isCardsOpened, setIsCardsOpened] = useState(false);

  const updateUserName = useCallback(() => {
    if (user == null) return;
    API.graphql(
      graphqlOperation(updateUser, {
        input: {
          id: user.id,
          name: userName,
        },
      })
    );
  }, [user, userName]);

  const createUser = useCallback(async (name: string) => {
    return await API.graphql(
      graphqlOperation(_createUser, {
        input: { name },
      })
    );
  }, []);

  const fetchUser = useCallback(async (id: string) => {
    return await API.graphql(
      graphqlOperation(getUser, id)
    ) as GraphQLResult<GetUserQuery>;
  }, []);

  useEffect(() => {
    if (userId.value == null) {
      createUser('guest').then((res) => {
        if (!('data' in res)) return;
        userId.value = res.data.createUser;
        const { id, name } = res.data.createUser;
        setUser({ id, name });
        setUserName(name);
      });
    } else {
      fetchUser(userId.value).then((res) => {
        if (res.data?.getUser == null) return;
        const { id, name, cards } = res.data?.getUser;
        const card = cards?.items.find((card) => card?.roomCardsId === room?.id);
        setUser({ id, name, card });
        setUserName(name);
        setSelectedCard(card);
      })
    }
  }, [createUser, fetchUser, room?.id]);

  // const createRoom = useCallback(async () => {
  //   const room = new Room({ cards: [] });
  //   return await API.graphql(
  //     graphqlOperation(_createRoom, {
  //       input: room,
  //     })
  //   );
  // }, []);

  const fetchRoom = useCallback(async (id: string) => {
    return await API.graphql(
      graphqlOperation(getRoom, { id })
    );
  }, []);

  useEffect(() => {
    fetchRoom('0e755d04-4809-489b-bc9d-b7453303d56e').then((res) => {
      if (!('data' in res)) return;
      setRoom(res.data.getRoom);
    });
  }, [fetchRoom])

  const updateCard = useCallback(async (number: number) => {
    if (selectedCard == null || selectedCard.id == null) {
      if (user == null) return;
      if (room == null) return;

      const res = await API.graphql(
        graphqlOperation(_createCard, {
          input: {
            number: number,
            roomCardsId: room.id,
            userCardsId: user.id,
          },
        })
      ) as GraphQLResult<CreateCardMutation>;
      return res.data?.createCard;
    }
    const res = await API.graphql(
      graphqlOperation(_updateCard, {
        input: { id: selectedCard.id, number } as UpdateCardInput
      })
    ) as GraphQLResult<UpdateCardMutation>;
    return res.data?.updateCard;
  }, [room, selectedCard, user]);

  const fetchCards = useCallback(async (roomCardsId: string) => {
    return await API.graphql(
      graphqlOperation(listCards, {
        roomCardsId,
      })
    );
  }, []);

  const onCardsChange = useCallback(({ value: { data } }: SubscriptionEvent) => {
    const { onUpdateCard, onCreateCard, onDeleteCard } = data;
    const roomCardsId = (onUpdateCard ?? onCreateCard ?? onDeleteCard)?.roomCardsId;
    if (!roomCardsId) return;
    if (!!onDeleteCard) {
      setSelectedCard(null);
      setCards([]);
      return;
    };
    fetchCards(roomCardsId).then((res) => {
      if (!('data' in res)) return;
      setCards(res.data.listCards.items);
    })
  }, [fetchCards]);

  useEffect(() => {
    const onUpdateCardSubscriber = API.graphql(graphqlOperation(onUpdateCard));
    const onCreateCardSubscriber = API.graphql(graphqlOperation(onCreateCard));
    const onDeleteCardSubscriber = API.graphql(graphqlOperation(onDeleteCard));
    const onUpdateRoomSubscriber = API.graphql(graphqlOperation(onUpdateRoom));
    if (!('subscribe' in onUpdateCardSubscriber)) return;
    if (!('subscribe' in onCreateCardSubscriber)) return;
    if (!('subscribe' in onDeleteCardSubscriber)) return;
    if (!('subscribe' in onUpdateRoomSubscriber)) return;
    const onUpdateSubscription = onUpdateCardSubscriber.subscribe({
      next: onCardsChange,
    });
    const onCraeteSubscription = onCreateCardSubscriber.subscribe({
      next: onCardsChange,
    });
    const onDeleteCardSubscription = onDeleteCardSubscriber.subscribe({
      next: onCardsChange,
    });
    const onUpdateRoomSubscription = onUpdateRoomSubscriber.subscribe({
      next: (res: any) => {
        const room = res?.value?.data?.onUpdateRoom;
        if (room == null) return;
        setRoom({
          id: room.id,
          isCardsOpened: room.isCardsOpened,
        })
      },
    });

    return () => {
      // 画面を離れる時に購読解除する
      onUpdateSubscription.unsubscribe();
      onCraeteSubscription.unsubscribe();
      onDeleteCardSubscription.unsubscribe();
      onUpdateRoomSubscription.unsubscribe();
    };
  }, [fetchCards, onCardsChange])

  const onPokerCardClick = useCallback(async (e: MouseEvent<HTMLDivElement>) => {
    const number = Number(e.currentTarget.innerText);
    if (number === selectedCard?.number) return;
    setSelectedCard((current) => {
      return {
        id: current?.id,
        number,
      }
    });
    updateCard(number).then((card) => {
      setSelectedCard(card);
    }).catch((e) => {
      setSelectedCard(user?.card);
    });
  }, [selectedCard?.number, updateCard, user?.card]);

  const resetCards = useCallback(() => {
    if (room == null) return;
    cards.forEach(({ id }) => {
      API.graphql(
        graphqlOperation(deleteCard, {input: { id }})
      );
    });
    API.graphql(
      graphqlOperation(updateRoom, {input: {
        id: room.id,
        isCardsOpened: false,
      }})
    );
  }, [cards, room]);

  const onOpenButtonClick = useCallback(() => {
    if (room == null) return;
    return API.graphql(
      graphqlOperation(updateRoom, {input: {
        id: room.id,
        isCardsOpened: !room.isCardsOpened,
      }})
    );
  }, [room]);

  return (
    <Box style={styles.app}>
      <Grid container flexDirection='column' alignItems='flex-start' gap={6}>
        <Grid container gap={4}>
          <Button variant="contained" onClick={onOpenButtonClick}>{room?.isCardsOpened ? 'クローズ' : 'オープン'}</Button>
          <Button variant="contained" onClick={resetCards}>リセット</Button>
        </Grid>
        <Grid container gap={5} sx={{ minHeight: 98 }}>
          {
            cards.concat().sort((a, b) => {
              return new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime()
            }).map((card) => {
              if (card.number == null) return null;
              return (
                <Box key={card.id}>
                  <Typography>{card.user?.name}</Typography>
                  <PokerCard number={card.number} sx={{ ...cardSx, pointerEvents: 'none', mt: 0 }} isClosed={!room?.isCardsOpened} />
                </Box>
              );
            })
          }
        </Grid>
        <Box>
          <Grid container gap={2} alignItems='center'>
            <Typography>ユーザー名</Typography>
            <TextField
              variant="outlined"
              type="text"
              color="primary"
              size="small"
              sx={{ width: 120 }}
              value={userName}
              onChange={(e: any) => setUserName(e.target.value)}
              placeholder="ユーザー名を入力"
              inputProps={{ maxLength: 20 }}
              onBlur={updateUserName}
            />
          </Grid>
          <Grid container gap={2}>
            {
              [1, 2, 3, 5, 8, 13, 21, 34, 55, 89].map((number) => {
                return <PokerCard number={number} sx={number === selectedCard?.number ? selectedCardSx : cardSx} onClick={onPokerCardClick} key={number} />
              })
            }
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}

const cardSx: SxProps<Theme> = {
  mt: 4,
  transition: 'margin 0.2s 0s ease;',
};

const selectedCardSx: SxProps<Theme> = {
  mt: 2,
  border: '1px solid #00f',
  transition: 'margin 0.2s 0s ease;',
};

export default App;
