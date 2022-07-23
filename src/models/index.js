// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Groups } = initSchema(schema);

export {
  Groups
};