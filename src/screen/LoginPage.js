import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ padding: 20, marginTop: 70 }}>
                <Text variant="headlineLarge" style={{ marginBottom: 10 }}>
                    Hello,
                </Text>
                <Text variant="headlineSmall" style={{ marginBottom: 40 }}>
                    Welcome Back!
                </Text>

                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    mode="outlined"
                    style={{ marginBottom: 16 }}
                    //placeholder="Enter Email"
                    theme={{ roundness: 15 }}
                />

                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    mode="outlined"
                    secureTextEntry
                    style={{ marginBottom: 16 }}
                    //placeholder="Enter Password"
                    theme={{ roundness: 15 }}
                />

                <Text 
                    onPress={() => {/* Handle forgot password */}}
                    style={{ color: '#F26419', textAlign: 'right', marginBottom: 20 }}
                >
                    Forgot Password?
                </Text>

                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('Home')}
                    style={{
                        marginBottom: 16,
                        backgroundColor: '#F26419',
                        paddingVertical: 6,
                        borderRadius: 10,
                    }}
                >
                    Sign In
                </Button>

                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                    <Text style={{ color: '#666', marginBottom: 16 }}>Or Sign in with</Text>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <Button
                            mode="outlined"
                            icon="google"
                            onPress={() => {/* Handle Google sign in */}}
                        />
                        <Button
                            mode="outlined"
                            icon="facebook"
                            onPress={() => {/* Handle Facebook sign in */}}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                    <Text>Don't have an account? </Text>
                    <Text
                        onPress={() => navigation.navigate('Register')}
                        style={{ color: '#F26419' }}
                    >
                        Sign up
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default LoginPage;
