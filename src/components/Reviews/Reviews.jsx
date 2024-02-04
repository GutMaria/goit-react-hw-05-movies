import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from '../../apiServices/apiServices';
import css from './reviews.module.css'

const Reviews = () => {

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const { id } = useParams();

  useEffect(() => {
        const fetchReviews = async () => {
            try {
                setLoading(true);
              const { data } = await getReviews(id);
              setReviews(data.results)
            }
            catch (error) {
              setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchReviews();
  }, [id]);

  const reviewsItems = reviews.map(({ author, content, id }) => {
    return (<li key={id} className={css.items}>
      <h3>Auhor: {author}</h3>
      <p className={css.text}>{ content}</p>
    
  </li>)
})

  return <>
    {loading && <p>...Loading</p>}
    {error && <p>Oops... something went wrong, try again!</p>}
    {reviews.length>0 && !loading && !error && <ul className={css.reviewsList}>{ reviewsItems}</ul>}
  {reviews.length === 0 && !loading && !error && <p>We don't have any reviews for this movie.</p>}
  </>
}

export default Reviews;