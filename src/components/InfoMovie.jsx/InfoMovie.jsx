import PropTypes from 'prop-types';
import imgNotFound from 'images/No_Image_Available.jpg';
import c from './InfoMovie.module.css';

const InfoMovie = ({ movie }) => {
  const { title, overview, genres, release_date, poster_path, vote_average } =
    movie;

  const userScore = Math.round(vote_average * 10);

  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : imgNotFound;

  return (
    <>
      <div className={c.cardFilm}>
        <img src={imgUrl} alt={title} width="200" className={c.img} />
        <div>
          <h2 className={c.title}>
            {`${title} (${release_date.slice(0, 4)})`}
          </h2>

          <p className={c.score}>User Score: {userScore}%</p>

          <h3>Overview</h3>
          <p>{overview}</p>

          <h3>Genres</h3>
          <p>
            {genres.length > 0
              ? genres.map(({ name }) => name).join(', ')
              : 'No genres for this movie'}
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};

InfoMovie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default InfoMovie;
