import css from './MovieReviews.module.css'
import MovieReviewsItem from '../MovieReviewsItem/MovieReviewsItem'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviewsArray, setReviewsArray] = useState([]);
    
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
        const options = {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjUyODNiYTMxODQzNDY1YzY3NzQyYmMzM2U3Y2RhMyIsIm5iZiI6MTc0ODIzMTUxNC40ODk5OTk4LCJzdWIiOiI2ODMzZTU1YTcwMzE1ZjM0ODEyYjcxMTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._rMCNG9BRzj5XkY_P2maKWqXo77F7leFnuMpJqC45Qs'
            }
        };
        axios.get(url, options).then((res) => setReviewsArray(res.data.results));
    }, [movieId])

    return (
        <div className={css.container}>
            {reviewsArray.length > 0
                ? <div>
                    <h2 className={css.reviewsTitle}>The movie reviews:</h2>
                    <ul className={css.reviewsList}>
                        {reviewsArray.map((review) => {
                            return (
                                <li key={review.id} className={css.reviewsItem}>
                                    <MovieReviewsItem author={review.author} content={review.content} date={review.updated_at.substr(0, 10)} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
                : <strong>Sorry, we don't have reviws for this movie at this time.</strong>}</div>)
}

