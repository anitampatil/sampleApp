export const recipes = {
    breakfast: {
        title: "Masala Dosa",
        prepTime: "30 mins",
        cookTime: "15 mins",
        servings: "2-3",
        image: require('../../assets/vegan.jpg'),
        ingredients: [
            { item: "Rice", amount: "2 cups" },
            { item: "Urad Dal", amount: "1/2 cup" },
            { item: "Fenugreek Seeds", amount: "1 tsp" },
            { item: "Salt", amount: "to taste" },
            { item: "Potatoes", amount: "4 medium" },
            { item: "Onions", amount: "2 medium" },
        ],
        steps: [
            "Soak rice and dal for 6 hours",
            "Grind into smooth batter",
            "Ferment overnight",
            "Spread on hot griddle",
            "Add filling and fold"
        ],
        nutrition: {
            calories: "248 kcal",
            protein: "6g",
            carbs: "48g",
            fat: "2.5g",
            fiber: "2g"
        }
    },
    dessert: {
        title: "Gulab Jamun",
        prepTime: "20 mins",
        cookTime: "25 mins",
        servings: "4-5",
        image: require('../../assets/cake.jpg'),
        ingredients: [
            { item: "Milk Powder", amount: "1 cup" },
            { item: "All-purpose flour", amount: "1/4 cup" },
            { item: "Sugar", amount: "2 cups" },
            { item: "Cardamom", amount: "4-5 pods" },
            { item: "Oil", amount: "for frying" },
        ],
        steps: [
            "Mix milk powder and flour",
            "Make small balls",
            "Deep fry until golden",
            "Prepare sugar syrup",
            "Soak in syrup for 2 hours"
        ],
        nutrition: {
            calories: "175 kcal",
            protein: "3g",
            carbs: "38g",
            fat: "8g",
            sugar: "25g"
        }
    },
    fastFood: {
        title: "Fried Rice",
        prepTime: "15 mins",
        cookTime: "20 mins",
        servings: "3-4",
        image: require('../../assets/fastfoods.jpg'),
        ingredients: [
            { item: "Rice", amount: "2 cups" },
            { item: "Vegetables", amount: "1 cup" },
            { item: "Soy Sauce", amount: "2 tbsp" },
            { item: "Oil", amount: "3 tbsp" },
            { item: "Garlic", amount: "4 cloves" },
        ],
        steps: [
            "Cook rice and let it cool",
            "Heat oil and sauté vegetables",
            "Add cooked rice",
            "Season with soy sauce",
            "Stir-fry until done"
        ],
        nutrition: {
            calories: "320 kcal",
            protein: "7g",
            carbs: "45g",
            fat: "12g",
            fiber: "3g"
        }
    }
};
