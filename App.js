import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './src/screen/LandingPage'
import LoginPage from './src/screen/LoginPage'
import RegisterPage from './src/screen/RegisterPage';
import HomePage from './src/screen/HomePage';
import AppNavigator from './src/navigation/AppNavigator';
import RecipeDetails from './src/screen/RecipeDetails';
import Categories from './src/screen/Categories';
import SubCategories from './src/screen/SubCategories';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>



        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Landing' component={LandingPage} />
          <Stack.Screen name='Login' component={LoginPage} />
          <Stack.Screen name='Register' component={RegisterPage} />
          <Stack.Screen name='Home' component={HomePage} />
          <Stack.Screen name='Categories' component={Categories} />
          <Stack.Screen name='SubCategories' component={SubCategories} />
          <Stack.Screen name='RecipeDetails' component={RecipeDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

