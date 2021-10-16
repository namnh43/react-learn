import React from "react";

import HeaderVirus from './partials/Header';
import FooterVirus from './partials/Footer';
import BreadcrumVirus from './partials/Breadcumb'; // do export default nen dat ten ntn cung duoc


import { Layout } from 'antd';
import './common.css'

const {Content} = Layout;

class LayoutVirus extends React.PureComponent {
    render() {
        return (
            <Layout className="layout">
                <HeaderVirus/>
                <Content style={{ padding: '0 50px' }}>
                    <BreadcrumVirus
                        lv1={this.props.lv1}
                        lv2={this.props.lv2}
                        lv3={this.props.lv3}
                    />
                    <div className="site-layout-content">
                        {this.props.children}
                    </div>
                </Content>
                <FooterVirus/>
            </Layout>
        )
    }
}
export default LayoutVirus;