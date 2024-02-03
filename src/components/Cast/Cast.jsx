import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getActors} from '../../apiServices/apiServices'
import css from "./cast.module.css";
import defaultImg from '../../image/defaultImage.jpg';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {id} = useParams();
  
  console.log(id);

  useEffect(() => {
        const fetchActors = async () => {
            try {
                setLoading(true);
              const { data } = await getActors(id);
                console.log(data);
              setActors(data)
            }
            catch (error) {
              setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchActors();
  }, [id]);

  const ActorsList = actors.cast?.map(({ cast_id, character, name, profile_path }) => {

    const photo = profile_path ? ('https://image.tmdb.org/t/p/w500' + profile_path) : defaultImg;
;
    return <li key={cast_id} className={css.actorCard}>
      <img src={photo} alt={name} className={css.photo} />
      <div><h3>{name} </h3>
      <p>Character: {character}</p></div>
      
    </li>
  });




  return (<>
  {loading && <p>...Loading</p>}
    {error && <p>Упс... щось пішло не так, спробуйте ще раз!</p>}
    {actors && <ul className={css.actorList}>
{ActorsList}
      </ul>}
  </>)
}

export default Cast;