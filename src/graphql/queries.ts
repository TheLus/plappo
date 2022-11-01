/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
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
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        isCardsOpened
        cards {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        cards {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCard = /* GraphQL */ `
  query GetCard($id: ID!) {
    getCard(id: $id) {
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
export const listCards = /* GraphQL */ `
  query ListCards(
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        number
        user {
          id
          name
          createdAt
          updatedAt
        }
        room {
          id
          isCardsOpened
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        roomCardsId
        userCardsId
      }
      nextToken
    }
  }
`;
