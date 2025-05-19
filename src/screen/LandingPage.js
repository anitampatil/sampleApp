import React from 'react';
import { ImageBackground, View } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';

const LandingPage = ({ navigation }) => {
    const theme = useTheme();

    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836' }}
            style={{ flex: 1 }}
            resizeMode="cover"
        >
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
            }}>
                <Text variant="displayLarge" style={{ color: '#fff', fontFamily: 'serif' }}>
                    RECI
                </Text>
                <Text variant="titleMedium" style={{ color: '#fff', marginBottom: 50 }}>
                    COOK IT YOURSELF
                </Text>

                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('Register')}
                    style={{
                        width: '90%',
                        marginVertical: 10,
                        backgroundColor: '#F26419',
                    }}
                    contentStyle={{ paddingVertical: 8 }}
                >
                    REGISTER
                </Button>

                <Button
                    mode="outlined"
                    onPress={() => navigation.navigate('Login')}
                    style={{
                        width: '90%',
                        marginVertical: 10,
                        borderColor: '#F26419',
                        borderWidth: 2,
                    }}
                    textColor="#fff"
                    contentStyle={{ paddingVertical: 8 }}
                >
                    LOGIN
                </Button>
            </View>
        </ImageBackground>
    );
};

export default LandingPage;
