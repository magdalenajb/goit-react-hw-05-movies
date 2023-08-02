import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/getMoviesApi';
import MovieList from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import c from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        setIsLoading(true);
        const receivedTrends = await getTrendingMovies();
        setMovies(receivedTrends);
      } catch (error) {
        setError(error.message);
        toast.error(`Upss!!! Fetch error: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrends();
  }, []);

  return (
    <main>
      <h1 className={c.title}>Trending Movies of the Day</h1>
      {movies.length !== 0 && <MovieList movies={movies} />}
      {isLoading && <Loader />}
      {error && <ToastContainer autoClose={5000} />}
    </main>
  );
};

export default Home;
