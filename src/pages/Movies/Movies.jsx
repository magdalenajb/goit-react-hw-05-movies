import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/getMoviesApi';
import MoviesList from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { Flip, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import c from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const movieName = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formInputValue = form.elements.search.value.toLowerCase().trim();
    if (!formInputValue) {
      toast.warn('Look, the input field is empty! Please, make a choice.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3500,
        theme: 'dark',
        transition: Flip,
      });
    }
    setSearchParams(formInputValue !== '' ? { query: formInputValue } : {});
    form.reset();
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const receivedMovies = await getSearchMovies(movieName);
        setMovies(receivedMovies);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [movieName]);

  return (
    <>
      <form onSubmit={handleSubmit} className={c.form}>
        <input
          type="text"
          name="search"
          className={c.input}
          placeholder="Enter the movie title"
        />

        <button type="submit" className={c.submit}>
          <span className={c.btnlabel}>Search</span>
        </button>
      </form>
      <ToastContainer />
      {movies.length !== 0 && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
    </>
  );
};

export default Movies;
