import { TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export function SearchInput({ loading = false }) {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/search/${searchValue}`);
  };

  return (
    <S.SearchInputContainer>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined"
          label="Buscar músicas"
          defaultValue={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          value={searchValue}
        />
        <S.SearchInputButton
          loading={loading}
          onClick={handleSubmit}
          type="submit"
        >
          Buscar
        </S.SearchInputButton>
      </form>
    </S.SearchInputContainer>
  );
}
