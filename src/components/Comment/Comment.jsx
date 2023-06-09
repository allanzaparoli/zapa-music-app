import { Trash } from 'react-feather';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './comment.module.css';

export function Comment({
  content, id, deleteComment, index,
}) {
  const handleDeleteComment = () => {
    deleteComment(id);
  };
  const { simpleLogin } = useSelector((state) => state);

  useEffect(() => {
    if (!simpleLogin.isLogged && window.location.pathname !== '/login' && window.location.pathname !== '/register' && window.location.pathname !== '/logout') {
      window.location.href = '/login';
    }
  }, [simpleLogin.isLogged]);

  return (
    <div className={styles.comment}>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div>
              {`${simpleLogin.email} - Anotação: ${index + 1}`}
            </div>
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
