import React from 'react';

import {Row, Col, Table} from 'antd';
import NumberFormat from 'react-number-format';
import VirusContext from '../context/virusContext';
import { helper } from '../helpers/common';

//Tao cot cho bang
const columns = [
    {
        title: 'Quoc gia',
        dataIndex: "Country",
        key: "Country"
    },
    {
        title: 'Ma QG',
        dataIndex: "CountryCode",
        key: "CountryCode"
    },
    {
        title: 'Moi nhiem benh',
        dataIndex: "NewConfirmed",
        key: "NewConfirmed",
        render: item => <NumberFormat value= {item} displayType={'text'}thousandSeparator={true} />
    },
    {
        title: 'Tong nhiem benh',
        dataIndex: "TotalConfirmed",
        key: "TotalConfirmed",
        render: item => <NumberFormat value= {item} displayType={'text'}thousandSeparator={true} />
    },
    {
        title: 'Moi tu vong',
        dataIndex: "NewDeaths",
        key: "NewDeatchs",
        render: item => <NumberFormat value= {item} displayType={'text'}thousandSeparator={true} />
    },
    {
        title: 'Tong tu vong',
        dataIndex: "TotalDeaths",
        key: "TotalDeaths",
        render: item => <NumberFormat value= {item} displayType={'text'}thousandSeparator={true} />
    },
    {
        title: 'Moi khoi benh',
        dataIndex: "NewRecovered",
        key: "NewRecovered",
        render: item => <NumberFormat value= {item} displayType={'text'}thousandSeparator={true} />
    },
    {
        title: 'Tong khoi benh',
        dataIndex: "TotalRecovered",
        key: "TotalRecovered",
        render: item => <NumberFormat value= {item} displayType={'text'}thousandSeparator={true} />
    }

];

class CountryVirus extends React.PureComponent {
    render() {
        return (
            <VirusContext.Consumer>
                {context => {
                    if (helper.isEmptyObject(context.countriesVirus)) {
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
                                    <h2 style={{textAlign: 'center'}}> Thong tin covid cac nuoc</h2>
                                    <Table rowKey="ID" columns={columns} dataSource={context.countriesVirus} /> 
                                </Col>
                            </Row>
                        )
                    }
                }}
            </VirusContext.Consumer>
            
        )
    }
}

export default CountryVirus;