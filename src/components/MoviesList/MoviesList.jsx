import { Link } from "react-router-dom";
import css from './movies-list.module.css'

const MoviesList = ({items}) => {
  const elements = items.map(({ id, title, poster_path }) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w500' + poster_path;

  return (
    <li key={id} className={css.movieItem}>
      <Link to={`/movies/${id}`} className={css.link}>
        <img src={imgUrl} alt={title} width='300' />
        <h3 className={css.movieTitle}>{title}</h3>
      </Link>
  </li>
  )
})
  
  return <ul className={css.moviesList}>{elements}</ul>
}

export default MoviesList;