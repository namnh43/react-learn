import React, { memo } from "react";
import { Row, Col } from 'antd';
import { Pagination } from 'antd';

const PaginationMovies = (props) => {
    return (
        <>
            <Row style={{margin: '30px 0px'}}>
                <Col span={20} offset={2}>
                    <Pagination 
                        current={props.current} 
                        total={props.totalItems} 
                        pageSize={20}
                        showSizeChanger={false}
                        onChange={p => props.changePage(p)}
                    />;
                </Col>
            </Row>
        </>
        
    )

}
export default memo(PaginationMovies);