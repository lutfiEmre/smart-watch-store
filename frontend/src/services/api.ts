// src/services/api.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8089/api';

// Geçici user ID (normalde auth sisteminden gelecek)
const USER_ID = 'temp-user-id';

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: 'luxury' | 'sport' | 'classic';
    code?: string;
    height?: string;
    color?: string;
    composition?: string;
}

export interface CartItem extends Product {
    quantity: number;
}

const api = {
    // Products
    getProducts: async () => {
        const response = await axios.get<Product[]>(`${API_URL}/products`);
        return response.data;
    },

    // Cart
    getCart: async () => {
        const response = await axios.get<CartItem[]>(`${API_URL}/cart/${USER_ID}`);
        return response.data;
    },

    addToCart: async (productId: number, quantity: number = 1) => {
        const response = await axios.post(`${API_URL}/cart`, {
            userId: USER_ID,
            productId,
            quantity
        });
        return response.data;
    },

    updateCartQuantity: async (productId: number, quantity: number) => {
        const response = await axios.put(
            `${API_URL}/cart/${USER_ID}/${productId}`,
            { quantity }
        );
        return response.data;
    },

    removeFromCart: async (productId: number) => {
        await axios.delete(`${API_URL}/cart/${USER_ID}/${productId}`);
    },

    // Favorites
    getFavorites: async () => {
        const response = await axios.get<number[]>(`${API_URL}/favorites/${USER_ID}`);
        return response.data;
    },

    toggleFavorite: async (productId: number) => {
        const response = await axios.post(`${API_URL}/favorites/toggle`, {
            userId: USER_ID,
            productId
        });
        return response.data;
    }
};

export default api;