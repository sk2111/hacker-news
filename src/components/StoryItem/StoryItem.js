import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//styles
import styles from './StoryItem.module.scss';
//actions
import { fetchStoryByIdStart } from 'redux/rootAction';
//selectors
import { selectStoryById } from 'redux/rootSelector';
//assests
import { ReactComponent as RankSvg } from 'assests/storyRank.svg';
import { ReactComponent as TimeSvg } from 'assests/storyTime.svg';
import { ReactComponent as UserSvg } from 'assests/storyUser.svg';

const StoryItem = ({ id }) => {
  const dispatch = useDispatch();
  const story = useSelector((state) => selectStoryById(state, id));

  useEffect(() => {
    if (!story) {
      dispatch(fetchStoryByIdStart({ id }));
    }
  }, [story, dispatch, id]);

  if (!story) return null;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.titleContainer}>
        <h5 className={styles.title}>{story.title}</h5>
      </div>
      <div className={styles.border}></div>
      <div className={styles.rank}>
        <RankSvg className={styles.icon} />
        <p className={styles.infoText}>{story.score}</p>
      </div>
      <div className={styles.createdDate}>
        <TimeSvg className={styles.icon} />
        <p className={styles.infoText}>{story.date}</p>
      </div>
      <div className={styles.user}>
        <UserSvg className={styles.icon} />
        <p className={styles.infoText}>{story.by}</p>
      </div>
      <div className={styles.link}>
        <a
          className={styles.anchorLink}
          href={story.url}
          target='_blank'
          rel='noreferrer'
        >
          Read more &#x2192;
        </a>
      </div>
    </div>
  );
};

export default StoryItem;
