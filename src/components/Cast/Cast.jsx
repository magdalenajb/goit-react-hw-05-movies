import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from 'services/getMoviesApi';
import { Loader } from 'components/Loader/Loader';

import c from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      setIsLoading(true);
      try {
        const getCredits = await getMovieCredits(movieId);
        setCast(getCredits);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <>
      {isLoading && <Loader />}
      {cast.length > 0 ? (
        <ul>
          {cast.slice(0, 19).map(({ id, name, character, profile_path }) => (
            <li key={id} className={c.item}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  className={c.img}
                  width="100"
                />
              ) : (
                <div className={c.imgNotFound}>Image not found</div>
              )}
              <div>
                <p className={c.actorName}>{name}</p>
                <p className={c.character}>
                  Character: <b>{character}</b>
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>We don't have any cast information for this movie.</div>
      )}
    </>
  );
};

export default Cast;
