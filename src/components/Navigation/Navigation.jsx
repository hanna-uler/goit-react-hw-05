import css from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

export default function Navigation() {
    return (
        <div className={css.container}>
            <nav className={css.navMenu}>
                <NavLink to='/' className={({ isActive }) => {
                    return clsx(css.link, isActive && css.isActive)
                }}>
                    Home
                </NavLink>
                <NavLink to='/movies' className={({ isActive }) => {
                    return clsx(css.link, isActive && css.isActive)
                }}>
                Movie Catalogue
                </NavLink>
            </nav>
        </div>
    )
}