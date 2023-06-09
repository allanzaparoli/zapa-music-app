import { Router } from 'routes';
import { Player } from 'components';
import { useSelector } from 'react-redux';
import styles from 'styles/global.module.css';

export function App() {
  const { currentVideoId } = useSelector((state) => state);

  return (
    <div className={styles.wrapper}>
      <main>
        <Router />
        <Player
          videoDetails={currentVideoId}
          width={0}
          height={0}
        />
      </main>
    </div>
  );
}
