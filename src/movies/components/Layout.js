import React, { memo } from "react";
import HeaderMovie from './partials/Header';
import FooterMovie from './partials/Footer';
import './styles/layout.css';
import { Layout } from 'antd';
const { Content } = Layout;

const LayoutMovie = (props) => {
    return (
        <Layout className="layout">
            <HeaderMovie/>
            <Content style={{padding: '0 50px'}}>
                <div className="site-layout-content">
                    {props.children}
                </div>
            </Content>
            <FooterMovie/>
        </Layout>
        
    )
}

export default React.memo(LayoutMovie);