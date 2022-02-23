import { Form } from "../form/Form";

export type User = {
  country?: "India" | "America" | "Germany";
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  form?: Form | null;
  id: string;
  lastName: string | null;
  mobile: number | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
