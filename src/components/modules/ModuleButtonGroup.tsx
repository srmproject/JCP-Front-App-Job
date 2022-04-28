import React, { FC } from 'react';
import { Row } from 'antd';
import AtomButton from 'components/atoms/AtomButton';
import { ButtonProperty, ButtonGroupProperty } from 'types/atoms';

const ModuleButtonGroup: FC<ButtonGroupProperty> = ({ buttons, className }) => {
  return (
    <Row style={{ display: 'flex', justifyContent: 'center' }} className={className}>
      {buttons.map((button: ButtonProperty) => (
        <AtomButton onClick={button.onClick} children={button.children} className={button.className} />
      ))}
    </Row>
  );
};

export default ModuleButtonGroup;
