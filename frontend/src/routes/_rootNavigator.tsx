
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Routes
import PublicNavigator from './public/publicNavigator';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PublicNavigator" component={PublicNavigator} />
    </Stack.Navigator>
  );
}

export default RootNavigator;