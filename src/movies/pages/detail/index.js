import React , {useState, useEffect} from 'react';
import { Row, Col, Skeleton } from 'antd';
import LayoutMovies from '../../components/Layout';
import {useParams} from 'react-router-dom';
import {apiMovie} from '../../services/movie';
import { helper } from '../../helpers/common';

const DetailMovie = () => {
    const {id} = useParams();
    const [loadingDetail, setLoadingDetail] = useState(false);
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        const getData = async () => {
            if (!isNaN(id)) {
                setLoadingDetail(true);
                const data = await apiMovie.getDataMovieById(id);
                console.log(data);
                if (!helper.isEmptyObject(data)) {
                    setDetailData(data);
                }
                setLoadingDetail(false);
            }
        }
        getData();
    }, [id])

    if (loadingDetail) {
        return (
            <LayoutMovies>
                <Skeleton active />
            </LayoutMovies>
            
        )
    }

    if (helper.isEmptyObject(detailData)) {
        return (
            <LayoutMovies>
                <h2> Not found data </h2>
            </LayoutMovies>
        )
    }
    return (
        <LayoutMovies>
            <Row>
                <Col span={24}>
                    <h1> chi tiet phim: {detailData.original_title}</h1>
                    <p> Tom tat noi dung: {detailData.overview}</p>
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(DetailMovie);