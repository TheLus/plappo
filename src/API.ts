/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRoomInput = {
  id?: string | null,
  isCardsOpened?: boolean | null,
};

export type ModelRoomConditionInput = {
  isCardsOpened?: ModelBooleanInput | null,
  and?: Array< ModelRoomConditionInput | null > | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  not?: ModelRoomConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type Room = {
  __typename: "Room",
  id: string,
  isCardsOpened?: boolean | null,
  cards?: ModelCardConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCardConnection = {
  __typename: "ModelCardConnection",
  items:  Array<Card | null >,
  nextToken?: string | null,
};

export type Card = {
  __typename: "Card",
  id: string,
  number?: number | null,
  user: User,
  room: Room,
  createdAt: string,
  updatedAt: string,
  roomCardsId?: string | null,
  userCardsId?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  cards?: ModelCardConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRoomInput = {
  id: string,
  isCardsOpened?: boolean | null,
};

export type DeleteRoomInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateCardInput = {
  id?: string | null,
  number?: number | null,
  roomCardsId?: string | null,
  userCardsId?: string | null,
};

export type ModelCardConditionInput = {
  number?: ModelIntInput | null,
  and?: Array< ModelCardConditionInput | null > | null,
  or?: Array< ModelCardConditionInput | null > | null,
  not?: ModelCardConditionInput | null,
  roomCardsId?: ModelIDInput | null,
  userCardsId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCardInput = {
  id: string,
  number?: number | null,
  roomCardsId?: string | null,
  userCardsId?: string | null,
};

export type DeleteCardInput = {
  id: string,
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null,
  isCardsOpened?: ModelBooleanInput | null,
  and?: Array< ModelRoomFilterInput | null > | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  not?: ModelRoomFilterInput | null,
};

export type ModelRoomConnection = {
  __typename: "ModelRoomConnection",
  items:  Array<Room | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelCardFilterInput = {
  id?: ModelIDInput | null,
  number?: ModelIntInput | null,
  and?: Array< ModelCardFilterInput | null > | null,
  or?: Array< ModelCardFilterInput | null > | null,
  not?: ModelCardFilterInput | null,
  roomCardsId?: ModelIDInput | null,
  userCardsId?: ModelIDInput | null,
};

export type ModelSubscriptionRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  isCardsOpened?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionRoomFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  number?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCardFilterInput | null > | null,
  or?: Array< ModelSubscriptionCardFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateRoomMutationVariables = {
  input: CreateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type CreateRoomMutation = {
  createRoom?:  {
    __typename: "Room",
    id: string,
    isCardsOpened?: boolean | null,
    cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        roomCardsId?: string | null,
        userCardsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRoomMutationVariables = {
  input: UpdateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type UpdateRoomMutation = {
  updateRoom?:  {
    __typename: "Room",
    id: string,
    isCardsOpened?: boolean | null,
    cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        roomCardsId?: string | null,
        userCardsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRoomMutationVariables = {
  input: DeleteRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type DeleteRoomMutation = {
  deleteRoom?:  {
    __typename: "Room",
    id: string,
    isCardsOpened?: boolean | null,
    cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        roomCardsId?: string | null,
        userCardsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        roomCardsId?: string | null,
        userCardsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        roomCardsId?: string | null,
        userCardsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        roomCardsId?: string | null,
        userCardsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCardMutationVariables = {
  input: CreateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type CreateCardMutation = {
  createCard?:  {
    __typename: "Card",
    id: string,
    number?: number | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      cards?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    room:  {
      __typename: "Room",
      id: string,
      isCardsOpened?: boolean | null,
      cards?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    roomCardsId?: string | null,
    userCardsId?: string | null,
  } | null,
};

export type UpdateCardMutationVariables = {
  input: UpdateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type UpdateCardMutation = {
  updateCard?:  {
    __typename: "Card",
    id: string,
    number?: number | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      cards?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    room:  {
      __typename: "Room",
      id: string,
      isCardsOpened?: boolean | null,
      cards?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    roomCardsId?: string | null,
    userCardsId?: string | null,
  } | null,
};

export type DeleteCardMutationVariables = {
  input: DeleteCardInput,
  condition?: ModelCardConditionInput | null,
};

export type DeleteCardMutation = {
  deleteCard?:  {
    __typename: "Card",
    id: string,
    number?: number | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      cards?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    room:  {
      __typename: "Room",
      id: string,
      isCardsOpened?: boolean | null,
      cards?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    roomCardsId?: string | null,
    userCardsId?: string | null,
  } | null,
};

export type GetRoomQueryVariables = {
  id: string,
};

export type GetRoomQuery = {
  getRoom?:  {
    __typename: "Room",
    id: string,
    isCardsOpened?: boolean | null,
    cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        roomCardsId?: string | null,
        userCardsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRoomsQueryVariables = {
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoomsQuery = {
  listRooms?:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      id: string,
      isCardsOpened?: boolean | null,
      cards?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        roomCardsId?: string | null,
        userCardsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      cards?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCardQueryVariables = {
  id: string,
};

export type GetCardQuery = {
  getCard?:  {
    __typename: "Card",
    id: string,
    number?: number | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      cards?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    room:  {
      __typename: "Room",
      id: string,
      isCardsOpened?: boolean | null,
      cards?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    roomCardsId?: string | null,
    userCardsId?: string | null,
  } | null,
};

export type ListCardsQueryVariables = {
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCardsQuery = {
  listCards?:  {
    __typename: "ModelCardConnection",
    items:  Array< {
      __typename: "Card",
      id: string,
      number?: number | null,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      room:  {
        __typename: "Room",
        id: string,
        isCardsOpened?: boolean | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      roomCardsId?: string | null,
      userCardsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom?:  {
    __typename: "Room",
    id: string,
    isCardsOpened?: boolean | null,
    cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        roomCardsId?: string | null,
        userCardsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom?:  {
    __typename: "Room",
    id: string,
    isCardsOpened?: boolean | null,
    cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        roomCardsId?: string | null,
        userCardsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom?:  {
    __typename: "Room",
    id: string,
    isCardsOpened?: boolean | null,
    cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        roomCardsId?: string | null,
        userCardsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        roomCardsId?: string | null,
        userCardsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        roomCardsId?: string | null,
        userCardsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        roomCardsId?: string | null,
        userCardsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCardSubscriptionVariables = {
  filter?: ModelSubscriptionCardFilterInput | null,
};

export type OnCreateCardSubscription = {
  onCreateCard?:  {
    __typename: "Card",
    id: string,
    number?: number | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      cards?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    room:  {
      __typename: "Room",
      id: string,
      isCardsOpened?: boolean | null,
      cards?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    roomCardsId?: string | null,
    userCardsId?: string | null,
  } | null,
};

export type OnUpdateCardSubscriptionVariables = {
  filter?: ModelSubscriptionCardFilterInput | null,
};

export type OnUpdateCardSubscription = {
  onUpdateCard?:  {
    __typename: "Card",
    id: string,
    number?: number | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      cards?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    room:  {
      __typename: "Room",
      id: string,
      isCardsOpened?: boolean | null,
      cards?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    roomCardsId?: string | null,
    userCardsId?: string | null,
  } | null,
};

export type OnDeleteCardSubscriptionVariables = {
  filter?: ModelSubscriptionCardFilterInput | null,
};

export type OnDeleteCardSubscription = {
  onDeleteCard?:  {
    __typename: "Card",
    id: string,
    number?: number | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      cards?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    room:  {
      __typename: "Room",
      id: string,
      isCardsOpened?: boolean | null,
      cards?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    roomCardsId?: string | null,
    userCardsId?: string | null,
  } | null,
};
