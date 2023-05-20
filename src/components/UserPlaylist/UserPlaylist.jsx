import { useSelector, useDispatch } from 'react-redux';
import { setCurrentVideoId, setPlayerState } from 'redux/slices';

export function UserPlaylist() {
  const { userPlaylist, playerState } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlePlay = async (videoId, songName) => {
    dispatch(setCurrentVideoId({ videoId, songName }));
    dispatch(setPlayerState({ ...playerState, playing: true, isPlayerOpen: true }));
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
