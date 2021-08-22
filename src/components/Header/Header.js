import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from './Header.module.scss';
//route
import { LANDING_PATH } from 'utilities/router/routePath';
//assest
import { ReactComponent as HackerEarthSvg } from 'assests/hackerEarth.svg';
import { useDispatch } from 'react-redux';
//actions
import { searchStory } from 'redux/rootAction';

const Header = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const timerRef = useRef({});

  useEffect(() => {
    clearTimeout(timerRef.current.id);
    timerRef.current.id = setTimeout(() => {
      dispatch(searchStory(searchTerm));
    }, 1000);
  }, [searchTerm, dispatch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Link to={LANDING_PATH}>
        <HackerEarthSvg className={styles.homeLogo} />
      </Link>
      <input
        className={styles.searchStory}
        type='text'
        placeholder='search story'
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Header;
