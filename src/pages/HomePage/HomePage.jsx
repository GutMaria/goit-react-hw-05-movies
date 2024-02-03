import { useEffect, useState } from "react"
import {getTrendingMovies} from '../../apiServices/apiServices'
import MoviesList from '../../components/MoviesList/MoviesList'

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await getTrendingMovies();
        console.log(data.results);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
                setLoading(false);
            }
    }

    fetchData();
  }, [])
  

  return (<div>
    {loading && <p>...Loading</p>}
    {error && <p>Упс... щось пішло не так, спробуйте ще раз!</p>}
    {movies && (<><h2>Trending movies today</h2> 
    <MoviesList items={movies} /></>)}
  </div>)
}

export default HomePage