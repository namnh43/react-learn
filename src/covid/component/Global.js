import React from "react";

import {Row, Col, Card} from 'antd';
import { helper } from '../helpers/common';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

class GlobalVirus extends React.PureComponent {
    render() {
        if (helper.isEmptyObject(this.props.global)) {
            return (
                <Row style={{margin: '20px 0px'}}>
                    <Col span={24}>
                        <h2 style={{textAlign: 'center'}}> Khong co du lieu</h2>
                    </Col>
                </Row>
            )
        }
        return (
            <Row style={{margin: '20px 0px'}}>
                <Col span={24}>
                    <h2 style={{textAlign: 'center'}}> Thong tin covid tren toan cau</h2>
                    <Row>
                        <Col span={8}>
                            <Card title="Nhiem benh" bordered={true} >
                                <p>So ca moi nhiem: <NumberFormat value={this.props.global.NewConfirmed} displayType={'text'}
                                    thousandSeparator={true} /> </p>
                                <p>Tong so ca nhiem: <NumberFormat value={this.props.global.TotalConfirmed} displayType={'text'}
                                    thousandSeparator={true} /></p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Tu vong" bordered={true} >
                                <p>So ca moi tu vong: <NumberFormat value={this.props.global.NewDeaths} displayType={'text'}
                                    thousandSeparator={true} /></p>
                                <p>Tong so ca tu vong: <NumberFormat value={this.props.global.TotalDeaths} displayType={'text'}
                                    thousandSeparator={true} /></p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Khoi benh" bordered={true} >
                                <p>So ca moi khoi benh: <NumberFormat value={this.props.global.NewRecovered} displayType={'text'}
                                    thousandSeparator={true} /> </p>
                                <p>Tong so ca khoi benh: <NumberFormat value={this.props.global.TotalRecovered} displayType={'text'}
                                    thousandSeparator={true} /> </p>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

GlobalVirus.propTypes = {
    global: PropTypes.object
}
export default GlobalVirus;