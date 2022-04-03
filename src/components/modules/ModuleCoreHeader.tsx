import React from 'react';
import { MenuOutlined, CaretDownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import AtomHeader from 'components/atoms/AtomHeader';
import AtomH2 from 'components/atoms/AtomH2';
import AtomH4 from 'components/atoms/AtomH4';
import AtomSpan from 'components/atoms/AtomSpan';
const ModuleCoreHeader = () => {
  const navigation = useNavigate();
  return (
    <AtomHeader>
      <div className="menuController">
        <MenuOutlined></MenuOutlined>
      </div>
      <AtomH2 onClick={() => navigation('/')}>Junior Cloud Platform</AtomH2>
      <AtomH4 onClick={() => console.log('프로젝트..')}>
        <CaretDownOutlined></CaretDownOutlined>
        <AtomSpan>프로젝트 선택</AtomSpan>
      </AtomH4>
    </AtomHeader>
  );
};

export default ModuleCoreHeader;
