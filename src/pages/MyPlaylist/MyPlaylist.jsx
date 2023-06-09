import { Footer, Header, UserPlaylist } from 'components';
import styles from '../../styles/global.module.css';

export function MyPlaylist() {
  return (
    <>
      <Header />
      <div className={styles.nameheader}>Minha Playlist</div>
      <br />
      <UserPlaylist />
      <Footer />
    </>
  );
}
