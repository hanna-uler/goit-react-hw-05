import css from './HomePage.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList';
import { Link } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function HomePage() {
    const [moviesArray, setMoviesArray] = useState([]);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        setIsError(false);
        const token = import.meta.env.VITE_TMDB_TOKEN;
        const url = 'https://api.themoviedb.org/3/trending/movie/week';
        const options = {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`,
            }
        };
        setIsError(false);
        axios.get(url, options)
            .then((res) => setMoviesArray(res.data.results))
            .catch(() => setIsError(true));
    }, []);

    return (
        <div className={css.container}>
            <h1 className={css.header} >Ready for Movie Night?</h1>
            <h2 className={css.subheader} >Trending Movies Right Now</h2>
            {moviesArray.length > 0 && <MovieList movies={moviesArray} />}
            {isError && <ErrorMessage/> }
            <Link  className={css.link} to='/movies'>Find your favorite movie here!</Link>
        </div>
    )
}