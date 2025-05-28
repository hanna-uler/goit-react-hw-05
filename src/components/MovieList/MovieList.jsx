import css from './MovieList.module.css'

export default function MovieList({ movies }) {
    // onClick - link to MovieDetailsPage prop movie id
    return (
        <div className={css.container}>
            <p>Movies List</p>
            <ul className={css.moviesList}>
                {movies.map((movie) => {
                    return (
                        <li key={movie.id} className={css.movieItem} onClick={(e) => console.log("event.target: ", e.target)}>
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={`The poster of {movie.title} movie.`} />
                                <h3 className={css.movieTitle}>{movie.title}</h3>
                                <p>Release date: {movie.release_date}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
            {/* <Load more Btn */}
        </div>
    )
}

// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg