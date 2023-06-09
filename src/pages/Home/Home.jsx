import { Footer, Header, SearchInput } from 'components';
import styles from '../../styles/global.module.css';

export function Home() {
  return (
    <>
      <Header />
      <div className={styles.nameheader}>Home</div>
      <br />
      <SearchInput />
      <Footer />
    </>
  );
}
