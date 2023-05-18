import styled from '@emotion/styled';
import { LoadingButton } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';

export const SearchInputContainer = styled.div`
  display: flex;
  `;

export const SearchInputButton = ({ children, loading, ...rest }) => (
  <LoadingButton
    size="small"
    endIcon={<SendIcon />}
    loading={loading}
    loadingPosition="end"
    variant="contained"
    {...rest}
  >
    <span>{children}</span>
  </LoadingButton>
);
