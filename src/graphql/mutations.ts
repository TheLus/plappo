/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
      id
      isCardsOpened
      cards {
        items {
          id
          number
          createdAt
          updatedAt
          roomCardsId
          userCardsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
      id
      isCardsOpened
      cards {
        items {
          id
          number
          createdAt
          updatedAt
          roomCardsId
          userCardsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
      id
      isCardsOpened
      cards {
        items {
          id
          number
          createdAt
          updatedAt
          roomCardsId
          userCardsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      cards {
        items {
          id
          number
          createdAt
          updatedAt
          roomCardsId
          userCardsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      cards {
        items {
          id
          number
          createdAt
          updatedAt
          roomCardsId
          userCardsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      cards {
        items {
          id
          number
          createdAt
          updatedAt
          roomCardsId
          userCardsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCard = /* GraphQL */ `
  mutation CreateCard(
    $input: CreateCardInput!
    $condition: ModelCardConditionInput
  ) {
    createCard(input: $input, condition: $condition) {
      id
      number
      user {
        id
        name
        cards {
          nextToken
        }
        createdAt
        updatedAt
      }
      room {
        id
        isCardsOpened
        cards {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      roomCardsId
      userCardsId
    }
  }
`;
export const updateCard = /* GraphQL */ `
  mutation UpdateCard(
    $input: UpdateCardInput!
    $condition: ModelCardConditionInput
  ) {
    updateCard(input: $input, condition: $condition) {
      id
      number
      user {
        id
        name
        cards {
          nextToken
        }
        createdAt
        updatedAt
      }
      room {
        id
        isCardsOpened
        cards {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      roomCardsId
      userCardsId
    }
  }
`;
export const deleteCard = /* GraphQL */ `
  mutation DeleteCard(
    $input: DeleteCardInput!
    $condition: ModelCardConditionInput
  ) {
    deleteCard(input: $input, condition: $condition) {
      id
      number
      user {
        id
        name
        cards {
          nextToken
        }
        createdAt
        updatedAt
      }
      room {
        id
        isCardsOpened
        cards {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      roomCardsId
      userCardsId
    }
  }
`;
