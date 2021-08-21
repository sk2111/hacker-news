//styles
import styles from './NewsStories.module.scss';

const NewsStories = () => {
  return (
    <div className={styles.storyContainer}>
      <div className={styles.topSection}>top</div>
      <div className={styles.bottomSection}>bottom</div>
    </div>
  );
};

export default NewsStories;
