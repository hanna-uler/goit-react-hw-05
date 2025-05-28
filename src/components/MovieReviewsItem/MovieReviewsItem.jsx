import css from './MovieReviewsItem.module.css'

export default function MovieReviewsItem({ author, content, date}) {
    return (
        <div className={css.container}>
            <p className={css.author}>Author: {author}</p>
            <p className={css.review}>"{content}"</p>
            <p className={css.date}>Posted: {date}</p>
        </div>
    )
    
}