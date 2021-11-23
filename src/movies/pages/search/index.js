import React, {useState} from "react";
import {Row, Col, Input, Skeleton } from 'antd';
import LayoutMovies from '../../components/Layout';
import {apiMovie } from '../../services/movie';
import {helper} from '../../helpers/common';
import ListMovies from '../../components/ListMovies';
import PaginationMovies from '../../components/Pagination';

const {Search} = Input;

const SearchMovies = () => {
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [dataMovies, setDataMovies] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    //viet ham tim kiem du lieu
    const searchDataMovie = async (nameMovie, p = 1) => {
        if (nameMovie !== '') {
            setLoadingSearch(true);
            if (nameMovie !== keyword) {
                setKeyword(nameMovie);
                //Khi nguoi dung bam tim kiem moi set lai keyword (vi keywork thay doi roi)
                // Khi bam phan trang, thi khong can set lai keyword (vi phan trang van dua tren dung tu khoa do)
            }
            const data = await apiMovie.searchMovieByKeyword(nameMovie, p);
            // console.log(data);
            if (!helper.isEmptyObject(data)) {
                //set du lieu cho state
                if (data.hasOwnProperty('results')) {
                    setDataMovies(data['results'])
                }
                if (data.hasOwnProperty('total_results')) {
                    setTotalItems(data['total_results']);
                }
                if (data.hasOwnProperty('total_pages')) {
                    setTotalPage(data['total_pages']);
                }
            }
            setLoadingSearch(false);
        }
    }

    //viet ham xu ly phan trang
    const changePage = (p) => {
        if (p >= 1 && p <= totalPage) {
            searchDataMovie(setKeyword, p);
            setPage(p);
        }
    }


    return (
        <LayoutMovies>
            <Row>
                <Col span={24}>
                <Search
                    placeholder="name of movies ..."
                    allowClear
                    enterButton="Search"
                    size="large"
                    loading = {loadingSearch}
                    onSearch= {val=> searchDataMovie(val)}
                    />
                </Col>
            </Row>
            {loadingSearch ? <Skeleton active/> : <ListMovies movies = {dataMovies} />}
            {dataMovies.length > 0 
            && 
            <PaginationMovies current= {page} total={totalItems} changePage = {changePage}/>}
        </LayoutMovies>
        
    )
}
export default React.memo(SearchMovies);