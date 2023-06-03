import { Trash } from 'react-feather';
import styles from './styles.module.css';

export function Comment({ content, id, deleteComment }) {
  const handleDeleteComment = () => {
    deleteComment(id);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <button onClick={handleDeleteComment} title="Deletar comentário" type="button">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
