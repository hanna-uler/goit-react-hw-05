import css from './MovieReviews.module.css'
import MovieReviewsItem from '../MovieReviewsItem/MovieReviewsItem'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviewsArray, setReviewsArray] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        const token = import.meta.env.VITE_TMDB_TOKEN;
        const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
        const options = {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`,
            }
        };
        setIsError(false);
        setHasLoaded(false);
        axios.get(url, options)
            .then((res) => {
                setReviewsArray(res.data.results);
                setHasLoaded(true);
            })
            .catch(() => {
                setIsError(true);
            });
    }, [movieId])

    return (
        <div>
            {reviewsArray.length > 0
                && <div className={css.container}>
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
                </div>}
            {hasLoaded && reviewsArray.length === 0 && <strong>Sorry, we don't have reviews for this movie at this time.</strong>}
            {isError && <ErrorMessage/> }
        </div>
    )
}