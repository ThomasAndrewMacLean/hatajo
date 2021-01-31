import styled from 'styled-components';

export const Wrap = styled.div`
  margin: auto 20px;

  /* width: 90%;
  max-width: 900px; */
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Pusher = styled.div`
  height: var(--headerHeight);
`;
