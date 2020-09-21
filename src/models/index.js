// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Task, Note, Account } = initSchema(schema);

export {
  Task,
  Note,
  Account
};