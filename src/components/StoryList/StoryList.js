import { useSelector } from 'react-redux';
//styles
import styles from './StoryList.module.scss';
//components
import StoryItem from 'components/StoryItem/StoryItem';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
//selectors
import { selectAllStoryIds } from 'redux/rootSelector';

const StoryList = () => {
  const storyIds = useSelector(selectAllStoryIds);

  const getStories = () => {
    if (storyIds.length) {
      return storyIds.map((storyId) => <StoryItem key={storyId} />);
    }
    return <LoadingSpinner />;
  };

  return <div className={styles.storyList}>{getStories()}</div>;
};

export default StoryList;
