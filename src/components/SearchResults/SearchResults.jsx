import { useSelector, useDispatch } from 'react-redux';
import { setCurrentVideoId, setPlayerState } from 'redux/slices';
import { searchYouTubeAPI } from 'api';
import styles from './searchresults.module.css';

export function SearchResults() {
  const { results, resultCount } = useSelector((state) => state.searchResults);
  const { playerState } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlePlay = async (artistName, trackName) => {
    const result = await searchYouTubeAPI(`${artistName} ${trackName}`);
    dispatch(setCurrentVideoId(
      {
        videoId: result.contents[0].video.videoId,
        videoDetails: result.contents[0].video,
        songName: `${artistName} ${trackName}`,
      },
    ));
    dispatch(setPlayerState({ ...playerState, playing: true, isPlayerOpen: true }));
  };

  return (
    <div>
      <div className={styles.resultcount}>
        Resultado:
        {' '}
        {resultCount}
      </div>
      <table className={styles.resulttable}>
        <tbody>
          {results?.map((result) => (
            <tr className={styles.resultrow} key={result.trackId}>
              <td>
                <img src={result.artworkUrl100} alt={result.trackName} />
              </td>
              <td>
                <div>{result.trackName}</div>
                <div>{result.artistName}</div>
                <div>{result.collectionName}</div>
              </td>
              <td>
                <button
                  className={styles.resultbutton}
                  type="button"
                  onClick={() => handlePlay(result.artistName, result.trackName)}
                >
                  Tocar música
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
