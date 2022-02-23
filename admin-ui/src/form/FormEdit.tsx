import * as React from "react";
import { Edit, SimpleForm, EditProps, SelectInput } from "react-admin";

export const FormEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
