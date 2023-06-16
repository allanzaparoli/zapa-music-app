import { Header, Footer } from 'components';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/slices';
import styles from '../../styles/global.module.css';

export function Logout() {
  const dispatch = useDispatch();
  dispatch(logoutUser());
  localStorage.removeItem('reduxStore');
  return (
    <>
      <Header />
      <h1 className={styles.logoutName}>Logout</h1>
      <p className={styles.logoutUser}>
        Você foi deslogado com sucesso! Volte sempre!
      </p>
      <Footer />
    </>
  );
}
