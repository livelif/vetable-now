import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import LogIn from '../../screens/public/LogIn/index';;

const Stack = createStackNavigator();

function PublicNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LogIn" component={LogIn} />
    </Stack.Navigator>
  );
}

export default PublicNavigator;