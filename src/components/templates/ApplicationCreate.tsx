import React, { FC, useState, useEffect, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from 'store/slices/createJob';
import { Divider, Layout, Select, Input, message, Form } from 'antd';
import AtomHeader from 'components/atoms/AtomHeader';
import AtomContent from 'components/atoms/AtomContent';
import AtomH2 from 'components/atoms/AtomH2';
import AtomSteps from 'components/atoms/AtomSteps';
import ModuleButtonGroup from 'components/modules/ModuleButtonGroup';
import FormItemList from 'components/modules/FormItemList';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const ApplicationCreate: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cur, setCur] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const prev = () => {
    if (0 < cur) {
      setCur(cur - 1);
    } else {
      message.info('This First Page');
    }
  };
  const next = () => {
    if (steps.length - 1 > cur) {
      setCur(cur + 1);
    }
  };

  const steps = [
    { title: 'infomation', description: 'This is a infomation' },
    { title: 'git', description: 'This is a github infomation' },
    { title: 'review', description: 'This is a review' },
  ];
  const buttons = [
    { children: 'Prev', onClick: prev, type: 'primary' },
    2 <= cur
      ? {
          children: 'Create',
          type: 'primary',
          className: 'last',
          htmlType: 'submit',
        }
      : {
          children: 'Next',
          type: 'primary',
          className: 'last',
          htmlType: 'submit',
        },
  ];

  const rows1 = [
    {
      label: 'Project',
      name: 'project',
      rules: [{ required: true, message: 'Please input your project!' }],
      filed: <Input placeholder="Please Project" disabled={isDisabled} />,
    },
    {
      label: 'Job Name',
      name: 'job_name',
      rules: [{ required: true, message: 'Please input your job!' }],
      filed: <Input placeholder="Please Job name" disabled={isDisabled} />,
    },
    {
      label: 'Job Description',
      name: 'job_description',
      filed: <Input placeholder="Please Job description" disabled={isDisabled} />,
    },
    {
      label: 'Lang Tpye',
      name: 'lang_tpye',
      rules: [{ required: true, message: 'Please input your lang type!' }],
      filed: (
        <Select placeholder="Please Lang tpye" disabled={isDisabled}>
          <Option value="shell">shell</Option>
          <Option value="python">python</Option>
          <Option value="go">go</Option>
        </Select>
      ),
    },
    {
      label: 'Lang Version',
      name: 'lang_version',
      rules: [{ required: true, message: 'Please input your lang version!' }],
      filed: <Input placeholder="Please Lang Version" disabled={isDisabled} />,
    },
  ];
  const rows2 = [
    {
      label: 'Git-URL',
      name: 'git_url',
      rules: [{ required: true, message: 'Please input your git-url!' }],
      filed: <Input addonBefore={'https://github.com/'} disabled={isDisabled} />,
    },
    {
      label: 'Git-Branch',
      name: 'git_branch',
      rules: [{ required: true, message: 'Please input your git branch!' }],
      filed: <Input placeholder="Please Git-Branch" disabled={isDisabled} />,
    },
    {
      label: 'Git-Filepath',
      name: 'git_filepath',
      rules: [{ required: true, message: 'Please input your git filepath!' }],
      filed: <Input placeholder="Please Git-Filepath" disabled={isDisabled} />,
    },
  ];

  const onFinish = async (values: any) => {
    if (steps.length - 2 >= cur) {
      return next();
    }
    try {
      dispatch(actions.createJob(values));
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error('Failed:', errorInfo);
    message.info('Failed Vaildation');
  };

  useEffect(() => {
    if (steps.length - 1 <= cur) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [steps, cur]);
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
          {cur === 0 && <FormItemList rows={rows1} />}
          {cur === 1 && <FormItemList rows={rows2} />}
          {cur === 2 && <FormItemList rows={[...rows1, ...rows2]} />}
          <ModuleButtonGroup buttons={buttons} />
        </Form>
      </AtomContent>
    </Layout>
  );
};

export default ApplicationCreate;
