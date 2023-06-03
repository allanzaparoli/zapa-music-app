import { Header, Footer } from 'components';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/slices';

export function Logout() {
  const dispatch = useDispatch();
  dispatch(logoutUser());
  localStorage.removeItem('reduxStore');
  return (
    <>
      <Header />
      <h1>Logout</h1>
      <p>
        Você foi deslogado com sucesso! Volte sempre!
      </p>
      <Footer />
    </>
  );
}
