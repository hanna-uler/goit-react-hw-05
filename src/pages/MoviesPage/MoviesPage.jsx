import Navigation from '../../components/Navigation/Navigation'
import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage'
import css from './MoviesPage.module.css'


export default function MoviesPage({}) {
    return (
        <div className={css.container}>
            <Navigation />
            <h1>Movies Page</h1>
            {/* <ul className={css.moviesList}>
                {movies.map((movie) => {
                    return (
                        <li key={movie.id} className={css.movieItem} onClick={(e) => console.log("event.target: ", e.target)}>
                            <MovieDetailsPage
                                movieUrl={movie.someURL}
                                // other props!
                            />
                        </li>
                    )
                })}
            </ul> */}
            {/* <Load more Btn */}
        </div>
    )
}