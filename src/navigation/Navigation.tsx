import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScree';


const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyle:{
        backgroundColor: 'white'
      }
    }} >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={DetailScreen} />
    </Stack.Navigator>
  );
}