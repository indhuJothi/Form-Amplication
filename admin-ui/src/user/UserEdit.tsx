import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceInput,
  NumberInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { FormTitle } from "../form/FormTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="country"
          label="Country"
          choices={[
            { label: "India", value: "India" },
            { label: "America", value: "America" },
            { label: "Germany", value: "Germany" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <ReferenceInput source="form.id" reference="Form" label="Form">
          <SelectInput optionText={FormTitle} />
        </ReferenceInput>
        <TextInput label="Last Name" source="lastName" />
        <NumberInput step={1} label="Mobile" source="mobile" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
