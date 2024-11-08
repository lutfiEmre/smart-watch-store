// src/components/WatchesList.tsx
import React, { useState, useEffect } from 'react';
import useCartStore from '../../helpers/useCartStore.ts';
import api, { Product } from '../../services/api.ts';
import {useNavigate} from "react-router";

type PriceRangeType = 'all' | 'low' | 'medium' | 'high';
type CategoryType = 'all' | 'luxury' | 'sport' | 'classic';

const WatchesList: React.FC = () => {
    const {
        fetchFavorites,
        toggleFavorite,
        favorites,
        addItem,
        getItemQuantity
    } = useCartStore();

    const [watches, setWatches] = useState<Product[]>([]);
    const [filteredWatches, setFilteredWatches] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
    const [priceRange, setPriceRange] = useState<PriceRangeType>('all');
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await api.getProducts();
                setWatches(products);
                setFilteredWatches(products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
        fetchFavorites();
    }, [fetchFavorites]);

    useEffect(() => {
        let result = [...watches];

        if (selectedCategory !== "all") {
            result = result.filter(watch => watch.category === selectedCategory);
        }

        if (priceRange === "low") {
            result = result.filter(watch => watch.price < 20000);
        } else if (priceRange === "medium") {
            result = result.filter(watch => watch.price >= 20000 && watch.price < 30000);
        } else if (priceRange === "high") {
            result = result.filter(watch => watch.price >= 30000);
        }

        setFilteredWatches(result);
    }, [selectedCategory, priceRange, watches]);

    const handleAddToCart = async (watch: Product) => {
        await addItem(watch.id);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectedCategory(e.target.value as CategoryType);
    };

    const handlePriceRangeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setPriceRange(e.target.value as PriceRangeType);
    };

    return (
        <div className="flex mt-0 gap-12 lg:px-0 flex-col w-full">
            <div className="flex flex-col sm:justify-start sm:items-start justify-center items-center w-full gap-4">
                <h6 className="text-gray text-sm">Home - Men</h6>
                <h6 className="text-darkblue text-4xl font-bold">Watches</h6>

                <div className="w-full flex flex-col gap-[25px] lg:gap-0 md:flex-row justify-between items-center bg-gray-50 p-4 rounded-lg">
                    <h6 className="text-gray text-xl">
                        {filteredWatches.length} products
                    </h6>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <select
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All Categories</option>
                            <option value="luxury">Luxury</option>
                            <option value="sport">Sport</option>
                            <option value="classic">Classic</option>
                        </select>

                        <select
                            value={priceRange}
                            onChange={handlePriceRangeChange}
                            className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All Prices</option>
                            <option value="low">Under $20,000</option>
                            <option value="medium">$20,000 - $30,000</option>
                            <option value="high">Above $30,000</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {filteredWatches.map((watch) => (
                    <div

                        key={watch.id}
                        className="flex flex-col cursor-pointer gap-6 w-full bg-white rounded-lg p-4 hover:shadow-xl transition-all duration-300"
                    >
                        <div  onClick={() => {navigate(`/watchview/${watch.id}`)}} className="relative flex items-center justify-center overflow-hidden h-[300px] w-full rounded-lg">
                            <img
                                className="w-[250px] h-[250px] object-cover transition-transform duration-300 hover:scale-110"
                                src={watch.image}
                                alt={watch.name}
                            />
                        </div>

                        <h6  onClick={() => {navigate(`/watchview/${watch.id}`)}} className="font-bold md:text-start text-center text-2xl text-darkblue">
                            {watch.name}
                        </h6>

                        <div  className="w-full flex justify-between items-center">
                            <div className="flex flex-col gap-2">
                                <h6 className="text-xl text-darkblue">
                                    ${watch.price.toLocaleString()}
                                </h6>
                                {getItemQuantity(watch.id) > 0 && (
                                    <span className="text-sm text-green-600">
                                        {getItemQuantity(watch.id)} in cart
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => handleAddToCart(watch)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                                >
                                    Add to Cart
                                </button>
                                <button
                                    onClick={() => toggleFavorite(watch.id)}
                                    className="group active:mt-2 duration-100 ease-in"
                                >
                                    <svg
                                        className={`transition-all duration-300 ${
                                            favorites.includes(watch.id) ? 'fill-red-500' : 'fill-none'
                                        }`}
                                        width="22"
                                        height="20"
                                        viewBox="0 0 22 20"
                                        stroke="#111827"
                                        strokeWidth="1.25"
                                    >
                                        <path d="M19.7908 2.59133C19.3021 2.08683 18.7219 1.68663 18.0833 1.41358C17.4447 1.14054 16.7602 1 16.0689 1C15.3776 1 14.6931 1.14054 14.0545 1.41358C13.4159 1.68663 12.8356 2.08683 12.347 2.59133L11.3328 3.63785L10.3185 2.59133C9.33143 1.57276 7.99261 1.00053 6.59662 1.00053C5.20062 1.00053 3.8618 1.57276 2.87468 2.59133C1.88757 3.6099 1.33301 4.99139 1.33301 6.43187C1.33301 7.87235 1.88757 9.25383 2.87468 10.2724L3.88889 11.3189L11.3328 19L18.7766 11.3189L19.7908 10.2724C20.2797 9.76814 20.6676 9.16942 20.9322 8.51045C21.1968 7.85148 21.333 7.14517 21.333 6.43187C21.333 5.71857 21.1968 5.01225 20.9322 4.35328C20.6676 3.69431 20.2797 3.09559 19.7908 2.59133Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WatchesList;
