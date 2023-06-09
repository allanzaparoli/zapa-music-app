import { useState, useEffect } from 'react';
import { createNewNote, getNotesByUserId, deleteNoteByNoteId } from 'api';
import { Comment } from '../Comment/Comment.jsx';

import styles from './post.module.css';

export function NewPost({ author }) {
  const [comments, setComments] = useState([]);

  const [newCommentText, setNewCommentText] = useState('');

  const handleCreateNewComment = async (event) => {
    event.preventDefault();
    try {
      const lastId = comments[comments.length - 1]?.id ?? 0;
      setComments([...comments, { id: lastId + 1, noteDescription: newCommentText }]);
      setNewCommentText('');
      await createNewNote({
        noteDescription: newCommentText,
      });
    } catch (error) {
      alert('Erro ao criar comentário');
    }
  };

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  const deleteComment = async (commentToDelete) => {
    try {
      const commentsWithoutDeleted = comments.filter((comment) => comment.id !== commentToDelete);
      setComments(commentsWithoutDeleted);
      await deleteNoteByNoteId(commentToDelete);
    } catch (error) {
      alert('Erro ao deletar comentário');
    }
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  const fetchNotes = async () => {
    try {
      const response = await getNotesByUserId();
      setComments(response);
    } catch (error) {
      alert('Erro ao buscar anotações');
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <div className={styles.authorInfo}>
            <strong>{author?.name}</strong>
            <span>{author?.role}</span>
          </div>
        </div>
      </header>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong><h1>Faça suas Anotações</h1></strong>

        <textarea
          name="comment"
          placeholder="Exponha seus pensamentos..."
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment
            key={comment.id}
            id={comment.id}
            index={index}
            content={comment.noteDescription}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
