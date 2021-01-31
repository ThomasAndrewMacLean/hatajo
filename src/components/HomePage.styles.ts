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
    }
  }
`;
