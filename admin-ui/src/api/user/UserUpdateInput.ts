import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  contacts?: InputJsonValue;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
