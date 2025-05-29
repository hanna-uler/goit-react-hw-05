import css from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import { Toaster } from 'react-hot-toast';
import { lazy, Suspense } from 'react'
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
const MovieCast = lazy(() => import('../../components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../../components/MovieReviews/MovieReviews'));


export default function App() {

  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={<strong>The Page is Loading...</strong>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            <Route path='cast' element={<MovieCast />} />
            <Route path='reviews' element={<MovieReviews />} /></Route><Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster
        position="top-right"
        reverseOrder={false}
        duration="3000" />
    </div>
  )
}
