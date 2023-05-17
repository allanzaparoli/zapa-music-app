import styled from '@emotion/styled';
import { Typography, Link } from '@mui/material';

export const FooterContainer = styled.footer`
  background-color: #2c3e50;
  padding: 20px;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const FooterText = ({ children }) => (
  <Typography
    variant="body2"
    color="#ecf0f1"
    align="center"
  >
    {children}
  </Typography>
);

export const FooterLink = ({ children, href }) => (
  <Link
    target="_blank"
    color="#2980b9"
    underline="hover"
    href={href}
    rel="noreferrer"
  >
    {children}
  </Link>
);
