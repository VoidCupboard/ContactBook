import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  contacts: InputJsonValue;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
