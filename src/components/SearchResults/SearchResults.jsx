import { useSelector } from 'react-redux';

export function SearchResults() {
  const { results, resultCount } = useSelector((state) => state.searchResults);

  return (
    <div>
      <div>
        Resultados:
        {' '}
        {resultCount}
      </div>
      <div>
        {results.map((result) => (
          <div key={result.trackId}>
            <img src={result.artworkUrl100} alt={result.trackName} />
            <div>{result.trackName}</div>
            <div>{result.artistName}</div>
            <div>{result.collectionName}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
