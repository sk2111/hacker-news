import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//styles
import styles from './Comment.module.scss';
//actions
import { fetchCommentsByIdStart } from 'redux/rootAction';
//selectors
import { selectCommentById } from 'redux/rootSelector';

const Comment = ({ id }) => {
  const dispatch = useDispatch();
  const comment = useSelector((state) => selectCommentById(state, id));

  useEffect(() => {
    if (!comment) {
      dispatch(fetchCommentsByIdStart({ id }));
    }
  }, [comment, dispatch, id]);

  if (!comment) return null;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.commentUser}>{comment.by}</h3>
        <p className={styles.commentData}>{comment.date}</p>
      </div>
      <div className={styles.body}>
        <p className={styles.commentText}>{comment.text}</p>
      </div>
    </div>
  );
};

export default Comment;
