import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginPage from '../screen/LoginPage';
import RegisterPage from '../screen/RegisterPage';
import BottomTabNavigator from './BottomTabNavigator';
import RecipeDetails from '../screen/RecipeDetails';

const Stack = createStackNavigator();

const AppNavigator = () => {
    const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

    React.useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value === null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });
    }, []);

    if (isFirstLaunch === null) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isFirstLaunch ? "Landing" : "Home"}>
                <Stack.Screen
                    name="Landing"
                    component={LandingPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={BottomTabNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="RecipeDetails"
                    component={RecipeDetails}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;