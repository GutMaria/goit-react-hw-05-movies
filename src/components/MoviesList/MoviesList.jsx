import { Link, useLocation } from "react-router-dom";
import css from './movies-list.module.css';
import defaultPoster from '../../image/defaultPoster.jpg'

const MoviesList = ({ items }) => {
  
// локація для кнопки Назад на сторінці ДеталіКіно
  const location = useLocation();


  const elements = items.map(({ id, title, poster_path }) => {
    const imgUrl = poster_path ? ('https://image.tmdb.org/t/p/w500' + poster_path): defaultPoster;
  return (
    <li key={id} className={css.movieItem}>
      <Link to={`/movies/${id}`} state={{ from: location }} className={css.link}>
        <img src={imgUrl} alt={title} width='300' />
        <h3 className={css.movieTitle}>{title}</h3>
      </Link>
  </li>
  )
  })
  
  
  
  return <ul className={css.moviesList}>{elements}</ul>
}

export default MoviesList;