import css from './HomePage.module.css'
import Navigation from '../../components/Navigation/Navigation'

export default function HomePage() {
    return (
        <div className={css.container}>
            <Navigation />
            <h1>Home Page</h1>
        </div>
    )
}