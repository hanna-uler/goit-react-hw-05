import { useEffect, useRef, useState } from "react";
import { useParams, Outlet, Link, NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import css from "./MovieDetailsPage.module.css"
import MovieDetailsBlock from "../../components/MovieDetailsBlock/MovieDetailsBlock";
import { RiArrowGoBackLine } from "react-icons/ri";

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLinkRef = useRef(location.state);

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}`;
        const options = {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjUyODNiYTMxODQzNDY1YzY3NzQyYmMzM2U3Y2RhMyIsIm5iZiI6MTc0ODIzMTUxNC40ODk5OTk4LCJzdWIiOiI2ODMzZTU1YTcwMzE1ZjM0ODEyYjcxMTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._rMCNG9BRzj5XkY_P2maKWqXo77F7leFnuMpJqC45Qs'
            }
        };
        axios.get(url, options).then((res) => setMovie(res.data));
    }, [movieId])
        return (
            <div>
                {movie &&  <div>
                <MovieDetailsBlock movie={movie} />
                <ul className={css.navMenu}>
                    <li>
                        <NavLink to='cast'>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to='reviews'>Reviews</NavLink>
                    </li>
                </ul>
                <Link className={css.link} to={backLinkRef.current}><RiArrowGoBackLine /> Go Back</Link>
            <Outlet /></div>}
        </div>
    )}