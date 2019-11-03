import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, CardImage, CardContainer} from './styles';

import Header from '../../components/Header';
import light from '../../styles/themes/light';

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

Main.navigationOptions = {
  tabBarIcon: () => <Icon name="layers" size={30} color={light.primary} />,
};
