import { Footer, Header, NewPost } from 'components';
import styles from '../../styles/global.module.css';

export function Note() {
  return (
    <>
      <Header />
      <div className={styles.nameheader}>Anotações</div>
      <br />
      <NewPost />
      <Footer />
    </>
  );
}
