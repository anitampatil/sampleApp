import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Text, IconButton, Card, List } from 'react-native-paper';

const RecipeDetails = ({ route, navigation }) => {
    const { recipe } = route.params;

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView>
                <View>
                    <IconButton
                        icon="arrow-left"
                        size={24}
                        onPress={() => navigation.goBack()}
                        style={{ position: 'absolute', top: 40, left: 10, zIndex: 1 }}
                    />
                    <IconButton
                        icon="dots-vertical"
                        size={24}
                        onPress={() => {}}
                        style={{ position: 'absolute', top: 40, right: 10, zIndex: 1 }}
                    />
                    <Image
                        source={recipe.image}
                        style={{ width: '100%', height: 250, borderRadius: 15 }}
                    />

                    <View style={{ padding: 16 }}>
                        <Text variant="headlineMedium" style={{ marginBottom: 16 }}>
                            {recipe.title}
                        </Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 }}>
                            <View>
                                <Text>{recipe.prepTime}</Text>
                                <Text style={{ color: '#666' }}>Prep Time</Text>
                            </View>
                            <View>
                                <Text>{recipe.cookTime}</Text>
                                <Text style={{ color: '#666' }}>Cook Time</Text>
                            </View>
                            <View>
                                <Text>{recipe.servings}</Text>
                                <Text style={{ color: '#666' }}>Servings</Text>
                            </View>
                        </View>

                        <Card style={{ marginVertical: 16, padding: 16 }}>
                            <Text variant="titleLarge" style={{ marginBottom: 10 }}>Nutrition Facts</Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16 }}>
                                {Object.entries(recipe.nutrition).map(([key, value]) => (
                                    <View key={key} style={{ alignItems: 'center', width: '30%' }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{value}</Text>
                                        <Text style={{ color: '#666' }}>{key}</Text>
                                    </View>
                                ))}
                            </View>
                        </Card>

                        <Text variant="titleLarge" style={{ marginBottom: 16 }}>
                            Ingredients
                        </Text>

                        {recipe.ingredients.map((ingredient, index) => (
                            <View 
                                key={index}
                                style={{ 
                                    flexDirection: 'row', 
                                    justifyContent: 'space-between',
                                    marginBottom: 8 
                                }}
                            >
                                <Text>{ingredient.item}</Text>
                                <Text>{ingredient.amount}</Text>
                            </View>
                        ))}

                        <Text variant="titleLarge" style={{ marginTop: 24, marginBottom: 16 }}>
                            Preparation Steps
                        </Text>
                        {recipe.steps.map((step, index) => (
                            <List.Item
                                key={index}
                                title={step}
                                left={() => <List.Icon icon={`numeric-${index + 1}-circle`} />}
                                style={{ paddingVertical: 8 }}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default RecipeDetails;
