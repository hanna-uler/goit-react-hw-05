import css from './MovieCastItem.module.css'

export default function MovieCastItem({picPath, character, name}) {
    return (
        <div className={css.container}>
            <img className={css.actorPic} src={`https://image.tmdb.org/t/p/w500/${picPath}`} alt={`The picture of ${name}.`} />
            <p className={css.title}>The Movie Character: <span className={css.name}>{character}</span></p>
            <p className={css.title}>Actor's name: <span className={css.name}>{ name}</span></p>
        </div>
    )
}