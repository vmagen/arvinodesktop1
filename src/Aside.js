import React from 'react';
import { useIntl } from 'react-intl';
import logo from './assets/Logo small.png';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import {Button} from 'react-bootstrap';

const Aside = ({ collapsed, rtl, toggled, handleToggleSidebar, handleRtlChange }) => {
  const intl = useIntl();
  return (
    <ProSidebar
      className="pro-sidebar"
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="sm"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div style={{marginRight: 50}}>
          <img className="logo" src={logo} >
          </img>
          </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu style={{ textAlign: 'center' }} >
          <MenuItem>
            <span >{intl.formatMessage({ id: 'ProductManagment' })}</span>
          </MenuItem>
          <MenuItem>
            <span>{intl.formatMessage({ id: 'ProfileManagment' })}</span>
          </MenuItem>
          <MenuItem>
            <span >{intl.formatMessage({ id: 'WineryDetails' })}</span>
          </MenuItem>
          <MenuItem>
            <span>{intl.formatMessage({ id: 'CustomerView' })}</span>
          </MenuItem>
          <MenuItem>
            <span>{intl.formatMessage({ id: 'AddWine' })}</span>
          </MenuItem>
          <MenuItem>
            <span>{intl.formatMessage({ id: 'AddEvent' })}</span>
          </MenuItem>
          <MenuItem>
            <span>{intl.formatMessage({ id: 'AddService' })}</span>
          </MenuItem>
        </Menu>
        
      </SidebarContent>
      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <span> {intl.formatMessage({ id: 'ContactUs' })}</span>
        </div>
      </SidebarFooter>
      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <span> {intl.formatMessage({ id: 'logOut' })}</span>
        </div>
      </SidebarFooter>
      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
         <Button variant="light" onClick={()=>handleRtlChange(false)}> {intl.formatMessage({id: 'ChangeLang'})}</Button> 
         </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
