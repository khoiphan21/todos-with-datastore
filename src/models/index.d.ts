import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Task {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly status?: string;
  constructor(init: ModelInit<Task>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

export declare class Note {
  readonly id: string;
  readonly content: string;
  readonly taskId?: string;
  constructor(init: ModelInit<Note>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}

export declare class Account {
  readonly id: string;
  readonly version?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly createdBy?: string;
  readonly updatedBy?: string;
  readonly cognitoId?: string;
  readonly email?: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly workspaces: string[];
  readonly formSharingConfigs: string[];
  readonly assignedForms: string[];
  readonly activeNavBarView?: string;
  constructor(init: ModelInit<Account>);
  static copyOf(source: Account, mutator: (draft: MutableModel<Account>) => MutableModel<Account> | void): Account;
}