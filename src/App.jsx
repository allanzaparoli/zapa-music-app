import { Router } from 'routes';
import { Player } from 'components';
import { useSelector } from 'react-redux';

export function App() {
  const { currentVideoId } = useSelector((state) => state);

  return (
    <>
      <Router />
      <Player
        videoDetails={currentVideoId}
        width={0}
        height={0}
      />
    </>
  );
}
