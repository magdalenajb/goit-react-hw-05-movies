import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import c from './GoBackButton.module.css';

const GoBackButton = ({ goBackLinkHref }) => {
  return (
    <div className={c.container}>
      <Link to={goBackLinkHref} className={c.link}>
        <BsArrowLeftShort size={25} />
        Go back
      </Link>
    </div>
  );
};

export default GoBackButton;
