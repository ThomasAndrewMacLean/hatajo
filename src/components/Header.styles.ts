import styled from 'styled-components';

export const HeaderWrapper = styled.header<{ stickyHeader: boolean }>`
  left: inherit !important;
  /* box-shadow: var(--shadow); */
  height: var(--headerHeight);
  background-color: white;
  z-index: 999;
  position: ${(props) => props.stickyHeader && 'fixed'};
  display: flex;
  align-items: center;
  h1 {
    font-weight: 100;
    margin-left: 3rem;
  }
`;
