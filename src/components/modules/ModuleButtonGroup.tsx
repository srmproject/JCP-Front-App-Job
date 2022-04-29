import React, { FC } from 'react';
import styled from 'styled-components';
import { Row } from 'antd';
import AtomButton from 'components/atoms/AtomButton';
import { ButtonProperty, ButtonGroupProperty } from 'types/atoms';

const StyledRow: any = styled(Row)`
  display: flex;
  justify-content: center;
  button {
    margin-right: 10px;
  }
  .last {
    margin-right: 0;
  }
`;
const ModuleButtonGroup: FC<ButtonGroupProperty> = ({ buttons, className }) => {
  return (
    <StyledRow className={className}>
      {buttons.map((button: ButtonProperty, index) => (
        <AtomButton
          key={`${button.children}-${index}`}
          onClick={button.onClick}
          children={button.children}
          className={button.className}
          type={button.type}
        />
      ))}
    </StyledRow>
  );
};

export default ModuleButtonGroup;
