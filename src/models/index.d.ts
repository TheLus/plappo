import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type RoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerRoom = {
  readonly id: string;
  readonly isCardsOpened?: boolean | null;
  readonly cards?: (Card | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRoom = {
  readonly id: string;
  readonly isCardsOpened?: boolean | null;
  readonly cards: AsyncCollection<Card>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Room = LazyLoading extends LazyLoadingDisabled ? EagerRoom : LazyRoom

export declare const Room: (new (init: ModelInit<Room, RoomMetaData>) => Room) & {
  copyOf(source: Room, mutator: (draft: MutableModel<Room, RoomMetaData>) => MutableModel<Room, RoomMetaData> | void): Room;
}

type EagerCard = {
  readonly id: string;
  readonly number?: number | null;
  readonly user: User;
  readonly room: Room;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCard = {
  readonly id: string;
  readonly number?: number | null;
  readonly user: AsyncItem<User>;
  readonly room: AsyncItem<Room>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Card = LazyLoading extends LazyLoadingDisabled ? EagerCard : LazyCard

export declare const Card: (new (init: ModelInit<Card, CardMetaData>) => Card) & {
  copyOf(source: Card, mutator: (draft: MutableModel<Card, CardMetaData>) => MutableModel<Card, CardMetaData> | void): Card;
}

type EagerUser = {
  readonly id: string;
  readonly name: string;
  readonly cards?: (Card | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly name: string;
  readonly cards: AsyncCollection<Card>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}