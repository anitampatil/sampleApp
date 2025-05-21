import React from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { Text, Card, IconButton } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;

const categoryDishes = {
    Breakfast: [
        {
            id: 1,
            name: 'Classic Oatmeal',
            image: require('../../assets/soups.jpg'),
            time: '15 min',
            rating: '4.5',
            description: 'Healthy and hearty breakfast'
        },
        { id: 2, name: 'Egg Omelet', image: require('../../assets/soups.jpg'), time: '10 min', rating: '4.8' },
        { id: 3, name: 'Avocado Toast', image: require('../../assets/fastfoods.jpg'), time: '5 min', rating: '4.3' },
        { id: 4, name: 'Pancakes', image: require('../../assets/salads.jpg'), time: '20 min', rating: '4.7' },
        { id: 5, name: 'Fruit Salad', image: require('../../assets/soups.jpg'), time: '10 min', rating: '4.6' },
        { id: 6, name: 'Smoothie Bowl', image: require('../../assets/fastfoods.jpg'), time: '15 min', rating: '4.4' },
        { id: 7, name: 'Breakfast Burrito', image: require('../../assets/soups.jpg'), time: '25 min', rating: '4.5' },
    ],
    Lunch: [
        // ...lunch items
    ],
    Dinner: [
        // ...dinner items
    ],
    Desserts: [
        {
            id: 1,
            name: 'Chocolate Cake',
            image: require('../../assets/cake.jpg'),
            time: '60 min',
            rating: '4.9',
            description: 'Rich chocolate layer cake'
        },
        { id: 2, name: 'Apple Pie', image: require('../../assets/cake.jpg'), time: '45 min', rating: '4.6' }
    ],
};

const SubCategories = ({ route, navigation }) => {
    const { category } = route.params;
    const dishes = categoryDishes[category] || [];

    const handleDishPress = (dish) => {
        navigation.navigate('RecipeDetails', {
            recipe: dish,
            categoryName: category
        });
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ padding: 16 }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 50,
                    marginBottom: 20
                }}>
                    <IconButton
                        icon="arrow-left"
                        size={24}
                        onPress={() => navigation.goBack()}
                    />
                    <Text variant="headlineMedium" style={{ fontWeight: 'bold' }}>
                        {category}
                    </Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                }}>
                    {dishes.map((dish) => (
                        <Card
                            key={dish.id}
                            style={{
                                width: (windowWidth - 48) / 2,
                                marginBottom: 16,
                                borderRadius: 15,
                                overflow: 'hidden'
                            }}
                            onPress={() => handleDishPress(dish)}
                        >
                            <Card.Cover
                                source={dish.image}
                                style={{ height: 120 }}
                            />
                            <Card.Content style={{ padding: 8 }}>
                                <Text variant="titleMedium" style={{
                                    fontSize: 14,
                                    marginBottom: 4
                                }}>
                                    {dish.name}
                                </Text>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <Text variant="bodySmall" style={{ color: '#666' }}>
                                        {dish.time}
                                    </Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <IconButton
                                            icon="star"
                                            size={16}
                                            iconColor="#F26419"
                                            style={{ margin: 0 }}
                                        />
                                        <Text variant="bodySmall">{dish.rating}</Text>
                                    </View>
                                </View>
                            </Card.Content>
                        </Card>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default SubCategories;