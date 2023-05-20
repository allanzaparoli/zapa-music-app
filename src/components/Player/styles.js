import styled from '@emotion/styled';

export const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: #282828;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  transform: ${({ isPlayerOpen }) => (isPlayerOpen ? 'translateY(0)' : 'translateY(100%)')};
`;
