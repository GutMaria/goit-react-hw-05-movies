import SearchForm from '../../components/SearchForm/SearchForm';
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovie } from '../../apiServices/apiServices';
import MoviesList from '../../components/MoviesList/MoviesList'


const MoviesPage = () => {

   const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("query");


    useEffect(()=> {
        const fetchData = async ()=> {
            try {
                setLoading(true);
              const { data } = await searchMovie(search);
              setMovies(data.results);
              setError(null)
            }
            catch (error) {
              setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        
        if(search) {
            fetchData();
        }
    }, [search])

    const handleSearch = (value ) => {
      setSearchParams({ query: value });
      setMovies([])
    }


  return <>
    <SearchForm onSubmit={handleSearch} />
        {error && <p >Oops... something went wrong, try again!</p>}
            {loading && <p>...Loading</p>}
    
    {movies.length > 0 && !loading && !error && <MoviesList items={movies} />}
    {search && movies.length===0 && !loading && !error && <p>Nothing was found for your request</p>}
  </>
}

export default MoviesPage