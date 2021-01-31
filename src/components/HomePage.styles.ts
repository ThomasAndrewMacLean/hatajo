import styled from 'styled-components';

export const HomePageWrapper = styled.div`
  flex: 1;
  display: flex;
  overflow: scroll;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
  overflow: -moz-scrollbars-none; /* Firefox */
  scrollbar-width: none; /* Firefox 64 */
  -ms-overflow-style: none; /* IE */

  .wrap {
    scroll-snap-align: start;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .content {
    font-size: 20px;
    color: white;
    max-width: 400px;
    text-align: center;
    font-weight: 200;
    h2 {
      position: relative;
      &::after {
        content: '';
        width: 50px;
        height: 2px;
        background: white;
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  position: relative;

  .right,
  .left {
    position: fixed;
    top: 50%;
    filter: invert(1);
    cursor: pointer;
    transition: all 300ms ease;

    &:hover {
      transform: scale(1.2);
    }
  }

  .left {
    left: 40px;
  }
  .right {
    right: 40px;
  }
`;
