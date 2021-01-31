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
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0%;
      height: 1px;
      background: #333;
      transition: all 300ms ease;
    }
    @media (hover: hover) {
      &:hover {
        &::after {
          left: 0%;
          width: 100%;
        }
      }
    }
    &:active {
      &::after {
        left: 0%;
        width: 100%;
      }
    }
  }
  nav a {
    margin-left: 1rem;
  }
  h1 {
    font-weight: 100;
  }
`;
