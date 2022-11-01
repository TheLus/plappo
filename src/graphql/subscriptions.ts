/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom($filter: ModelSubscriptionRoomFilterInput) {
    onCreateRoom(filter: $filter) {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom($filter: ModelSubscriptionRoomFilterInput) {
    onUpdateRoom(filter: $filter) {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom($filter: ModelSubscriptionRoomFilterInput) {
    onDeleteRoom(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateCard = /* GraphQL */ `
  subscription OnCreateCard($filter: ModelSubscriptionCardFilterInput) {
    onCreateCard(filter: $filter) {
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
export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard($filter: ModelSubscriptionCardFilterInput) {
    onUpdateCard(filter: $filter) {
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
export const onDeleteCard = /* GraphQL */ `
  subscription OnDeleteCard($filter: ModelSubscriptionCardFilterInput) {
    onDeleteCard(filter: $filter) {
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
