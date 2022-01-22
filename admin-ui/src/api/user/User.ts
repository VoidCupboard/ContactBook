import { JsonValue } from "type-fest";

export type User = {
  contacts: JsonValue;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
