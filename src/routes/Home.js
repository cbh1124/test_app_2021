import React from 'react'; 
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';
<meta name="referrer" content="no-referrer" />

class Home extends React.Component{
  state = {
    isLoading: true,
    movies:[]
  };
  /* 자바스크립트에게 getMovies함수는 시간이 필요하기 위해서는 
  axios.get()의 실행을 기다려 달라고 말하기 위해 await를 사용하였다. */
  
  getMovies = async () => {// eslint-disable-next-line
    const{
      data: {
        data:{movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading: false});
  };

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return(
      <section className = "container">
      {isLoading? (
        <div className = 'loader'>
          <span className = "loader__text">Loading...</span>
        </div>
      ):(
          <div className = "movies">
              {movies.map((movie) => (
                <Movie
                    key = {movie.id}
                    id = {movie.id}
                    year = {movie.year}
                    title = {movie.title}
                    summary = {movie.summary}
                    poster = {movie.medium_cover_image}
                    genres = {movie.genres}
                  />
            ))}
          </div>
        )
      }
      </section>
    );
  }
}

export default Home; 