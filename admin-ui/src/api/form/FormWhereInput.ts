import { StringFilter } from "../../util/StringFilter";

export type FormWhereInput = {
  id?: StringFilter;
  role?: "Admin" | "Manager" | "Employee";
};
