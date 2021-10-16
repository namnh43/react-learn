import React from 'react';

import {Row, Col, Table} from 'antd';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
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
            <Row style={{margin: '20px 0px'}}>
                <Col span={24}>
                    <h2 style={{textAlign: 'center'}}> Thong tin covid cac nuoc</h2>
                    <Table rowKey="ID" columns={columns} dataSource={this.props.countries} /> 
                </Col>
            </Row>
        )
    }
}
CountryVirus.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.object)
}
export default CountryVirus;