import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FormWhereUniqueInput } from "../form/FormWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UserWhereInput = {
  country?: "India" | "America" | "Germany";
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  form?: FormWhereUniqueInput;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  mobile?: IntNullableFilter;
  username?: StringFilter;
};
