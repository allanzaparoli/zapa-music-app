import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './header.module.css';

export function Header() {
  const { simpleLogin } = useSelector((state) => state);

  useEffect(() => {
    if (!simpleLogin.isLogged && window.location.pathname !== '/login' && window.location.pathname !== '/register' && window.location.pathname !== '/logout') {
      window.location.href = '/login';
    }
  }, [simpleLogin.isLogged]);

  return (
    <div className={styles.title}>
      {simpleLogin.isLogged
        ? (
          <span>
            Olá
            {' '}
            {simpleLogin.email}
            {' - '}
            <Link to="/">Buscar músicas</Link>
            {' - '}
            <Link to="/my-playlist">Minha Playlist</Link>
            {' - '}
            <Link to="/note">Anotações</Link>
            {' - '}
            <Link to="/logout">Logout</Link>
          </span>
        )
        : (
          <>
            <Link to="/login">Login</Link>
            {' - '}
            <Link to="/register">Register</Link>
          </>
        )}
    </div>
  );
}
