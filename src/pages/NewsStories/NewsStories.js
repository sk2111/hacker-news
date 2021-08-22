import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//styles
import styles from './NewsStories.module.scss';
//components
import Header from 'components/Header/Header';
import StoryList from 'components/StoryList/StoryList';
//actions
import { fetchAllStoriesStart } from 'redux/rootAction';

const NewsStories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStoriesStart());
  }, [dispatch]);

  return (
    <div className={styles.storyContainer}>
      <div className={styles.topSection}>
        <Header />
      </div>
      <div className={styles.bottomSection}>
        <StoryList />
      </div>
    </div>
  );
};

export default NewsStories;
