import React from "react";
import {Row, Col} from 'antd';
import LayoutMovies from '../../components/Layout';

const UpcomingMovies = () => {
    return (
        <LayoutMovies>
            <Row>
                <Col span={24}>
                    <h2> This is upcoming movies page.</h2>
                </Col>
            </Row>
        </LayoutMovies>
        
    )
}
export default React.memo(UpcomingMovies);