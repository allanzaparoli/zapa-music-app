import styled from '@emotion/styled';
import { Typography, Link } from '@mui/material';

export const FooterContainer = styled.footer`
  position: fixed;
  background-color: #2c3e50;
  padding: 20px;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

export const FooterText = ({ children }) => (
  <Typography
    variant="body2"
    color="#ecf0f1"
    align="center"
    mr={0.5}
  >
    {children}
  </Typography>
);

export const FooterLink = ({ children, href }) => (
  <Typography
    variant="body2"
  >
    <Link
      target="_blank"
      color="#2980b9"
      underline="hover"
      href={href}
      rel="noreferrer"
    >
      {children}
    </Link>
  </Typography>
);
