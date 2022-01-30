import React from 'react';
import { 
    CloseIcon, 
    SidebarContainer, 
    Icon, 
    SidebarWrapper, 
    SidebarLink,
    SidebarMenu,
    SidebarRoute,
    SideBtnWrap
} from './SidebarElements';

const Sidebar = (isOpen, toggle) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="Home" onClick={toggle}>
                    Home
                </SidebarLink>
                <SidebarLink to="Alarms" onClick={toggle}>
                    Alarms
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
