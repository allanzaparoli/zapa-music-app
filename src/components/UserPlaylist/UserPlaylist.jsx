import { useSelector, useDispatch } from 'react-redux';
import { setCurrentVideoId, setPlayerState } from 'redux/slices';

export function UserPlaylist() {
  const { userPlaylist, playerState } = useSelector((state) => state);
  const dispatch = useDispatch();

  const isMobileOrTablet = window.matchMedia('(max-width: 768px)').matches;

  const handlePlay = async (videoId, songName) => {
    dispatch(setCurrentVideoId({ videoId, songName }));
    dispatch(setPlayerState({ ...playerState, playing: true, isPlayerOpen: true }));
    if (isMobileOrTablet) {
      const playBtn = document.getElementById('playBtn');
      playBtn.click();
      playBtn.click();
    }
  };

  return (
    <div>
      {userPlaylist.map((song) => (
        <div key={song.videoId}>
          <span>{song.songName}</span>
          <button type="button" onClick={() => handlePlay(song.videoId, song.songName)}>Tocar música</button>
          <p />
        </div>
      ))}
    </div>
  );
}
