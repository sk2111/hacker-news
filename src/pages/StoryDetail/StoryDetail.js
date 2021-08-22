import { useSelector } from 'react-redux';
//styles
import styles from './StoryDetail.module.scss';
//selectors
import { selectStoryById } from 'redux/rootSelector';

const StoryDetail = ({ match }) => {
  const storyId = match.params.id;
  const story = useSelector((state) => selectStoryById(state, storyId));

  if (!story) {
    return <h1 className={styles.error}>No Data Found!</h1>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <h1 className={styles.title}>Hacker News</h1>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.mainInfo}>
          <h1 className={styles.storyTitle}>{story.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;
