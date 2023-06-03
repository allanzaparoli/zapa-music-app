import styled from '@emotion/styled';
import { TextField as TextFieldMUI, Button as ButtonMUI } from '@mui/material';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white
`;

export const TextField = (props) => (
  <TextFieldMUI
    variant="outlined"
    sx={{ mb: 2 }}
    {...props}
  />
);

export const Button = (props) => (
  <ButtonMUI
    variant="contained"
    sx={{ mb: 9 }}
    {...props}
  />
);
