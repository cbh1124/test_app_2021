import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

/*Movie Api를 작업하는 컴포넌트 */
function Movie({id, title, year, summary, poster, genres}) {
    return (
        <div className = "movie">
            <Link 
            to={{
                pathname: '/movie-detail',
                state:{year, title, summary, poster, genres},
            }}
            >
                <img src = {poster} alt={title} title={title}/>
                <div className = 'movie__data'>
                    <h3 className = 'movie__title' style={{backgroundColor:'red'}}>
                        {title}
                    </h3>
                    <h5 className = 'movie__year'>{year}</h5>
                    <ul className = "movie__genres">
                        {genres.map((genre, index) => {
                            return <li key = {index} className = "movie__genre">{genre}</li>
                        })}
                    </ul>
                    <p className = 'movie__summary'>{summary.slice(0, 180)}...</p>
                </div>
            </Link>
        </div>  
    );
}

Movie.propTypes = { 
    id: PropTypes.number.isRequired, // API에서 넘어오는 id 숫자
    year: PropTypes.number.isRequired, // year 숫자
    title: PropTypes.string.isRequired, // 제목은 물자열
    summary: PropTypes.string.isRequired, // 요약 문자열
    poster: PropTypes.string.isRequired, // 포스터에는 이미지 주소(문자열)이 저장
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;