import { useEffect, useState } from 'react'
import css from './MoviesPage.module.css'
import axios from 'axios'
import MovieList from '../../components/MovieList/MovieList'

export default function MoviesPage() {
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
            <h1>Movies Page</h1>
            <h2>Trending movies of the week</h2>
            {moviesArray.length > 0 && <MovieList movies={moviesArray} />}
        </div>
    )
}