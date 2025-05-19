import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Text, Searchbar, Card, Avatar, IconButton } from 'react-native-paper';


const categories = [
    { id: 1, name: 'Breakfast', image: require('../../assets/breakfast.jpg') },
    { id: 2, name: 'Desserts', image: require('../../assets/desserts.jpeg') },
    { id: 3, name: 'Fast Foods', image: require('../../assets/fastfoods.jpg') },
    { id: 4, name: 'Vegan', image: require('../../assets/vegan.jpg') },
];

const trending = [
    {
        id: 1,
        title: 'Handmade Pizza',
        image: require('../../assets/pizza.jpg'), // Local image
    },
    {
        id: 2,
        title: 'Chocolate Cake',
        image: require('../../assets/cake.jpg'), // Local image
    },
];

const HomePage = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ padding: 16, marginTop: 50, marginBottom: 30 }}>
                {/* Header Section */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text variant="titleLarge">Hello, </Text>
                        <Text variant="headlineMedium" style={{ color: '#F26419' }}>Alexa</Text>
                    </View>
                    <Avatar.Image
                        size={50}
                        source={require('../../assets/profile.jpg')}
                    />

                </View>

                {/* Search Bar */}
                <Searchbar
                    placeholder="What do you like to cook?"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    style={{
                        borderRadius: 15,
                        marginBottom: 24,
                        backgroundColor: '#f5f5f5'
                    }}
                />

                {/* Categories Section */}
                <View style={{ marginBottom: 30 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                        <Text variant="titleLarge">Categories</Text>
                        <IconButton
                            icon="chevron-right"
                            size={20}
                            onPress={() => { }}
                        />
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {categories.map((category) => (
                            <Card
                                key={category.id}
                                style={{
                                    width: 100,
                                    marginRight: 12,
                                    marginBottom: 10,
                                    borderRadius: 15,
                                    overflow: 'hidden'
                                }}
                            >
                                <Card.Cover source={category.image} />
                                <Card.Title
                                    title={category.name}
                                    titleStyle={{ fontSize: 12, textAlign: 'center' }}
                                />
                            </Card>
                        ))}

                    </ScrollView>
                </View>

                {/* Trending Section */}
                <View>
                    <Text variant="titleLarge" style={{ marginBottom: 16 }}>Trending</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {trending.map((item) => (
                            <Card
                                key={item.id}
                                style={{
                                    width: '48%',
                                    marginBottom: 16,
                                    borderRadius: 15,
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Image for trending item */}
                                <Card.Cover source={item.image} />
                                <Card.Title
                                    title={item.title}
                                    titleStyle={{ fontSize: 14 }}
                                />
                                <Card.Actions>
                                    <Text
                                        style={{ color: '#F26419' }}
                                        onPress={() => { /* Handle read more */ }}
                                    >
                                        Read More
                                    </Text>
                                </Card.Actions>
                            </Card>
                        ))}


                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default HomePage;