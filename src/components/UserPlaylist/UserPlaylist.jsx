import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentVideoId, setPlayerState, setUserPlaylist } from 'redux/slices';
import { getUserPlayListByUserByUserId } from 'api';
import styles from './userplaylist.module.css';

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
    <div className={styles.list}>
      {userPlaylist.map((song) => (
        <div key={song.videoId}>
          <span className={styles.songname}>{song.songName}</span>
          <button className={styles.buttonlist} type="button" onClick={() => handlePlay(song.videoId, song.songName)}>Tocar música</button>
          <p />
        </div>
      ))}
    </div>
  );
}
