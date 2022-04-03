import React, { FC } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { HeaderProperty } from 'types/atoms';
const { Header } = Layout;

interface styleProps {
  height: number;
}
const StyledHeader: any = styled(Header)`
  display: flex;
  background: #1a73e8;
  padding: 0 25px;
  height: ${(props: styleProps) => props.height}px;
  line-height: ${(props: styleProps) => props.height}px;
  .menuController {
    .anticon.anticon-menu {
      color: white;
      cursor:pointer;
    }
    .
  }
`;

const AtomHeader: FC<HeaderProperty> = ({ children, className, height }) => {
  return (
    <StyledHeader height={height} className={className}>
      {children}
    </StyledHeader>
  );
};

AtomHeader.defaultProps = {
  height: 48,
};
export default AtomHeader;
