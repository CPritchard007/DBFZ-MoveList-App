/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainMenu } from './MainMenu';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { CharSelect } from './Dragonball Fighter Z/CharacterSelect';
import { globalStyle, primaryColor } from '../themes/defaultTheme';

const App = () => {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="menu" component={MainMenu} options={{headerShown: true, headerStyle: { backgroundColor: primaryColor}, headerTintColor: "#fff0", }}/>
          <Stack.Screen name="dragonballFighterZ" component={CharSelect} options={{headerShown: true, headerStyle: { backgroundColor: primaryColor}, headerTintColor: "#fff", title:"Character Select" }}/>
        </Stack.Navigator>
      </NavigationContainer> 
  );
};



export default App;
