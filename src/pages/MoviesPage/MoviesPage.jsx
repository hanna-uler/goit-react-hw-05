import { useState } from 'react'
import css from './MoviesPage.module.css'
import axios from 'axios'
import MovieList from '../../components/MovieList/MovieList'
import SearchBar from '../../components/SearchBar/SearchBar'

export default function MoviesPage() {
    const [moviesArray, setMoviesArray] = useState([]);

    const fetchPics = (searchQuery) => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}`;
        const options = {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjUyODNiYTMxODQzNDY1YzY3NzQyYmMzM2U3Y2RhMyIsIm5iZiI6MTc0ODIzMTUxNC40ODk5OTk4LCJzdWIiOiI2ODMzZTU1YTcwMzE1ZjM0ODEyYjcxMTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._rMCNG9BRzj5XkY_P2maKWqXo77F7leFnuMpJqC45Qs'
            }
        };
        axios.get(url, options).then((res) => setMoviesArray(res.data.results));
    };

    return (
        <div className={css.container}>
            <h1>Search movie here</h1>
            <SearchBar onSubmit={fetchPics}/>
            {moviesArray.length > 0 && <MovieList movies={moviesArray} />}
        </div>
    )
}