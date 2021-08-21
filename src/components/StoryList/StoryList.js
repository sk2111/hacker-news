import { useSelector } from 'react-redux';
//styles
import styles from './StoryList.module.scss';
//components
import StoryItem from 'components/StoryItem/StoryItem';
//selectors
import { selectAllStoryIds } from 'redux/rootSelector';

const StoryList = () => {
  const storyIds = useSelector(selectAllStoryIds);

  return (
    <div className={styles.storyList}>
      {storyIds.map((storyId) => (
        <StoryItem key={storyId} />
      ))}
    </div>
  );
};

export default StoryList;
