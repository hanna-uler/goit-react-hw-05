import css from './MovieCastItem.module.css'

export default function MovieCastItem({picPath, character, name}) {
    return (
        <div className={css.container}>
            <img
                className={css.actorPic}
                src={picPath
                    ? `https://image.tmdb.org/t/p/w500/${picPath}`
                    : '/images/user-avatar.jpg'
                }
                alt={`The picture of ${name}.`} />
            <p className={css.title}>The Movie Character: <span className={css.name}>{character}</span></p>
            <p className={css.title}>Actor's name: <span className={css.name}>{ name}</span></p>
        </div>
    )
}