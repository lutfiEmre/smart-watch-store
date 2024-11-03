// src/stores/useCartStore.ts
import { create } from 'zustand'
import api, { CartItem } from '../services/api'

interface CartStore {
    items: CartItem[]
    favorites: number[]
    isLoading: boolean
    error: string | null

    // Cart actions
    fetchCart: () => Promise<void>
    addItem: (productId: number, quantity?: number) => Promise<void>
    removeItem: (productId: number) => Promise<void>
    updateQuantity: (productId: number, quantity: number) => Promise<void>

    // Favorites actions
    fetchFavorites: () => Promise<void>
    toggleFavorite: (productId: number) => Promise<void>

    // Calculations
    getSubtotal: () => number
    getTotal: () => number
    getItemQuantity: (productId: number) => number
    getCartCount: () => number
}

const useCartStore = create<CartStore>((set, get) => ({
    items: [],
    favorites: [],
    isLoading: false,
    error: null,

    fetchCart: async () => {
        set({ isLoading: true, error: null });
        try {
            const items = await api.getCart();
            set({ items, isLoading: false });
        } catch (error) {
            set({ error: 'Failed to fetch cart', isLoading: false });
        }
    },

    addItem: async (productId, quantity = 1) => {
        set({ isLoading: true, error: null });
        try {
            await api.addToCart(productId, quantity);
            await get().fetchCart();
        } catch (error) {
            set({ error: 'Failed to add item to cart', isLoading: false });
        }
    },

    removeItem: async (productId) => {
        set({ isLoading: true, error: null });
        try {
            await api.removeFromCart(productId);
            await get().fetchCart();
        } catch (error) {
            set({ error: 'Failed to remove item from cart', isLoading: false });
        }
    },

    updateQuantity: async (productId, quantity) => {
        set({ isLoading: true, error: null });
        try {
            await api.updateCartQuantity(productId, quantity);
            await get().fetchCart();
        } catch (error) {
            set({ error: 'Failed to update quantity', isLoading: false });
        }
    },

    fetchFavorites: async () => {
        try {
            const favorites = await api.getFavorites();
            set({ favorites });
        } catch (error) {
            set({ error: 'Failed to fetch favorites' });
        }
    },

    toggleFavorite: async (productId) => {
        try {
            await api.toggleFavorite(productId);
            await get().fetchFavorites();
        } catch (error) {
            set({ error: 'Failed to toggle favorite' });
        }
    },

    getSubtotal: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    },

    getTotal: () => {
        const subtotal = get().getSubtotal();
        const shipping = 30;
        const tax = 39;
        return subtotal + shipping + tax;
    },

    getItemQuantity: (productId) => {
        const item = get().items.find((i) => i.id === productId);
        return item?.quantity || 0;
    },

    getCartCount: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
    },
}));

export default useCartStore;