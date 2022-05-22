import React, { FC, useState } from 'react';
import { Divider, Layout, Typography, Input, message, Form } from 'antd';
import AtomHeader from 'components/atoms/AtomHeader';
import AtomContent from 'components/atoms/AtomContent';
import AtomH2 from 'components/atoms/AtomH2';
import AtomSteps from 'components/atoms/AtomSteps';
import ModuleButtonGroup from 'components/modules/ModuleButtonGroup';

const ApplicationCreate: FC = () => {
  const [cur, setCur] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const prev = () => {
    if (0 < cur) {
      setCur(cur - 1);
      setIsDisabled(false);
    } else {
      message.info('This First Page');
    }
  };
  const next = () => {
    console.log('isDisabled : ', isDisabled);
    if (buttons.length - 1 > cur) {
      setIsDisabled(true);
      setCur(cur + 1);
    } else {
      message.info('Create API send');
    }
  };

  const steps = [
    { title: 'infomation', description: 'This is a infomation' },
    { title: 'review', description: 'This is a review' },
  ];
  const buttons = [
    { children: 'Prev', onClick: prev, type: 'primary' },
    1 <= cur
      ? {
          children: 'Create',
          type: 'primary',
          className: 'last',
          htmlType: 'submit',
        }
      : {
          children: 'Next',
          onClick: next,
          type: 'primary',
          className: 'last',
        },
  ];

  const rows = [
    {
      label: 'Project',
      name: 'project',
      rules: [{ required: true, message: 'Please input your project!' }],
      filed: <Input placeholder="Please Project" disabled={isDisabled} />,
    },
    {
      label: 'Job Name',
      name: 'job name',
      rules: [{ required: true, message: 'Please input your job!' }],
      filed: <Input placeholder="Please Job name" disabled={isDisabled} />,
    },
    {
      label: 'Git-URL',
      name: 'gitUrl',
      rules: [{ required: true, message: 'Please input your git-url!' }],
      filed: <Input addonBefore={'http://'} disabled={isDisabled} />,
    },
    {
      label: 'Git-Branch',
      name: 'gitBranch',
      filed: <Typography.Text keyboard>main</Typography.Text>,
    },
    {
      label: 'Git-Filepath',
      name: 'gitFilepath',
      filed: <Typography.Text keyboard>jobs/sample/error.sh</Typography.Text>,
    },
  ];

  const onFinish = (values: any) => {
    console.log('Success:', { ...values, gitBranch: 'main', gitFilepath: 'jobs/sample/error.sh' });
    message.info('Create API send');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    message.info('Failed Vaildation');
  };

  return (
    <Layout>
      <AtomHeader children={<AtomH2 children="Job Create" />} height={120} />
      <AtomContent>
        <AtomSteps current={cur} steps={steps} />
        <Divider />
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {rows.map((row, index) => (
            <Form.Item key={`${row.label}-${index}`} label={row.label} name={row.name} rules={row.rules}>
              {row.filed}
            </Form.Item>
          ))}
          <ModuleButtonGroup buttons={buttons} />
        </Form>
      </AtomContent>
    </Layout>
  );
};

export default ApplicationCreate;
