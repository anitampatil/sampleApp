import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconButton } from 'react-native-paper';
import HomePage from '../screen/HomePage';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: 60,
                    paddingBottom: 5
                },
                tabBarActiveTintColor: '#F26419',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    tabBarIcon: ({ color }) => (
                        <IconButton icon="home" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Categories"
                component={HomePage} // Replace with actual component
                options={{
                    tabBarIcon: ({ color }) => (
                        <IconButton icon="view-grid" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Saved"
                component={HomePage} // Replace with actual component
                options={{
                    tabBarIcon: ({ color }) => (
                        <IconButton icon="bookmark" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={HomePage} // Replace with actual component
                options={{
                    tabBarIcon: ({ color }) => (
                        <IconButton icon="account" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;