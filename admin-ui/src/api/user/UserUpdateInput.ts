import { FormWhereUniqueInput } from "../form/FormWhereUniqueInput";

export type UserUpdateInput = {
  country?: "India" | "America" | "Germany";
  email?: string | null;
  firstName?: string | null;
  form?: FormWhereUniqueInput | null;
  lastName?: string | null;
  mobile?: number | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
