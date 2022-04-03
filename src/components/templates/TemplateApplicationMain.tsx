import React, { FC } from 'react';
import { Button, Table } from 'antd';
import styled from 'styled-components';
import { Divider } from 'antd';
const Styled = styled.div`
  h3: {
  }
`;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];
const TemplateApplicationMain: FC = () => {
  return (
    <Styled>
      <h3>Filter</h3>
      <Divider></Divider>
      <Button>생성버튼</Button>
      <Table columns={columns} dataSource={data} size="middle" />
    </Styled>
  );
};

export default TemplateApplicationMain;
