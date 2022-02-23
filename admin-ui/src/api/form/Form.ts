import { User } from "../user/User";

export type Form = {
  createdAt: Date;
  id: string;
  role?: "Admin" | "Manager" | "Employee" | null;
  updatedAt: Date;
  users?: Array<User>;
};
