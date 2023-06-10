import { TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import styles from './searchinput.module.css';

export function SearchInput({ loading = false }) {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchValue}`);
  };

  const isNewCommentEmpty = searchValue.length === 0;

  return (
    <S.SearchInputContainer>
      <form className={styles.search} onSubmit={handleSubmit}>
        <TextField
          id="outlined"
          label="Buscar músicas"
          onChange={(event) => setSearchValue(event.target.value)}
          value={searchValue}
        />
        <button
          className={styles.searchButton}
          loading={loading}
          onClick={handleSubmit}
          type="submit"
          disabled={isNewCommentEmpty || loading}
        >
          Buscar
        </button>
      </form>
    </S.SearchInputContainer>
  );
}
