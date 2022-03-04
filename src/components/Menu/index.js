import {ProSidebar, Menu, MenuItem, SidebarHeader} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import {AiOutlineUser} from 'react-icons/ai';
import {BiNews, BiShoppingBag, BiCalendar} from 'react-icons/bi';
import {MdPeopleOutline, MdOutlineSchool} from 'react-icons/md';
import {TiWarningOutline} from 'react-icons/ti';
import {VscGraphLine} from 'react-icons/vsc';
import {GiHamburgerMenu} from 'react-icons/gi'
import React, {useState} from 'react';

function Index(props) {
    const [collapsed, setCollapsed] = useState(false);
    const stylesNames = collapsed ? 'menu-link-collapsed' : 'menu-link';
    return (
        <ProSidebar collapsed={collapsed} style={{height: '100%'}}>
            <SidebarHeader className="menu-link">
                <div className="d-flex justify-content-between">
                    {!collapsed ? <p>Logo</p> : null}
                    <button onClick={() => setCollapsed(!collapsed)} className={!collapsed ? "btn-burguer" : "btn-burguer-collapsed"}><GiHamburgerMenu/></button>
                </div>
            </SidebarHeader>
            <Menu className="pro-sidebar">
                <MenuItem icon={<AiOutlineUser className="blue-icon"/>}
                          className="menu-link-selected"><p className={stylesNames}>Administradores</p></MenuItem>
                <MenuItem icon={<BiNews className="blue-icon"/>}><p className={stylesNames}>Catalogos</p></MenuItem>
                <MenuItem icon={<MdPeopleOutline className="blue-icon"/>} className="menu-link"><p
                    className={stylesNames}>Líderes</p></MenuItem>
                <MenuItem icon={<BiShoppingBag className="blue-icon"/>} className="menu-link"><p
                    className={stylesNames}>Usuarios</p></MenuItem>
                <MenuItem icon={<MdPeopleOutline className="blue-icon"/>} className="menu-link"><p
                    className={stylesNames}>mpresa</p></MenuItem>
                <MenuItem icon={<MdOutlineSchool className="blue-icon"/>} className="menu-link"><p
                    className={stylesNames}>Cursos</p></MenuItem>
                <MenuItem icon={<BiShoppingBag className="blue-icon"/>} className="menu-link"><p
                    className={stylesNames}>Recompensas</p></MenuItem>
                <MenuItem icon={<BiCalendar className="blue-icon"/>} className="menu-link"><p
                    className={stylesNames}>Eventos</p></MenuItem>
                <MenuItem icon={<TiWarningOutline className="blue-icon"/>}
                          className="menu-link"><p className={stylesNames}>Notificaciones</p></MenuItem>
                <MenuItem icon={<VscGraphLine className="blue-icon"/>} className="menu-link"><p
                    className={stylesNames}>Reportes</p></MenuItem>
            </Menu>
        </ProSidebar>
    );
}

export default Index;