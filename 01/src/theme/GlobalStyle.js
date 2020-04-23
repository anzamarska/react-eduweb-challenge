import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Manrope:300,400,500,700&display=swap');

*, *::before, *::after{
    box-sizing: border-box;
    * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

}

html {
    font-size: 62.5%; 
     /* 1rem === 10px */
}

body {
    font-size: 1.6rem;
    /* happy rems */
    font-family: 'Manrope', sans-serif;
}
`;

export default GlobalStyle;
