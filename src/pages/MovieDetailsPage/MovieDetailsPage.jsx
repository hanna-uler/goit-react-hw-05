import { useEffect, useState } from "react";
import { useParams, Outlet, Link, NavLink } from "react-router-dom";
import axios from "axios";
import css from "./MovieDetailsPage.module.css"
import MovieDetailsBlock from "../../components/MovieDetailsBlock/MovieDetailsBlock";

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}`;
        const options = {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjUyODNiYTMxODQzNDY1YzY3NzQyYmMzM2U3Y2RhMyIsIm5iZiI6MTc0ODIzMTUxNC40ODk5OTk4LCJzdWIiOiI2ODMzZTU1YTcwMzE1ZjM0ODEyYjcxMTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._rMCNG9BRzj5XkY_P2maKWqXo77F7leFnuMpJqC45Qs'
            }
        };
        axios.get(url, options).then((res) => setMovie(res.data));
    }, [movieId])
    console.log(movie);
    if (movie) {
        return (
            <div>
                <MovieDetailsBlock movie={movie}/>
            {/* <h1>{movie.original_title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`The poster of ${movie.original_title} movie.`} /> 
            <p>Movie Budget: ${ movie.budget}</p>
            <h3>The movie overview:</h3>
            <p>{movie.overview}</p> */}
            <ul className={css.navMenu}>
                <li>
                    <NavLink to='cast'>Cast</NavLink>
                </li>
                <li>
                    <NavLink to='reviews'>Reviews</NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
    )}
}