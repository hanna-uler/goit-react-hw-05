import { useEffect, useRef, useState, Suspense } from "react";
import { useParams, Outlet, Link, NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import css from "./MovieDetailsPage.module.css"
import MovieDetailsBlock from "../../components/MovieDetailsBlock/MovieDetailsBlock";
import { RiArrowGoBackLine } from "react-icons/ri";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLinkRef = useRef(location.state);
    const [isError, setIsError] = useState(false);
    const token = import.meta.env.VITE_TMDB_TOKEN;

    useEffect(() => {
        setIsError(false);
        const url = `https://api.themoviedb.org/3/movie/${movieId}`;
        const options = {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`,
            }
        };
        axios.get(url, options)
            .then((res) => setMovie(res.data))
            .catch(() => setIsError(true));
    }, [movieId])
        return (
            <div className={css.container}>
                <Link className={css.link} to={backLinkRef.current}><RiArrowGoBackLine /> Go Back</Link>
                {movie &&
                    <div>
                        <MovieDetailsBlock movie={movie} />
                        <ul className={css.navMenu}>
                            <li><NavLink to='cast'>Cast</NavLink></li>
                            <li><NavLink to='reviews'>Reviews</NavLink></li>
                        </ul>
                        <Suspense fallback={<strong>The Content is Loading...</strong>}>
                            <Outlet />
                        </Suspense>
                        
                    </div>}
                {isError && <ErrorMessage />}
            </div>
    )}