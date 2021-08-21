import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
//styles
import styles from './NewsStories.module.scss';
//actions
import { fetchAllStoriesStart } from 'redux/rootAction';
import StoryList from 'components/StoryList/StoryList';

const NewsStories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStoriesStart());
  }, [dispatch]);

  return (
    <div className={styles.storyContainer}>
      <div className={styles.topSection}>
        <Link to='/'>Home</Link>
      </div>
      <div className={styles.bottomSection}>
        <StoryList />
      </div>
    </div>
  );
};

export default NewsStories;
