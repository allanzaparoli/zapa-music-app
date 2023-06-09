import {
  Footer, Header, SearchInput, SearchResults,
} from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchItunesAPI } from 'api';
import { useDispatch } from 'react-redux';
import { setSearchResults } from 'redux/slices';
import styles from '../../styles/global.module.css';

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
      <div className={styles.nameheader}>Resultado da Busca</div>
      <SearchInput loading={loading} />
      <SearchResults />
      <Footer />
    </>
  );
}
