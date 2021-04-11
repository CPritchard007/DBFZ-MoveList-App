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
import { CharSelect } from './CharSelect';
import { SafeAreaView, StatusBar, View } from 'react-native';

const App = () => {

  const Stack = createStackNavigator();

  return (
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="CharSelect"  component={CharSelect} options={{headerShown: true, headerStyle: { backgroundColor: "#f47b26"}, headerTintColor: "#fff", headerTitle: "Character Select"}}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    
    
  );
};



export default App;
