import React from 'react';

import {Container, CardImage, CardContainer} from './styles';

import Header from '../../components/Header';

export default function Main() {
  return (
    <Container>
      <Header title="Popular Recipes" />
      <CardImage>
        <CardContainer />
      </CardImage>
      <CardImage />
      <CardImage />
    </Container>
  );
}
