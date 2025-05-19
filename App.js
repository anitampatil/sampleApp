import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './src/screen/LandingPage'
import RegisterPage from './src/screen/RegisterPage';
import HomePage from './src/screen/HomePage';
import AppNavigator from './src/navigation/AppNavigator';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>



        <Stack.Navigator screenOptions={{ headerShown: false }}>

          <Stack.Screen name='LoginPage' component={LoginPage} />
          <Stack.Screen name='Register' component={RegisterPage} />
          <Stack.Screen name='Home' component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

