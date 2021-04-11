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
import { CharSelect } from './CharSelect';

const App = () => {

  const Stack = createStackNavigator();

  return (
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="menu"  component={MainMenu} options={{headerShown: true, headerStyle: { backgroundColor: "#f47b26"}, headerTintColor: "#fff0", }}/>
          <Stack.Screen name="charSelect" component={CharSelect} options={{headerShown: true, headerStyle: { backgroundColor: "#f47b26"}, headerTintColor: "#fff", title:"Character Select" }}/>
        </Stack.Navigator>
      </NavigationContainer>
    
    
  );
};



export default App;
