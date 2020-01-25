import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Pagina1 from './Pagina1'
import Pagina2 from './Pagina2'
import Pagina3 from './Pagina3'

const MainNavigator = createStackNavigator({
  Pagina1: {screen: Pagina1},
  Pagina2: {screen: Pagina2},
  Pagina3: {screen: Pagina3},
});

const App = createAppContainer(MainNavigator);

export default App;
