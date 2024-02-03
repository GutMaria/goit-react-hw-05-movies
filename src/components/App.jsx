import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout"
import HomePage from "../pages/HomePage/HomePage"
import MoviesPage from "../pages/MoviesPage/MoviesPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage"

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />}/>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
  );
};

export default App