import React from 'react';
import Button from '../../components/Button/Button';
import GlobalStyle from '../../theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Hello Anianiania </h1>
    <Button padding="50px">add to your favourite</Button>
    <Button padding="40px" secondary>
      remove
    </Button>
  </div>
);

export default Root;
