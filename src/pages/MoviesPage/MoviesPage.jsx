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
              console.log(data.results);
                setMovies(data.results)
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
        {error && <p >{error}</p>}
            {loading && <p>...Loading</p>}
    <SearchForm onSubmit={handleSearch} />
<MoviesList items={movies}/>
  </>
}

export default MoviesPage