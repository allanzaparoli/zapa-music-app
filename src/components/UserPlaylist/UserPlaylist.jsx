import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentVideoId, setPlayerState, setUserPlaylist } from 'redux/slices';
import { getUserPlayListByUserByUserId } from 'api';

export function UserPlaylist() {
  const { userPlaylist, playerState } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlePlay = async (videoId, songName) => {
    dispatch(setCurrentVideoId({ videoId, songName }));
    dispatch(setPlayerState({ ...playerState, playing: true, isPlayerOpen: true }));
  };

  const fetchUserPlaylist = async () => {
    try {
      const result = await getUserPlayListByUserByUserId();
      if (JSON.stringify(userPlaylist) === JSON.stringify(result)) return;
      dispatch(setUserPlaylist(result));
    } catch (error) {
      alert('Erro ao listar playlist! Tente novamente!');
    }
  };

  useEffect(() => {
    fetchUserPlaylist();
  }, []);

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
