# @somedaycode/react-carousel

react-carousel for your projects.

easy to **customize**, **simple** but also **powerful**.

## Installation

```
npm install @somedaycode/react-carousel
```

---

## Example

![Untitled_ May 2, 2021 4_42 AM](https://user-images.githubusercontent.com/71962505/116793283-df526200-ab00-11eb-828f-b50040c9198e.gif)

### code used as example

```jsx
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

// width: 188px = 200px - border(1px + 1px) - margin(5px + 5px)
const Item = styled.div`
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 6px;
  width: 188px;
  height: 200px;
`;

export default App;
```

---

## props

| **Name**        |                          **Description**                           |                                                                                                            **value** |
| --------------- | :----------------------------------------------------------------: | -------------------------------------------------------------------------------------------------------------------: |
| `carouselWidth` |                     Carousel total width (px)                      |                                                                                      `null` or `Number` without 'px' |
| `itemsToShow`   |           A number of Items you want to show in Carousel           |                                                                                                             `Number` |
| `duration`      | The length of time a transition animation should take to complete. |                                                                                                             `Number` |
| `timing`        |                     Transition-timing-function                     | `String`: 'ease', 'ease-out' etc. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) |
| `arrowSize`     |                          Arrow size (px)                           |                                                                                                             `Number` |

## How to customize your Carousel or Arrow?

You can simply customize your carousel or arrow with **css**

First, create a css file (ex. carouselStyle.css)

```css
/*
 * carouselStyle.css
 * Each component has own className
*/
.carousel {
  /* here you write css  */
}

.carousel-right-arrow {
  /* here you write css  */
}

.carousel-left-arrow {
  /* here you write  css  */
}

main {
  display: flex;
  justify-content: center;
}

div {
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 6px;
  width: 188px; /* 200px - border(1px + 1px) - margin(5px + 5px) */
  height: 200px;
}
```

then import css file to your Carousel

### without using styled-components

```js
import './carouselStyle.css';
import Carousel from '@somedaycode/react-carousel';

const App = () => {
  const options = {
    // options
  };

  const items = [1, 2, 3, 4].map((card) => <div>{card}</div>);

  return (
    <main>
      <Carousel {...options}>{items}</Carousel>
    </main>
  );
};
```

Please let me know if you get any issues while using `@somedaycode/react-carousel`.

email: somedaycode@gmail.com

github:
