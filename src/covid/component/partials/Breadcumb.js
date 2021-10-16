import React from 'react';
import {Breadcrumb } from 'antd';


class BreadcrumCovid extends React.PureComponent {
    render() {
        return(
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>{this.props.lv1}</Breadcrumb.Item>
                <Breadcrumb.Item>{this.props.lv2}</Breadcrumb.Item>
                <Breadcrumb.Item>{this.props.lv3}</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}

export default BreadcrumCovid;