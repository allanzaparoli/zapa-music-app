import { useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayerState, setUserPlaylist } from 'redux/slices';
import * as S from './styles';

export function Player({ videoDetails, width, height }) {
  const { playerState, userPlaylist } = useSelector((state) => state);
  const {
    pip, playing, controls, light, volume, muted, playbackRate, loop, isPlayerOpen,
  } = playerState;
  const dispatch = useDispatch();

  const { videoId, songName } = videoDetails;

  useEffect(() => {
    const playBtn = document.getElementById('react-player');
    playBtn.click();
  }, [videoDetails]);

  const addToPlaylist = () => {
    dispatch(setUserPlaylist([...userPlaylist, { videoId, songName }]));
  };

  return (
    <S.PlayerContainer isPlayerOpen={isPlayerOpen}>
      <ReactPlayer
        id="react-player"
        className="react-player"
        width={width}
        height={height}
        url={`https://www.youtube.com/watch?v=${videoId}`}
        pip={pip}
        playing={playing}
        controls={controls}
        light={light}
        loop={loop}
        playbackRate={playbackRate}
        volume={volume}
        muted={muted}
      />
      <button type="button" onClick={() => dispatch(setPlayerState({ ...playerState, muted: !muted }))}>Mudo</button>
      <button type="button" id="playBtn" onClick={() => dispatch(setPlayerState({ ...playerState, playing: !playing, isPlayerOpen: !isPlayerOpen }))}>{playing ? 'Parar música' : 'Tocar música'}</button>
      <button type="button" onClick={() => dispatch(setPlayerState({ ...playerState, playing: false, isPlayerOpen: false }))}>Fechar player</button>
      {' - '}
      {' - '}
      <button type="button" onClick={addToPlaylist}>Adicionar a playlist</button>
    </S.PlayerContainer>
  );
}
