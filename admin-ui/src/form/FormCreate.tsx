import * as React from "react";
import { Create, SimpleForm, CreateProps, SelectInput } from "react-admin";

export const FormCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="role"
          label="Role"
          choices={[
            { label: "Admin", value: "Admin" },
            { label: "Manager", value: "Manager" },
            { label: "Employee", value: "Employee" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
