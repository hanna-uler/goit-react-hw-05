import css from './NotFoundPage.module.css'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
    return (
        <div className={css.container}>
            <h2>Sorry, the page is not found.</h2>
            <Link className={css.link} to='/'>Go to Home Page</Link>
        </div>
        
    )
}