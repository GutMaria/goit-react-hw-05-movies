
import { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import {getMovieDetails} from '../../apiServices/apiServices'

const MovieDetailsPage = () => {
  const [movie, setMovie] =useState({})

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
        const fetchPost = async () => {
            try {
                
              const { data } = await getMovieDetails(id);
              console.log(data);
              setMovie(data)
              
            }
            catch (error) {
                console.log(error.message);
            }
            
        }

        fetchPost();
  }, [id]);
  
  // const genreList = movie.genres.map(genre => genre.name);

  const image = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;


  return (<>
    <div>Тут буде інформація про один фільм</div>
    <div>
      <img src={image} alt="" />
      <h2>{movie.title}</h2>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      {/* <h3>Genres: <span>{genreList }</span></h3> */}
      
    </div>
      <Outlet/>
    </>)
}

export default MovieDetailsPage;


  