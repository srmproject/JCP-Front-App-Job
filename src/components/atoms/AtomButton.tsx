import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { ButtonProperty } from 'types/atoms';

const StyledButton: any = styled(Button)``;
const AtomButton: FC<ButtonProperty> = ({ children, onClick, className, type, htmlType }) => {
  return (
    <StyledButton onClick={onClick} className={className} type={type} htmlType={htmlType}>
      {children}
    </StyledButton>
  );
};

export default AtomButton;
