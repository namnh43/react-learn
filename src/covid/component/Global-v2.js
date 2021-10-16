import React from "react";

import {Row, Col, Card} from 'antd';
import { helper } from '../helpers/common';
import NumberFormat from 'react-number-format';
import VirusContext from "../context/virusContext";

class GlobalVirus extends React.PureComponent {
    render() {
        return (
            <VirusContext.Consumer>
                { context => { //Cu phap cua thang cunsumer providor
                    if (helper.isEmptyObject(context.globalVirus)) {
                        return (
                            <Row style={{margin: '20px 0px'}}>
                                <Col span={24}>
                                    <h2 style={{textAlign: 'center'}}> Dang xu ly</h2>
                                </Col>
                            </Row>
                        )
                    } else {
                        return (
                            <Row style={{margin: '20px 0px'}}>
                                <Col span={24}>
                                    <h2 style={{textAlign: 'center'}}> Thong tin covid tren toan cau</h2>
                                    <Row>
                                        <Col span={8}>
                                            <Card title="Nhiem benh" bordered={true} >
                                                <p>So ca moi nhiem: <NumberFormat value={context.globalVirus.NewConfirmed} displayType={'text'}
                                                    thousandSeparator={true} /> </p>
                                                <p>Tong so ca nhiem: <NumberFormat value={context.globalVirus.TotalConfirmed} displayType={'text'}
                                                    thousandSeparator={true} /></p>
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card title="Tu vong" bordered={true} >
                                                <p>So ca moi tu vong: <NumberFormat value={context.globalVirus.NewDeaths} displayType={'text'}
                                                    thousandSeparator={true} /></p>
                                                <p>Tong so ca tu vong: <NumberFormat value={context.globalVirus.TotalDeaths} displayType={'text'}
                                                    thousandSeparator={true} /></p>
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card title="Khoi benh" bordered={true} >
                                                <p>So ca moi khoi benh: <NumberFormat value={context.globalVirus.NewRecovered} displayType={'text'}
                                                    thousandSeparator={true} /> </p>
                                                <p>Tong so ca khoi benh: <NumberFormat value={context.globalVirus.TotalRecovered} displayType={'text'}
                                                    thousandSeparator={true} /> </p>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        )}
                }}
            </VirusContext.Consumer>
        )
    }
}

export default GlobalVirus;