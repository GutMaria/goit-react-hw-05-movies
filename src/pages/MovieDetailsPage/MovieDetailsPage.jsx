import { useState, useEffect } from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import {getMovieDetails} from '../../apiServices/apiServices'
import css from './movie-details-page.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const { id } = useParams();

  useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
              const { data } = await getMovieDetails(id);
              setMovie(data)
            }
            catch (error) {
              setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchPost();
  }, [id]);
  
const genreList = movie.genres?.map((genre) => <li key={genre.id} className={css.text}>{genre.name}</li>);


  const image = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;


  return (<>
    {loading && <p>...Loading</p>}
    {error && <p>Упс... щось пішло не так, спробуйте ще раз!</p>}
    {movie && (<>
    <div className={css.wrapper}>
        <img src={image} alt={movie.title} />
        <div className={css.details}>
          <h2>{movie.title}</h2>
          <p className={css.text}>User Score: {(movie.vote_average*10).toFixed(1)}%</p>
      <h3>Overview:</h3>
          <p className={css.text}>{movie.overview}</p>
          <h3>Genres:</h3>
          <ul>{genreList}</ul>
        </div>
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to='cast'>Cast</Link>
          </li>
          <li>
            <Link to='reviews'>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet/>
    </>)}
    </>)
}

export default MovieDetailsPage;


  