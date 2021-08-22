import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from './Header.module.scss';
//route
import { LANDING_PATH } from 'utilities/router/routePath';
//assest
import { ReactComponent as HackerEarthSvg } from 'assests/hackerEarth.svg';
import { useDispatch, useSelector } from 'react-redux';
//actions
import { searchStory, sortStories } from 'redux/rootAction';
//selectors
import { selectStoriesAllFetched } from 'redux/rootSelector';
//constants
import { sortOptionList } from 'utilities/configs/storySort';

const Header = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const isAllStoriesFetched = useSelector(selectStoriesAllFetched);
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
  const handleSortChange = (e) => {
    dispatch(sortStories(e.target.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSec}>
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
      <div className={styles.titleCenter}>
        <h1>Hacker News</h1>
      </div>
      <div className={styles.rightSec}>
        {isAllStoriesFetched ? (
          <select className={styles.select} onChange={handleSortChange}>
            {sortOptionList.map(({ name, value }) => (
              <option key={value} value={value}>
                {name}
              </option>
            ))}
          </select>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
