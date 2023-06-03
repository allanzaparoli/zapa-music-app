import ReactPlayer from 'react-player/youtube';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayerState, setUserPlaylist } from 'redux/slices';
import { addSongToPlaylist } from 'api';
import * as S from './styles';

export function Player({ videoDetails, width, height }) {
  const { playerState, userPlaylist } = useSelector((state) => state);
  const {
    pip, playing, controls, light, volume, muted, playbackRate, loop, isPlayerOpen,
  } = playerState;
  const dispatch = useDispatch();

  const { videoId, songName } = videoDetails;

  const addToPlaylist = async () => {
    try {
      await addSongToPlaylist({ videoId, songName });
      dispatch(setUserPlaylist([...userPlaylist, { videoId, songName }]));
      alert('Música adicionada à playlist');
    } catch (error) {
      alert('Erro ao adicionar música à playlist');
    }
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
        onEnded={() => dispatch(setPlayerState({ ...playerState, playing: false }))}
      />
      <button type="button" id="playBtn" onClick={() => dispatch(setPlayerState({ ...playerState, playing: !playing }))}>{playing ? 'Parar' : 'Tocar'}</button>
      {' - '}
      <button type="button" onClick={() => dispatch(setPlayerState({ ...playerState, playing: false, isPlayerOpen: false }))}>Fechar player</button>
      {' - '}
      {' - '}
      <button type="button" onClick={addToPlaylist}>Adicionar a playlist</button>
    </S.PlayerContainer>
  );
}
