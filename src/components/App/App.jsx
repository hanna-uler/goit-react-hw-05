import css from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage'
import MoviesPage from '../../pages/MoviesPage/MoviesPage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'


export default function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/movies' element={<MoviesPage/>} />
        <Route path='/movie-details' element={<MovieDetailsPage/>}></Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
  )
}
