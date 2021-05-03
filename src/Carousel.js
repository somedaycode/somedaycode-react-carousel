import React from 'react';
import Carousel from '@somedaycode/react-carousel';
import styled from 'styled-components';

const App = () => {
  const options = {
    carouselWidth: 800,
    itemsToShow: 4,
    duration: 0.5,
    timing: 'ease-in-out',
    arrowSize: 20,
  };

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((card) => (
    <Item>{card}</Item>
  ));

  return (
    <Main>
      <Carousel {...options}>{items}</Carousel>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  justify-content: center;
`;

const Item = styled.div`
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  background: linear-gradient(to right, #ffafbd, #ffc3a0);
  border-radius: 10px;
  width: 190px; // 200px - margin(5px + 5px)
  height: 200px;
`;

export default App;
