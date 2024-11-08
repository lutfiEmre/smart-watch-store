    // src/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 8089;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// In-memory storage
const db = {
    products: [
        {
            id: 1,
            name: "Luxe 2 series",
            price: 23000,
            image: "http://localhost:8089/images/watch1.svg",
            category: "luxury",
            code: "LX001",
            height: "42mm",
            color: "Gold",
            composition: "18K Gold"
        },
        {
            id: 2,
            name: "Classic Elite",
            price: 18000,
            image: "http://localhost:8089/images/watch2.svg",
            category: "classic",
            code: "CE001",
            height: "44mm",
            color: "Silver",
            composition: "Stainless Steel"
        },
        {
            id: 3,
            name: "Sport Pro",
            price: 15000,
            image: "http://localhost:8089/images/watch3.svg",
            category: "sport",
            code: "SP001",
            height: "46mm",
            color: "Black",
            composition: "Titanium"
        },
        {
            id: 4,
            name: "Diamond Series",
            price: 35000,
            image: "http://localhost:8089/images/watch4.svg",
            category: "luxury",
            code: "DS001",
            height: "40mm",
            color: "White Gold",
            composition: "18K Gold with Diamonds"
        },
        {
            id: 5,
            name: "Chronograph X",
            price: 28000,
            image: "http://localhost:8089/images/watch5.svg",
            category: "sport",
            code: "CX001",
            height: "45mm",
            color: "Blue",
            composition: "Carbon Fiber"
        },
        {
            id: 6,
            name: "Vintage Collection",
            price: 21000,
            image: "http://localhost:8089/images/watch6.svg",
            category: "classic",
            code: "VC001",
            height: "38mm",
            color: "Bronze",
            composition: "Bronze & Leather"
        }
    ],
    carts: new Map(),
    favorites: new Map()
};

// Products endpoints
app.get('/api/products', (req, res) => {
    res.json(db.products);
});

app.get('/api/products/:id', (req, res) => {
    const product = db.products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
});

// Cart endpoints
app.get('/api/cart/:userId', (req, res) => {
    const { userId } = req.params;
    const userCart = db.carts.get(userId) || [];

    const cartItems = userCart.map(cartItem => {
        const product = db.products.find(p => p.id === cartItem.productId);
        if (!product) return null;
        return {
            ...product,
            quantity: cartItem.quantity
        };
    }).filter(item => item !== null);

    res.json(cartItems);
});

app.post('/api/cart', (req, res) => {
    const { userId, productId, quantity = 1 } = req.body;

    if (!db.carts.has(userId)) {
        db.carts.set(userId, []);
    }

    const userCart = db.carts.get(userId);
    const existingItem = userCart.find(item => item.productId === productId);

    if (existingItem) {
        existingItem.quantity = quantity;
    } else {
        userCart.push({ productId, quantity });
    }

    db.carts.set(userId, userCart);

    const cartItems = userCart.map(cartItem => {
        const product = db.products.find(p => p.id === cartItem.productId);
        return {
            ...product,
            quantity: cartItem.quantity
        };
    });

    res.json(cartItems);
});

app.put('/api/cart/:userId/:productId', (req, res) => {
    const { userId, productId } = req.params;
    const { quantity } = req.body;

    if (!db.carts.has(userId)) {
        return res.status(404).json({ error: 'Cart not found' });
    }

    const userCart = db.carts.get(userId);
    const item = userCart.find(item => item.productId === parseInt(productId));

    if (!item) {
        return res.status(404).json({ error: 'Item not found in cart' });
    }

    item.quantity = quantity;
    db.carts.set(userId, userCart);

    const cartItems = userCart.map(cartItem => {
        const product = db.products.find(p => p.id === cartItem.productId);
        return {
            ...product,
            quantity: cartItem.quantity
        };
    });

    res.json(cartItems);
});

app.delete('/api/cart/:userId/:productId', (req, res) => {
    const { userId, productId } = req.params;

    if (!db.carts.has(userId)) {
        return res.status(404).json({ error: 'Cart not found' });
    }

    const userCart = db.carts.get(userId);
    const updatedCart = userCart.filter(item => item.productId !== parseInt(productId));

    db.carts.set(userId, updatedCart);
    res.status(204).send();
});

// Favorites endpoints
app.get('/api/favorites/:userId', (req, res) => {
    const { userId } = req.params;
    const userFavorites = db.favorites.get(userId) || [];
    res.json(userFavorites);
});

app.post('/api/favorites/toggle', (req, res) => {
    const { userId, productId } = req.body;

    if (!db.favorites.has(userId)) {
        db.favorites.set(userId, []);
    }

    const userFavorites = db.favorites.get(userId);
    const index = userFavorites.indexOf(productId);

    if (index === -1) {
        userFavorites.push(productId);
    } else {
        userFavorites.splice(index, 1);
    }

    db.favorites.set(userId, userFavorites);
    res.json(userFavorites);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});