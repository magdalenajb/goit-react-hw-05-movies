import { FidgetSpinner } from 'react-loader-spinner';
import c from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={c.overlay}>
      <FidgetSpinner
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={['#ff0000', '#00ff00', '#0000ff']}
        backgroundColor="#5d84b8"
      />
    </div>
  );
};
