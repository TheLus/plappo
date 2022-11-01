// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Room, Card, User } = initSchema(schema);

export {
  Room,
  Card,
  User
};