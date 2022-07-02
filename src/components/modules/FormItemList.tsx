import React, { FC, ReactNode } from 'react';
import { Form } from 'antd';

import { FormItemListProperty, FormItemProperty } from 'types/atoms';

const FormItemList: FC<FormItemListProperty> = ({ rows }) => {
  return (
    <>
      {rows.map((row: FormItemProperty, index: Number) => (
        <Form.Item key={`${row.label}-${index}`} label={row.label} name={row.name} rules={row.rules}>
          {row.filed}
        </Form.Item>
      ))}
    </>
  );
};
export default FormItemList;
