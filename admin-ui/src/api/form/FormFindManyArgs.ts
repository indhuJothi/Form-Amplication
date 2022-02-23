import { FormWhereInput } from "./FormWhereInput";
import { FormOrderByInput } from "./FormOrderByInput";

export type FormFindManyArgs = {
  where?: FormWhereInput;
  orderBy?: FormOrderByInput;
  skip?: number;
  take?: number;
};
