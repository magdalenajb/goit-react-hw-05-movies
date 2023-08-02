import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/getMoviesApi';
import { Loader } from 'components/Loader/Loader';
import Additional from 'components/Additional/Additional';
import InfoMovie from 'components/InfoMovie.jsx/InfoMovie';
import GoBackButton from 'components/GoBackButton/GoBackButton';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const goBackLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      try {
        const details = await getMovieDetails(movieId);
        setMovie(details);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <GoBackButton goBackLinkHref={goBackLinkHref} />
      <InfoMovie movie={movie} />
      <Additional location={goBackLinkHref} />
      <Suspense fallback={isLoading && <Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
