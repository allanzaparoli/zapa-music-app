import { Footer, Header } from 'components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchItunesAPI } from 'api';

export function Search() {
  const { query } = useParams();

  const searchMusic = async () => {
    const response = await searchItunesAPI(query);
    console.log(response);
  };

  useEffect(() => {
    searchMusic();
  }, []);

  return (
    <>
      <Header />
      <div>Search Results</div>
      <Footer />
    </>
  );
}
