import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import css from './MoviesPage.module.css'
import axios from 'axios'
import MovieList from '../../components/MovieList/MovieList'
import { useDebounce } from 'use-debounce';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function MoviesPage() {
    const [moviesArray, setMoviesArray] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";
    const [debouncedQuery] = useDebounce(query, 300);
    const [isError, setIsError] = useState(false);

    const changeSearchQuery = (e) => {
        const newQuery = e.target.value;
        const nextSearchParams = new URLSearchParams(searchParams);
    
        if (newQuery !== "") {
          nextSearchParams.set("query", newQuery);
        } else {
          nextSearchParams.delete("query");
        }
    
        setSearchParams(nextSearchParams);
    };
    
    useEffect(() => {
        setIsError(false);
        const url = `https://api.themoviedb.org/3/search/movie?query=${debouncedQuery}`;
        const options = {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjUyODNiYTMxODQzNDY1YzY3NzQyYmMzM2U3Y2RhMyIsIm5iZiI6MTc0ODIzMTUxNC40ODk5OTk4LCJzdWIiOiI2ODMzZTU1YTcwMzE1ZjM0ODEyYjcxMTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._rMCNG9BRzj5XkY_P2maKWqXo77F7leFnuMpJqC45Qs'
            }
        };
        axios.get(url, options)
            .then((res) => setMoviesArray(res.data.results))
            .catch(() => setIsError(true));
    }, [debouncedQuery])

    return (
        <div className={css.container}>
            <h1>Search movie here</h1>
            <input className={css.input} type="text" value={query} onChange={changeSearchQuery} />
            {moviesArray.length > 0 && <MovieList movies={moviesArray} />}
            {isError && <ErrorMessage/> }
        </div>
    )
}