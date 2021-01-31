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
  justify-content: space-between;
  a {
    text-decoration: none;
    font-weight: 100;
    //transition: all 300ms ease;
    @media (hover: hover) {
      &:hover {
        /* font-weight: 400; */
        text-decoration: underline;
      }
    }
    &:active {
      text-decoration: underline;
    }
  }
  nav a {
    margin-left: 1rem;
  }
  h1 {
    font-weight: 100;
  }
`;
