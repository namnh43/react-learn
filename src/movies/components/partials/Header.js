import React from 'react';
import { Layout, Menu } from 'antd';
import {NavLink,
    useLocation, useHistory
} from "react-router-dom";

import { helper } from '../../helpers/common';

const { Header } = Layout;

const HeaderMovie = () => {
    const history = useHistory();
    let location = useLocation();//hooks cua react routes
    let { pathname } = location;
    let username = helper.getUsernameLogin();
    const logoutUser = () => {
        // xoa token
        helper.removeToken();
        //quay ve trang login
        history.push('/login');
    }
    return (
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
                <Menu.Item key="/popular-movie">
                    <NavLink to="/popular-movie">Popular movie</NavLink>
                </Menu.Item>
                <Menu.Item key="/upcoming-movie">
                    <NavLink to="/upcoming-movie">Upcoming movie</NavLink>
                </Menu.Item>
                <Menu.Item key="/search-movie">
                    <NavLink to="/search-movie">Search</NavLink>
                </Menu.Item>
                <Menu.Item key="/favorite-movie">Favorites</Menu.Item>
                {username !== null ? 
                (
                    <>
                         <Menu.Item key="/profile-user">
                            <NavLink to="/profile-user">Hi: {username}</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/logout" onClick={() => logoutUser()}>Logout</Menu.Item>
                    </>
                ) : 
                (
                    <>
                    <Menu.Item key="/login">
                        <NavLink to="/login">Login</NavLink>
                    </Menu.Item>
                    </>
                )
            
                }
                
               
            </Menu>
        </Header>
        
    )
}
export default React.memo(HeaderMovie);