import styled from 'styled-components';

export const HeroWrapper = styled.section`
  background-color: var(--background-light);

  .wrap {
    height: 400px;
    width: 400px;
    position: relative;
    &:hover {
      .one {
        clip-path: polygon(
          0% 0%,
          0 100%,
          0 100%,
          0 0,
          100% 100%,
          100% 100%,
          0 0,
          0 0
        );
      }
    }
    .two {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: green;
    }
    .one {
      background-color: red;
      position: absolute;
      width: 100%;
      height: 100%;
      transition: all 500ms ease;
      clip-path: polygon(
        0% 0%,
        0 100%,
        57% 100%,
        100% 60%,
        100% 60%,
        57% 100%,
        100% 100%,
        100% 0%
      );
    }
  }
`;
