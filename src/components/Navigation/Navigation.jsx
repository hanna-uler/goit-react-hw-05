import css from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { GiPopcorn } from 'react-icons/gi';
import { PiFilmReel } from 'react-icons/pi';

export default function Navigation() {
    return (
        <div className={css.container}>
            <nav className={css.navMenu}>
                <NavLink to='/' className={({ isActive }) => {
                    return clsx(css.link, isActive && css.isActive)
                }}>
                    <GiPopcorn />Home
                </NavLink>
                <NavLink to='/movies' className={({ isActive }) => {
                    return clsx(css.link, isActive && css.isActive)
                }}>
                <PiFilmReel />Movie Catalogue
                </NavLink>
            </nav>
        </div>
    )
}