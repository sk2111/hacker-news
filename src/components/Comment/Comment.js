import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//styles
import styles from './Comment.module.scss';
//actions
import { fetchCommentsByIdStart } from 'redux/rootAction';
//selectors

const Comment = ({ id }) => {
  const dispatch = useDispatch();
  // const story = useSelector((state) => selectStoryById(state, id));
  const comment = null;

  useEffect(() => {
    if (!comment) {
      dispatch(fetchCommentsByIdStart({ id }));
    }
  }, [comment, dispatch, id]);

  if (!comment) return null;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{comment.by}</h3>
        <p>{comment.date}</p>
      </div>
      <div className={styles.body}>
        <p>{comment.text}</p>
      </div>
    </div>
  );
};

export default Comment;
