import css from './MovieCast.module.css'
import MovieCastItem from '../MovieCastItem/MovieCastItem'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MovieCast() {
    const { movieId } = useParams();
    const [actorsArray, setActorsArray] = useState([]);
    
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
        const options = {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjUyODNiYTMxODQzNDY1YzY3NzQyYmMzM2U3Y2RhMyIsIm5iZiI6MTc0ODIzMTUxNC40ODk5OTk4LCJzdWIiOiI2ODMzZTU1YTcwMzE1ZjM0ODEyYjcxMTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._rMCNG9BRzj5XkY_P2maKWqXo77F7leFnuMpJqC45Qs'
            }
        };
        axios.get(url, options).then((res) => setActorsArray(res.data.cast));
    }, [movieId]);
    if (actorsArray.length >0) {
        
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
    }
    
}