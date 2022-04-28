import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Layout, Row, Col } from 'antd';
import { actions } from 'store/slices/createApp';
import { RootState } from '../../types/reducer';
import AtomHeader from 'components/atoms/AtomHeader';
import AtomContent from 'components/atoms/AtomContent';
import AtomH2 from 'components/atoms/AtomH2';
import AtomSteps from 'components/atoms/AtomSteps';
import ModuleButtonGroup from 'components/modules/ModuleButtonGroup';

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
    setCur(cur - 1);
  };
  const next = () => {
    setCur(cur + 1);
  };

  const steps = [
    { title: 'infomation', description: 'This is a infomation' },
    { title: 'resource', description: 'This is a resource' },
    { title: 'review', description: 'This is a review' },
  ];
  const buttons = [
    { children: 'prev', onClick: prev },
    { children: 'next', onClick: next },
  ];
  const rows = [
    { label: 'testlabel', filed: <input />, onchange: prev },
    { label: 'testlabel2', filed: <input />, onchange: prev },
    { label: 'testlabel3', filed: <input />, onchange: prev },
    { label: 'testlabel4', filed: <input />, onchange: prev },
  ];

  return (
    <Layout>
      <AtomHeader children={<AtomH2 children="Job Create" />} height={150} />
      <AtomContent>
        <AtomSteps current={cur} steps={steps} />
        <Divider />
        <Row>
          <Col span={8} />
          <Col span={8}>
            {rows.map((row) => (
              <Row style={{ display: 'flex', justifyContent: 'center' }}>
                <Col span={12}>{row.label}</Col>
                <Col span={12}>{row.filed}</Col>
              </Row>
            ))}
          </Col>
          <Col span={8} />
        </Row>
        <Divider />
        <ModuleButtonGroup buttons={buttons} />
      </AtomContent>
    </Layout>
  );
};

export default ApplicationCreate;
