import React from 'react';
import { CloseIcon, SidebarContainer, Icon } from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="Home">Home</SidebarLink>
                <SidebarLink to="Alarms">Alarms</SidebarLink>
            </SidebarMenu>
            <SideBtmWrap>
                <SidebarRoute to>Sign In</SidebarRoute>
            </SideBtmWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
