import React, { FC, useState } from 'react';
import { Steps } from 'antd';
import { StepsProperty, Step } from 'types/atoms';

const { Step } = Steps;
const AtomSteps: FC<StepsProperty> = ({ current, steps, className }) => {
  return (
    <Steps current={current} className={className}>
      {steps.map((step: Step) => (
        <Step title={step.title} description={step.description} />
      ))}
    </Steps>
  );
};

export default AtomSteps;
