import { Link } from 'react-router-dom';
//styles
import styles from './Header.module.scss';
//route
import { LANDING_PATH } from 'utilities/router/routePath';
//assest
import { ReactComponent as HackerEarthSvg } from 'assests/hackerEarth.svg';

const Header = () => {
  return (
    <div className={styles.container}>
      <Link to={LANDING_PATH}>
        <HackerEarthSvg className={styles.homeLogo} />
      </Link>
      <input
        type='text'
        placeholder='search story'
        className={styles.searchStory}
      />
    </div>
  );
};

export default Header;
