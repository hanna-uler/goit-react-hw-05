import css from './MovieReviews.module.css'
import MovieReviewsItem from '../MovieReviewsItem/MovieReviewsItem'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviewsArray, setReviewsArray] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    const token = import.meta.env.VITE_TMDB_TOKEN;
    
    useEffect(() => {
        setHasLoaded(false);
        const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
        const options = {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`,
            }
        };
        axios.get(url, options)
            .then((res) => {
                setReviewsArray(res.data.results);
                setHasLoaded(true);
            })
            .catch(() => {
                setReviewsArray([]);
                setHasLoaded(true);
            });
    }, [movieId])
    if (reviewsArray.length > 0) {
        return (
            <div className={css.container}>
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
        )
    } else if (hasLoaded && reviewsArray.length === 0) {
        return (
            <strong>Sorry, we don't have reviws for this movie at this time.</strong>
        )
    }
}