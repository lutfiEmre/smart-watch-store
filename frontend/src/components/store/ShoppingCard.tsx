
import MiniTopBar from "../MiniTopBar.tsx";
import NavBar from "../NavBar.tsx";
import Questions from "../Questions.tsx";
import Footer from "../Footer.tsx";
import { useNavigate } from 'react-router-dom';
import {useEffect} from "react";
import useCartStore from "../../helpers/useCartStore";


const ShoppingCard = () => {
    const navigate = useNavigate();
    const {
        items,
        fetchCart,
        fetchFavorites,
        removeItem,
        updateQuantity,
        toggleFavorite,
        favorites,
        getSubtotal,
        getTotal
    } = useCartStore();

    useEffect(() => {
        fetchCart();
        fetchFavorites();
    }, [fetchCart, fetchFavorites]);


    if (items.length === 0) {
        return (
            <div className="min-h-screen">
                <MiniTopBar/>
                <NavBar/>
                <div className={'flex w-full lg:px-[50px] md:px-[85px] px-[40px] sm:px-[70px] xl:px-[100px] flex-col gap-[112px]'}>
                    <div className={'flex flex-col mt-[48px]'}>
                        <div className={'flex flex-col'}>
                            <div
                                onClick={() => navigate(-1)}
                                className={'flex items-center cursor-pointer flex-row gap-[4px]'}
                            >
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_43_3979)">
                                        <path d="M7.5 3L4.5 6L7.5 9" stroke="#4B5563" strokeWidth="0.75" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_43_3979">
                                            <rect width="12" height="12" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'worksansregular text-[14px] text-gray'}>
                                    Back
                                </p>
                            </div>
                            <div className="flex flex-col mt-[50px]">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
                                <p className="text-gray-600 mb-8">Add some great watches to your cart!</p>

                            </div>
                        </div>

                    </div>
                    <Questions/>
                </div>

                <Footer/>
            </div>
        );
    }

    return (
        <div className={''}>
            <MiniTopBar/>
            <NavBar/>
            <div className={'flex w-full lg:px-[50px] md:px-[85px] px-[40px] sm:px-[70px] xl:px-[100px] flex-col gap-[112px]'}>
                <div className={'flex flex-col mt-[48px]'}>
                    <div className={'flex flex-col'}>
                        <div
                            onClick={() => navigate(-1)}
                            className={'flex items-center cursor-pointer flex-row gap-[4px]'}
                        >
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_43_3979)">
                                    <path d="M7.5 3L4.5 6L7.5 9" stroke="#4B5563" strokeWidth="0.75" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_43_3979">
                                        <rect width="12" height="12" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className={'worksansregular text-[14px] text-gray'}>
                                Back
                            </p>
                        </div>
                        <h6 className={'worksanssbold text-[36px] text-darkblue'}>
                            Shopping Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
                        </h6>
                    </div>
                    <div className={'mt-[48px] mb-[32px] w-[100px] bg-[#F3F4F6] h-[1px]'}></div>
                    <div className={'flex lg:flex-row flex-col w-full gap-[32px]'}>
                        <div className={'flex flex-col gap-[64px] lg:w-[70%] w-full'}>
                            {items.map((item) => (
                                <div key={item.id} className={'flex flex-row h-fit w-full justify-between'}>
                                    <div className={'flex flex-row gap-[24px]'}>
                                        <img className={'w-[164px] h-[166px] object-cover rounded-lg'} src={item.image} alt={item.name}/>
                                        <div className={'flex flex-col gap-[12px]'}>
                                            <div className={'flex flex-col gap-[8px]'}>
                                                <h6 className={'worksansregular text-[12px] text-darkblue'}>
                                                    {item.code}
                                                </h6>
                                                <h4 className={'worksanssbold text-[16px] text-darkblue'}>
                                                    {item.name}
                                                </h4>
                                            </div>
                                            <div className={'flex flex-col gap-[8px]'}>
                                                <h6 className={'worksansregular text-[12px] text-darkblue'}>
                                                    Category: {item.category}
                                                </h6>
                                                {item.height && (
                                                    <h6 className={'worksansregular text-[12px] text-darkblue'}>
                                                        Height: {item.height}
                                                    </h6>
                                                )}
                                                {item.color && (
                                                    <h6 className={'worksansregular text-[12px] text-darkblue'}>
                                                        Color: {item.color}
                                                    </h6>
                                                )}
                                                {item.composition && (
                                                    <h6 className={'worksansregular text-[12px] text-darkblue'}>
                                                        Composition: {item.composition}
                                                    </h6>
                                                )}
                                            </div>
                                            <div className={'flex flex-row gap-[20px]'}>
                                                <h6
                                                    onClick={() => toggleFavorite(item.id)}
                                                    className={'worksansregular underline cursor-pointer text-[14px] text-darkblue'}
                                                >
                                                    {favorites.includes(item.id) ? 'Remove from favorites' : 'Add to favorites'}
                                                </h6>
                                                <h6
                                                    onClick={() => removeItem(item.id)}
                                                    className={'worksansregular underline cursor-pointer text-[14px] text-[#EF4444]'}
                                                >
                                                    Remove
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'flex flex-col justify-between items-center'}>
                                        <div className={'py-[9px] items-center cursor-pointer border-[#D1D5DB] flex flex-row gap-[10px] border-[1px] px-[12px]'}>
                                            <select
                                                value={item.quantity}
                                                onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                                                className={'worksansregular text-[14px] text-darkblue bg-transparent'}
                                            >
                                                {[1, 2, 3, 4, 5].map((num) => (
                                                    <option key={num} value={num}>
                                                        {String(num).padStart(2, '0')}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <h6 className={'worksanssbold text-[16px] text-darkblue'}>
                                            ${(item.price * item.quantity).toLocaleString()}
                                        </h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={'lg:w-[30%] w-full p-[32px] flex flex-col justify-between h-full max-h-[639px] min-h-[639px] bg-[#F9FAFB]'}>
                            <div className={'flex flex-col'}>
                                <h6 className={'worksanssbold leading-3 text-[36px] text-darkblue'}>
                                    Summary
                                </h6>
                                <div className={'flex flex-col gap-[20px] mt-[64px]'}>
                                    <div className={'flex flex-row justify-between'}>
                                        <p className={'worksansregular text-[16px] text-darkblue'}>
                                            Subtotal
                                        </p>
                                        <p className={'worksansregular text-[16px] text-darkblue'}>
                                            ${getSubtotal().toLocaleString()}
                                        </p>
                                    </div>
                                    <div className={'flex flex-row justify-between'}>
                                        <p className={'worksansregular text-[16px] text-darkblue'}>
                                            Shipping
                                        </p>
                                        <p className={'worksansregular text-[16px] text-darkblue'}>
                                            $30
                                        </p>
                                    </div>
                                    <div className={'flex flex-row justify-between'}>
                                        <p className={'worksansregular text-[16px] text-darkblue'}>
                                            Tax
                                        </p>
                                        <p className={'worksansregular text-[16px] text-darkblue'}>
                                            $39
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={'flex flex-col gap-[24px]'}>
                                <div className={'flex flex-row justify-between'}>
                                    <p className={'worksansregular text-[24px] text-darkblue'}>
                                        Total
                                    </p>
                                    <p className={'worksanssbold text-[24px] text-darkblue'}>
                                        ${getTotal().toLocaleString()}
                                    </p>
                                </div>
                                <button className={'bg2 w-full cursor-pointer flex justify-center items-center p-[20px]'}>
                                    <p className={'worksansregular text-[16px] text-darkblue'}>
                                        Checkout
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Questions/>
            </div>
            <Footer/>
        </div>
    );
};

export default ShoppingCard;