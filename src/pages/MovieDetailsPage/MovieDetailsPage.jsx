import { useParams,Outlet, Link } from "react-router-dom";

export default function MovieDetailsPage() {
    const { movieId } = useParams;
    // fetchMovieData ({movieId})
    return (
        <div>
            <p>The Movie with id {movieId} Details will display here.</p>
            <ul>
                <li>
                    <Link to='cast'>Cast</Link>
                </li>
                <li>
                    <Link to='reviews'>Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}