import React from 'react';
import { CloseIcon, SidebarContainer, Icon } from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon/>
        </Icon>
    </SidebarContainer>
  );
};

export default Sidebar;
