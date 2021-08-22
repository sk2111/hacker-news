import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
//styles
import styles from './StoryDetail.module.scss';
//componets
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
        <div className={styles.goBack} onClick={handleGoBack}>
          &#8592;
        </div>
        <h1 className={styles.title} onClick={handleGoBack}>
          Hacker News
        </h1>
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
        <h5 className={styles.comments}>Comments</h5>
        <div className={styles.commentInfo}>
          {story.kids?.map((id) => (
            <Comment key={id} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;
