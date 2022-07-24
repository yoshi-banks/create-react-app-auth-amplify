import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Groups {
  readonly id: string;
  readonly groupName?: string | null;
  readonly description?: string | null;
  constructor(init: ModelInit<Groups>);
  static copyOf(source: Groups, mutator: (draft: MutableModel<Groups>) => MutableModel<Groups> | void): Groups;
}