import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: white;
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: auto;
  .social-link {
    img {
      height: 25px !important;
      width: auto;
      margin-left: 1rem;
      opacity: 0.7;
      transition: all 300ms ease;
      &:hover {
        opacity: 0.9;
      }
    }
  }
`;
