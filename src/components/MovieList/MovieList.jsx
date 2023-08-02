import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import c from './MovieList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul className={c.list}>
        {movies.map(({ id, title }) => (
          <li key={id} className={c.item}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className={c.link}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }).isRequired
  ),
};

export default MoviesList;
