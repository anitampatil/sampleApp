import React from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { Text, Card } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;

const categories = [
    { id: 1, name: 'Breakfast', image: require('../../assets/breakfast.jpg') },
    { id: 2, name: 'Lunch', image: require('../../assets/lunch.jpg') },
    { id: 3, name: 'Dinner', image: require('../../assets/dinner.jpg') },
    { id: 4, name: 'Desserts', image: require('../../assets/desserts.jpeg') },
    { id: 5, name: 'Fast Foods', image: require('../../assets/fastfoods.jpg') },
    { id: 6, name: 'Vegan', image: require('../../assets/vegan.jpg') },
    { id: 7, name: 'Salads', image: require('../../assets/salads.jpg') },
    { id: 8, name: 'Beverages', image: require('../../assets/beverages.jpg') },
    { id: 9, name: 'Snacks', image: require('../../assets/snacks.jpg') },
    { id: 10, name: 'Soups', image: require('../../assets/soups.jpg') }
];

const Categories = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ padding: 16 }}>
                <Text
                    variant="headlineMedium"
                    style={{
                        marginVertical: 20,
                        fontWeight: 'bold',
                        marginTop: 50,
                    }}
                >
                    Categories
                </Text>

                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                }}>
                    {categories.map((category) => (
                        <Card
                            key={category.id}
                            style={{
                                width: (windowWidth - 48) / 2,
                                marginBottom: 16,
                                borderRadius: 15,
                                overflow: 'hidden'
                            }}
                            onPress={() => navigation.navigate('SubCategories', {
                                category: category.name
                            })}

                        >
                            <Card.Cover
                                source={category.image}
                                style={{ height: 120 }}
                            />
                            <Card.Title
                                title={category.name}
                                titleStyle={{
                                    fontSize: 16,
                                    textAlign: 'center',
                                    marginVertical: 8
                                }}
                            />
                        </Card>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default Categories;