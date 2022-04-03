import React, { FC } from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';
import { MenuProperty } from 'types/atoms';
const StyledMenu = styled(Menu)`
  height: 100%;
`;
const { Item } = Menu;

const AtomMenu: FC<MenuProperty> = ({ onClick }) => {
  return (
    <StyledMenu mode="inline">
      <Menu.Item key="1" onClick={onClick}>
        Sample
      </Menu.Item>
      <Item key="2" onClick={onClick}>
        Application
      </Item>
      <Item key="3" onClick={onClick}>
        Job
      </Item>
    </StyledMenu>
  );
};

export default AtomMenu;
