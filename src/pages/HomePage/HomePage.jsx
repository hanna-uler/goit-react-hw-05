import css from './HomePage.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const [moviesArray, setMoviesArray] = useState([]);

    useEffect(() => {
        const url = 'https://api.themoviedb.org/3/trending/movie/week';
        const options = {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjUyODNiYTMxODQzNDY1YzY3NzQyYmMzM2U3Y2RhMyIsIm5iZiI6MTc0ODIzMTUxNC40ODk5OTk4LCJzdWIiOiI2ODMzZTU1YTcwMzE1ZjM0ODEyYjcxMTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._rMCNG9BRzj5XkY_P2maKWqXo77F7leFnuMpJqC45Qs'
            }
        };
        axios.get(url, options).then((res) => setMoviesArray(res.data.results));
    }, []);

    return (
        <div className={css.container}>
            <h1>Ready for Movie Night?</h1>
            <h2>Trending Movies Right Now</h2>
            {moviesArray.length > 0 && <MovieList movies={moviesArray} />}
            <Link to='/movies'>Find your favorite movie here!</Link>
        </div>
    )
}