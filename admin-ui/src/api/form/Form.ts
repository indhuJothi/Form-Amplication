import { User } from "../user/User";

export type Form = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  users?: Array<User>;
};
