import React from "react";

import {Row, Col} from 'antd';
import { Card } from 'antd';
import slugify from 'react-slugify';
import { Link } from "react-router-dom";

const { Meta } = Card;

const ListMovies = (props) => {
    if (props.movies.length <=0) {
        return (
            <Row style={{ margin: '30px 0px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign:'center'}}> Khong co du lieu</h1>
                </Col>
            </Row>
        )
    }
    return (
        <>
            <Row style={{ margin: '30px 0px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign:'center'}}> Thong tin cac bo phim</h1>
                    <Row>
                        {props.movies.map((item, index) => {
                            return (
                                <Col span={6} key={index}>
                                    <Link to={`${slugify(item.title)}~${item.id}`}>
                                        <Card
                                            hoverable
                                            style={{ marginLeft: '5px', marginBottom: '12px' }}
                                            cover={<img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />}
                                        >
                                            <Meta title={item.title} />
                                        </Card>
                                    </Link>
                                </Col>
                            )
                            
                        })}
                        
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default React.memo(ListMovies);