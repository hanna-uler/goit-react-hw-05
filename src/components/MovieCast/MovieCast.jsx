import css from './MovieCast.module.css'
import MovieCastItem from '../MovieCastItem/MovieCastItem'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ErrorMessage from '../ErrorMessage/ErrorMessage';


export default function MovieCast() {
    const { movieId } = useParams();
    const [actorsArray, setActorsArray] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    // const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        const token = import.meta.env.VITE_TMDB_TOKEN;
        const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
        const options = {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`,
            }
        };
        // setIsError(false);
        setHasLoaded(false);
        axios.get(url, options)
            .then((res) => {
                setActorsArray(res.data.cast);
                setHasLoaded(true);
            })
            .catch(() => {
                setActorsArray([]);
                // setIsError(true);
            });
    }, [movieId]);
    if (actorsArray.length > 0) {
        return (
            <div className={css.container}>
            <h2 className={css.castTitle}>The movie cast:</h2>
            <ul className={css.castList}>
                {actorsArray.map((actor) => {
                    return (
                        <li key={actor.id}  className={css.castItem}>
                            <MovieCastItem picPath={actor.profile_path} character={actor.character} name={actor.name} />
                        </li>  
                    )
                })}
            </ul>
                </div>
        )
    } else if (hasLoaded && actorsArray.length === 0) {
        return (
            <strong>Sorry, we don't have cast information for this movie at this time.</strong>
        )
    }
}