import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
//styles
import styles from './StoryDetail.module.scss';
//componets
import Button from 'components/Button/Button';
import Comment from 'components/Comment/Comment';
//router
import { STORIES_PATH } from 'utilities/router/routePath';
//selectors
import { selectStoryById } from 'redux/rootSelector';

const StoryDetail = ({ match }) => {
  const storyId = match.params.id;
  const history = useHistory();
  const story = useSelector((state) => selectStoryById(state, storyId));

  const handleGoBack = () => {
    history.push(STORIES_PATH);
  };

  if (!story) {
    return <h1 className={styles.error}>No Data Found!</h1>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <h1 className={styles.title}>Hacker News</h1>
      </div>
      <div className={styles.backBtnContainer}>
        <Button className={styles.backBtn} onClick={handleGoBack}>
          Go Back
        </Button>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.mainInfo}>
          <h1 className={styles.storyTitle}>{story.title}</h1>
          <div className={styles.subInfo}>
            <p>Score : {story.score}</p>
            <p>Posted At : {story.date}</p>
            <p>Posted By : {story.by}</p>
          </div>
        </div>
        <div className={styles.commentInfo}>
          {story.kids.map((id) => (
            <Comment key={id} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;
