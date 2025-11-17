
const restaurantItemArray = [
    {
        id: '001',
        category: 'starter',
        title: 'Lasagna',
        description: 'A classic Italian dish made with layers of pasta, meat sauce, and cheese.',
        imageUri: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$12',
    },
    {
        id: '002',
        category: 'starter',
        title: 'Chicken Burger',
        description: 'Juicy grilled chicken patty with lettuce, tomato, and special sauce in a sesame bun.',
        imageUri: 'https://images.pexels.com/photos/1639566/pexels-photo-1639566.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$9',
    },
    {
        id: '003',
        category: 'starter',
        title: 'Caesar Salad',
        description: 'Fresh romaine lettuce with parmesan cheese, croutons, and classic Caesar dressing.',
        imageUri: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$8',
    },
    {
        id: '004',
        category: 'starter',
        title: 'Grilled Salmon',
        description: 'Fresh Atlantic salmon grilled to perfection, served with lemon butter sauce.',
        imageUri: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$18',
    },
    {
        id: '005',
        category: 'starter',
        title: 'Chocolate Cake',
        description: 'Rich and moist chocolate cake with chocolate ganache and fresh berries.',
        imageUri: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$7',
    },
    {
        id: '006',
        category: 'starter',
        title: 'Beef Steak',
        description: 'Premium ribeye steak cooked to your preference, served with garlic mashed potatoes.',
        imageUri: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$22',
    },
    {
        id: '007',
        category: 'starter',
        title: 'Mushroom Soup',
        description: 'Creamy wild mushroom soup topped with truffle oil and fresh herbs.',
        imageUri: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$6',
    },
    {
        id: '008',
        category: 'main',
        title: 'Margherita Pizza',
        description: 'Traditional Italian pizza with fresh mozzarella, tomato sauce, and basil leaves.',
        imageUri: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$14',
    },
    {
        id: '009',
        category: 'starter',
        title: 'Tiramisu',
        description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
        imageUri: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$8',
    },
    {
        id: '010',
        category: 'starter',
        title: 'Spaghetti Carbonara',
        description: 'Creamy pasta dish with pancetta, eggs, parmesan cheese, and black pepper.',
        imageUri: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$13',
    },
    {
        id: '011',
        category: 'starter',
        title: 'Fish Tacos',
        description: 'Crispy battered fish with cabbage slaw, pico de gallo, and lime crema in corn tortillas.',
        imageUri: 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$11',
    },
    {
        id: '012',
        category: 'starter',
        title: 'Crème Brûlée',
        description: 'Vanilla custard topped with a layer of hardened caramelized sugar.',
        imageUri: 'https://images.pexels.com/photos/853004/pexels-photo-853004.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$9',
    }
]

export const RestaurantServiceController = async (req, res) => {
    try {
        console.log("RestaurantServiceController accessed");
        
        res.json(
            { 
                success:true, 
                items: restaurantItemArray 
            }
        );

    } catch (error) {
        console.error("Error in RestaurantServiceController:", error);
        res.status(500).json({ message: 'Internal server error.' });
    }
}