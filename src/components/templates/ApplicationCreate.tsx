import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Layout, Row, Col, Typography, Input, Select, message } from 'antd';
import { actions } from 'store/slices/createApp';
import { RootState } from '../../types/reducer';
import AtomHeader from 'components/atoms/AtomHeader';
import AtomContent from 'components/atoms/AtomContent';
import AtomH2 from 'components/atoms/AtomH2';
import AtomSteps from 'components/atoms/AtomSteps';
import ModuleButtonGroup from 'components/modules/ModuleButtonGroup';

const { Text, Title } = Typography;
const { Option } = Select;

const ApplicationCreate: FC = () => {
  const dispatch = useDispatch();
  const [cur, setCur] = useState(0);
  const counter = useSelector((state: RootState) => state.createApp);
  const plus = () => {
    dispatch(actions.increment());
  };
  const minus = () => {
    dispatch(actions.decrement());
  };

  const prev = () => {
    if (0 < cur) {
      setCur(cur - 1);
    } else {
      message.info('This First Page');
    }
  };
  const next = () => {
    console.log(cur);
    if (buttons.length - 1 > cur) {
      setCur(cur + 1);
    } else {
      message.info('Create API send');
    }
  };

  const selectBefore = (
    <Select defaultValue="http://" className="select-before">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );

  const steps = [
    { title: 'infomation', description: 'This is a infomation' },
    { title: 'review', description: 'This is a review' },
  ];
  const buttons = [
    { children: 'prev', onClick: prev, type: 'primary' },
    { children: `${1 <= cur ? 'create' : 'next'}`, onClick: next, type: 'primary', className: 'last' },
  ];
  const rows = [
    {
      label: 'Project',
      filed: <Input placeholder="Please Project" />,
      onchange: prev,
    },
    { label: 'Git', filed: <br />, onchange: prev },
    {
      label: 'Git-URL',
      filed: <Input addonBefore={selectBefore} placeholder="Please URL" />,
      onchange: prev,
    },
    { label: 'Git-Branch', filed: <Text keyboard>main</Text>, onchange: prev },
    { label: 'Git-Filepath', filed: <Text keyboard>jobs/sample/error.sh</Text>, onchange: prev },
  ];

  return (
    <Layout>
      <AtomHeader children={<AtomH2 children="Job Create" />} height={120} />
      <AtomContent>
        <AtomSteps current={cur} steps={steps} />
        <Divider />
        <Row style={{ minHeight: '290px' }}>
          <Col span={6} />
          <Col span={12}>
            {rows.map((row, index) => (
              <Row key={`${row.label}-${index}`} style={{ display: 'flex', justifyContent: 'center' }}>
                <Col span={12}>
                  <Title level={4}>{row.label}</Title>
                </Col>
                <Col span={12}>{row.filed}</Col>
              </Row>
            ))}
          </Col>
          <Col span={6} />
        </Row>
        <Divider />
        <ModuleButtonGroup buttons={buttons} />
      </AtomContent>
    </Layout>
  );
};

export default ApplicationCreate;
