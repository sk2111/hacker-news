import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//styles
import styles from './NewsStories.module.scss';
//actions
import { fetchAllStoriesStart } from 'redux/rootAction';

const NewsStories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStoriesStart());
  }, [dispatch]);

  return (
    <div className={styles.storyContainer}>
      <div className={styles.topSection}>top</div>
      <div className={styles.bottomSection}>bottom</div>
    </div>
  );
};

export default NewsStories;
