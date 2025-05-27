import css from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <div>
            <nav className={css.navMenu}>
                <NavLink to='/' className={css.navLink}>
                    Home
                </NavLink>
                <NavLink to='/movies' className={css.navLink}>
                Movie Catalogue
                </NavLink>
            </nav>
        </div>
    )
}