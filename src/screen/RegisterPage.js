import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { TextInput, Button, Text, Checkbox } from 'react-native-paper';
import HomePage from './HomePage';

const RegisterPage = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ padding: 20, marginTop: 70 }}>
                <Text variant="headlineMedium" style={{ marginBottom: 10 }}>
                    Create an account
                </Text>
                <Text variant="bodyMedium" style={{ marginBottom: 40, color: '#666' }}>
                    Let's help you set up your account.
                    It won't take long.
                </Text>

                <TextInput
                    label="Name"
                    value={name}
                    onChangeText={setName}
                    mode="outlined"
                    style={{ marginBottom: 16 }}
                    theme={{
                        roundness: 15, // ← Important for Paper theme-based styling
                    }}
                />

                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    mode="outlined"
                    keyboardType="email-address"
                    style={{ marginBottom: 16 }}
                    theme={{
                        roundness: 15, // ← Important for Paper theme-based styling
                    }}
                />

                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    mode="outlined"
                    secureTextEntry
                    style={{ marginBottom: 16 }}
                    theme={{
                        roundness: 15, // ← Important for Paper theme-based styling
                    }}
                />

                <TextInput
                    label="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    mode="outlined"
                    secureTextEntry
                    style={{ marginBottom: 16 }}
                    theme={{
                        roundness: 15, // ← Important for Paper theme-based styling
                    }}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <Checkbox.Android
                        status={acceptTerms ? 'checked' : 'unchecked'}
                        onPress={() => setAcceptTerms(!acceptTerms)}
                        color="#F26419"
                    />
                    <Text style={{ color: '#F26419' }}>Accept terms & Condition</Text>
                </View>

                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('Home')}
                    style={{
                        marginBottom: 16,
                        backgroundColor: '#F26419',
                        paddingVertical: 6,
                        borderRadius: 10, // ← Rounded corners here
                    }}

                >
                    Sign Up
                </Button>

                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                    <Text style={{ color: '#666', marginBottom: 16 }}>Or Sign in with</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
                        <Button
                            mode="outlined"
                            icon="google"
                            onPress={() => {/* Handle Google sign in */ }}
                        >
                            Google
                        </Button>
                        <Button
                            mode="outlined"
                            icon="facebook"
                            onPress={() => {/* Handle Facebook sign in */ }}
                        >
                            Facebook
                        </Button>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                    <Text>Already a member? </Text>
                    <Text
                        onPress={() => navigation.navigate('Login')}
                        style={{ color: '#F26419' }}
                    >
                        Sign in
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default RegisterPage;