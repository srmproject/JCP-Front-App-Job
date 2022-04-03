import React, { FC } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { ContentProperty } from 'types/atoms';
const { Content } = Layout;
const StyledContent: any = styled(Content)``;

const AtomContent: FC<ContentProperty> = ({ children, className }) => {
  return <StyledContent className={className}>{children}</StyledContent>;
};

export default AtomContent;
