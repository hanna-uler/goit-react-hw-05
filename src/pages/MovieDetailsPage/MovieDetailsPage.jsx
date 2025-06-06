import { useEffect, useRef, useState, Suspense } from "react";
import { useParams, Outlet, Link, NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import css from "./MovieDetailsPage.module.css"
import clsx from 'clsx'
import MovieDetailsBlock from "../../components/MovieDetailsBlock/MovieDetailsBlock";
import { RiArrowGoBackLine } from "react-icons/ri";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLinkRef = useRef(location.state);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        setIsError(false);
        const token = import.meta.env.VITE_TMDB_TOKEN;
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
                <Link className={css.backlink} to={backLinkRef.current ?? '/'}><RiArrowGoBackLine /> Go Back</Link>
                {movie &&
                    <div>
                        <MovieDetailsBlock movie={movie} />
                        <ul className={css.navMenu}>
                            <li><NavLink to='cast' className={({ isActive }) => {return clsx(css.link, isActive && css.isActive)}}>Cast</NavLink></li>
                            <li><NavLink to='reviews' className={({ isActive }) => {return clsx(css.link, isActive && css.isActive)}}>Reviews</NavLink></li>
                        </ul>
                        <Suspense fallback={<strong>The Content is Loading...</strong>}>
                            <Outlet />
                        </Suspense>
                        
                    </div>}
                {isError && <ErrorMessage />}
            </div>
    )}