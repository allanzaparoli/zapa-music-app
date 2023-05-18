import {
  Footer, Header, SearchInput, SearchResults,
} from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchItunesAPI } from 'api';
import { useDispatch } from 'react-redux';
import { setSearchResults } from 'redux/slices';

export function Search() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { query } = useParams();

  const searchMusic = async () => {
    setLoading(true);
    const response = await searchItunesAPI(query);
    dispatch(setSearchResults(response));
    setLoading(false);
  };

  useEffect(() => {
    searchMusic();
  }, [query]);

  return (
    <>
      <Header />
      <SearchInput loading={loading} />
      <div>Search Results</div>
      <SearchResults />
      <Footer />
    </>
  );
}
