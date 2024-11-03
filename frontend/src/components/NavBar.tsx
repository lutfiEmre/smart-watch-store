import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {useNavigate} from "react-router";

interface QuickLink {
    title: string;
    active: boolean;
}
type Category = string;

const NavBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>("Men's");
    const [searchValue, setSearchValue] = useState<string>("");

    const menuVariants = {
        closed: {
            x: "-100%",
            opacity: 0,
            transition: {
                duration: 0.3,
                type: "spring",
                damping: 25,
                stiffness: 200
            }
        },
        open: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                type: "spring",
                damping: 25,
                stiffness: 200,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        closed: {
            x: -20,
            opacity: 0
        },
        open: {
            x: 0,
            opacity: 1
        }
    };

    const backdropVariants = {
        closed: {
            opacity: 0,
            transition: {
                duration: 0.2
            }
        },
        open: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    };
    const navigate = useNavigate()
    const categories = ["Men's", "Women's", "Kids", "Accessories"];
    const quickLinks: QuickLink[] = [
            { title: "Holographic Neon Jacket", active: false },
        { title: "Casual Streetwear", active: true },
        { title: "80's Outfit", active: false },
    ];

    return (
        <div className={'w-full mt-[20px] sticky top-0 left-0 z-20 bg-white pt-[20px] flex flex-wrap flex-col sm:flex-row px-[80px] xl:px-[25px] 2xl:px-[80px] items-center justify-between'}>
            {/* Logo and Menu Button Section */}
            <div className={'pl-[18px] flex flex-row gap-[20px] items-center p-[25px] sm:pb-[50px]'}>
                <motion.button
                    onClick={(e: React.MouseEvent) => setIsOpen(!isOpen)}

                    className="relative xl:hidden flex z-50 p-2"
                    aria-label="Toggle menu"
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.svg
                        className="w-[50px] h-[50px]"
                        viewBox="0 0 24 24"
                        fill="none"
                        animate={isOpen ? "open" : "closed"}
                    >
                        <motion.path
                            d={isOpen ? "M6 6L18 18" : "M4 6H20"}
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            transition={{ duration: 0.3 }}
                        />
                        <motion.path
                            d={isOpen ? "M18 6L6 18" : "M4 12H20"}
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            transition={{ duration: 0.3 }}
                        />
                        <motion.path
                            d="M4 18H20"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            initial={false}
                            animate={{ opacity: isOpen ? 0 : 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.svg>
                </motion.button>

                {/* Logo */}
                <svg className={'cursor-pointer'} onClick={() => {navigate('/')}} width="77" height="29" viewBox="0 0 77 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.01749 14.2451C7.41492 12.0026 8.14864 10.7738 9.86064 10.7738C11.3892 10.7738 12.0312 11.9718 11.6643 14.0915L10.1052 23.0003H15.1495L16.8921 12.9856C17.5952 8.96128 15.6998 6.16576 12.2758 6.16576C10.4109 6.16576 8.82121 7.05664 7.59835 8.5312L8.88235 0.943359H4.26606L0.414062 23.0003H5.45835L7.01749 14.2451Z" fill="#1D1D1F"/>
                    <path d="M49.1409 13.2314C49.1409 9.05344 46.1143 6.16576 41.7731 6.16576C38.716 6.16576 35.7506 7.79392 33.6411 10.8045C32.3266 8.00896 29.8503 6.16576 26.8849 6.16576C21.5654 6.16576 17.4994 10.528 17.4994 16.2726C17.4994 20.4198 20.4954 23.3075 24.8366 23.3075C28.0466 23.3075 30.8591 21.6794 32.9686 18.6381C34.3749 21.5872 37.0651 23.3075 40.0917 23.3075C45.4417 23.3075 49.1409 18.976 49.1409 13.2314ZM22.8494 15.7504C22.8494 12.8934 24.6226 10.743 26.9766 10.743C28.6274 10.743 29.8197 11.9718 30.9509 14.7674C29.1777 17.2864 27.2517 18.7302 25.6926 18.7302C23.9194 18.7302 22.8494 17.655 22.8494 15.7504ZM35.72 14.7674C37.5237 12.0333 39.2051 10.743 40.9783 10.743C42.7209 10.743 43.7603 11.8797 43.7603 13.7229C43.7603 16.6106 42.0483 18.7302 39.6943 18.7302C38.0434 18.7302 36.7289 17.4093 35.72 14.7674Z" fill="#1D1D1F"/>
                    <path d="M66.9095 13.0778C66.9095 9.02272 64.4027 6.19648 60.9175 6.19648C58.8998 6.19648 57.0961 7.08736 55.9955 8.50048L56.3318 6.47296H51.7156L47.7718 28.9293H52.8161L54.2835 20.7578C54.9867 22.3552 56.607 23.3075 58.6553 23.3075C63.3021 23.3075 66.9095 18.8531 66.9095 13.0778ZM61.6207 13.6614C61.6207 16.6413 60.0921 18.7302 57.8604 18.7302C56.3624 18.7302 55.2618 17.5629 55.2618 15.8118C55.2618 12.7706 56.821 10.743 59.0221 10.743C60.5201 10.743 61.6207 11.9411 61.6207 13.6614Z" fill="#1D1D1F"/>
                    <path d="M72.4466 15.904L76.4514 0.943359H69.9703L68.6251 15.904H72.4466ZM73.2108 19.4061C73.2108 17.9008 72.1408 16.7949 70.4288 16.7949C68.3194 16.7949 66.5157 18.5152 66.5157 20.5734C66.5157 22.1094 67.6468 23.1539 69.3283 23.1539C71.4377 23.1539 73.2108 21.4029 73.2108 19.4061Z" fill="#1D1D1F"/>
                </svg>
            </div>

            {/* Desktop görünümündeki arama ve kategori bölümü */}
            <div className={'flex-col  xl:flex hidden'}>
                <div className={'w-[620px] items-center h-[48px] rounded-[8px] p-[8px] bg-[#F5F5F7]'}>
                    <div className={'flex h-fit flex-row items-center gap-[16px]'}>
                        <div className={'relative'}>
                            <motion.div
                                className={'flex flex-row items-center py-[4px] pl-[4px] cursor-pointer hover:bg-white/50 rounded-md transition-colors'}
                                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <h6 className={'font1 text-[14px] ml-[8px] font-normal text-[#1D1D1F]'}>
                                    {selectedCategory}
                                </h6>
                                <motion.svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    animate={{ rotate: isCategoryOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <path
                                        d="M8.5293 10.5576L12.0003 14.0436L15.4713 10.5576"
                                        stroke="#1D1D1F"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </motion.svg>
                            </motion.div>

                            <AnimatePresence>
                                {isCategoryOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 24 }}
                                        className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg z-50 min-w-[150px] py-2"
                                    >

                                        {categories.map((category: Category, index: number) => (
                                            <motion.div
                                                key={index}
                                                className={`px-4 py-2 cursor-pointer hover:bg-[#F5F5F7] transition-colors
                                        ${selectedCategory === category ? 'text-[#1D1D1F] font-medium' : 'text-[#87878C]'}`}
                                                onClick={() => {
                                                    setSelectedCategory(category);
                                                    setIsCategoryOpen(false);
                                                }}
                                                whileHover={{ x: 5 }}
                                            >
                                                {category}
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <hr className={'w-[2px] h-[32px] bg-[#ECECEE]'} />

                        <motion.div
                            className={'w-full flex items-center relative'}
                            whileHover={{ scale: 1.01 }}
                        >
                            <input
                                value={searchValue}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}

                                placeholder="Search..."
                                className={'font1 bg-none text-[16px] bg-transparent outline-none w-full focus:outline-none border-none active:outline-none active:border-none ml-[8px] font-normal placeholder-[#B3B3B3] text-[#B3B3B3]'}
                                type="text"
                            />
                            <motion.button
                                className={'absolute cursor-pointer right-2 -z-0 top-[0px]'}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="11.7669" cy="11.7669" r="8.98856" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M18.0186 18.4854L21.5426 22.0002" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                <div className={'p-[16px] flex flex-row gap-[40px] items-center'}>
                    {quickLinks.map((link) => (
                        <motion.h6
                            key={link.title}
                            className={`font1 cursor-pointer ml-[8px] text-[14px] font-normal
                    ${link.active ? 'text-[#1D1D1F]' : 'text-[#87878C]'}`}
                            whileHover={{
                                scale: 1.05,
                                color: '#1D1D1F',
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {link.title}
                        </motion.h6>
                    ))}
                </div>
            </div>

            {/* Right Section with Icons and Buttons */}
            <div className={'flex lg:mt-0 mt-4 gap-4 sm:w-fit w-full items-center lg:flex-row flex-col-reverse h-fit'}>
                {/* Icons */}
                <div className={'flex flex-row md:flex-row gap-[25px] sm:gap-[18px]'}>
                    <motion.div
                        className={'p-[8px] cursor-pointer'}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M3.50083 13.7871V13.5681C3.53295 12.9202 3.7406 12.2925 4.10236 11.7496C4.7045 11.0975 5.1167 10.2983 5.29571 9.43598C5.29571 8.7695 5.29571 8.0935 5.35393 7.42703C5.65469 4.21842 8.82728 2 11.9611 2H12.0387C15.1725 2 18.345 4.21842 18.6555 7.42703C18.7137 8.0935 18.6555 8.7695 18.704 9.43598C18.8854 10.3003 19.2972 11.1019 19.8974 11.7591C20.2618 12.2972 20.4698 12.9227 20.4989 13.5681V13.7776C20.5206 14.648 20.2208 15.4968 19.6548 16.1674C18.907 16.9515 17.8921 17.4393 16.8024 17.5384C13.607 17.8812 10.383 17.8812 7.18762 17.5384C6.09914 17.435 5.08576 16.9479 4.33521 16.1674C3.778 15.4963 3.48224 14.6526 3.50083 13.7871Z"
                                  stroke="#1D1D1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M9.55469 20.8516C10.054 21.4782 10.7871 21.8838 11.592 21.9785C12.3968 22.0732 13.2069 21.8493 13.843 21.3562C14.0387 21.2103 14.2147 21.0408 14.3669 20.8516"
                                stroke="#1D1D1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </motion.div>
                    <motion.div
                        className={'p-[8px] cursor-pointer'}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M11.761 20.8538C9.5904 19.5179 7.57111 17.9456 5.73929 16.1652C4.45144 14.8829 3.47101 13.3198 2.8731 11.5954C1.79714 8.25031 3.05393 4.42083 6.57112 3.28752C8.41961 2.69243 10.4384 3.03255 11.9961 4.20148C13.5543 3.03398 15.5725 2.69398 17.4211 3.28752C20.9383 4.42083 22.2041 8.25031 21.1281 11.5954C20.5302 13.3198 19.5498 14.8829 18.2619 16.1652C16.4301 17.9456 14.4108 19.5179 12.2402 20.8538L12.0051 21L11.761 20.8538Z"
                                  stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </motion.div>
                    <motion.div
                        onClick={() => {navigate('/shop')}}
                        className={'p-[8px] cursor-pointer bg-[#F5F5F7] h-fit rounded-[8px]'}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.5134 21.5003H8.16555C5.09919 21.5003 2.74679 20.3927 3.41498 15.9351L4.19301 9.89387C4.60491 7.66962 6.02367 6.81836 7.26852 6.81836H17.447C18.7102 6.81836 20.0466 7.73369 20.5225 9.89387L21.3006 15.9351C21.8681 19.8893 19.5797 21.5003 16.5134 21.5003Z" stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.6502 6.59873C16.6502 4.21265 14.716 2.27836 12.3299 2.27836V2.27836C11.1809 2.27349 10.0773 2.72652 9.26308 3.53727C8.44889 4.34803 7.9912 5.44971 7.99121 6.59873H7.99121" stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15.296 11.1022H15.2502" stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.46492 11.1022H9.41916" stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </motion.div>
                </div>

                {/* Separator Line */}
                <div className={'h-full hidden lg:flex justify-center items-center'}>
                    <hr className={'ml-[14px] w-[1px] mt-[0px] mr-[24px] h-[24px] bg-[#D2D2D7]'}/>
                </div>

                {/* Sign In/Register Section */}
                <div className={'flex flex-col items-center sm:items-start w-full'}>
                    <div className={'flex navbut flex-col w-full xsm:flex-row gap-[8px] '}>
                        <motion.button
                            className={'px-[16px] sm:w-fit w-full py-[8px] border-[2px] rounded-[8px] border-[#1D1D1F]'}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <h4 className={'font1 select-none font-semibold text-[16px]'}>
                                Sign in
                            </h4>
                        </motion.button>
                        <motion.button
                            className={'px-[16px] sm:w-fit w-full py-[8px] border-[2px] rounded-[8px] border-[#1D1D1F]'}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <h4 className={'font1 select-none font-semibold text-[16px]'}>
                                Register
                            </h4>
                        </motion.button>
                    </div>

                    {/* Ship To Section */}
                    <motion.div
                        className={'pt-[20px] items-center cursor-pointer gap-[10px] flex flex-row pl-[08px]'}
                        whileHover={{ scale: 1.02 }}
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.33301 6.87818C2.33301 3.8116 4.8956 1.33301 7.99531 1.33301C11.1038 1.33301 13.6663 3.8116 13.6663 6.87818C13.6663 8.42347 13.1043 9.85809 12.1793 11.0741C11.1589 12.4154 9.90111 13.584 8.48537 14.5013C8.16135 14.7133 7.86892 14.7293 7.51331 14.5013C6.0895 13.584 4.83173 12.4154 3.82001 11.0741C2.89433 9.85809 2.33301 8.42347 2.33301 6.87818ZM6.12916 7.05084C6.12916 8.07815 6.96745 8.88612 7.9953 8.88612C9.02384 8.88612 9.87019 8.07815 9.87019 7.05084C9.87019 6.03154 9.02384 5.18423 7.9953 5.18423C6.96745 5.18423 6.12916 6.03154 6.12916 7.05084Z" fill="#1D1D1F"/>
                        </svg>
                        <div className={'flex flex-row gap-[4px]'}>
                            <h3 className={'font1 select-none text-[#87878C] font-normal text-[16px]'}>
                                Ship to
                            </h3>
                            <div className={'flex items-center flex-row gap-[4px]'}>
                                <h5 className={'font1 select-none text-[#1D1D1F] font-normal text-[16px]'}>
                                    Address
                                </h5>
                                <motion.svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    animate={{ rotate: isCategoryOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <path d="M8.5293 10.5576L12.0003 14.0436L15.4713 10.5576" stroke="#1D1D1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </motion.svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={backdropVariants}
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-lg overflow-y-auto"
                        >
                            <motion.div
                                className="p-6 space-y-6"
                                variants={itemVariants}
                            >
                                {/* Mobile Search Section */}
                                <motion.div
                                    className="bg-[#F5F5F7] rounded-lg p-3"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <div className="flex flex-col space-y-3">
                                        <motion.div
                                            className="relative"
                                            initial={false}
                                            animate={isCategoryOpen ? "open" : "closed"}
                                        >
                                            <div
                                                className="flex items-center justify-between cursor-pointer p-2 rounded-md hover:bg-white/50 transition-colors"
                                                onClick={() => {setIsCategoryOpen(!isCategoryOpen)}}
                                            >
                                                <span className="font1 text-sm font-medium text-[#1D1D1F]">
                                                    {selectedCategory}
                                                </span>
                                                <motion.div
                                                    variants={{
                                                        open: { rotate: 180 },
                                                        closed: { rotate: 0 }
                                                    }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M8.5293 10.5576L12.0003 14.0436L15.4713 10.5576"
                                                              stroke="#1D1D1F"
                                                              strokeWidth="1.5"
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"/>
                                                    </svg>
                                                </motion.div>
                                            </div>

                                            <AnimatePresence>
                                                {isCategoryOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg overflow-hidden z-50"
                                                    >
                                                        {categories.map((category, index) => (
                                                            <motion.div
                                                                key={category}
                                                                variants={itemVariants}
                                                                className={`p-2 cursor-pointer hover:bg-gray-50 transition-colors
                                                                    ${selectedCategory === category ? 'bg-gray-50' : ''}`}
                                                                onClick={() => {
                                                                    setSelectedCategory(category);
                                                                    setIsCategoryOpen(false);
                                                                }}
                                                                whileHover={{ x: 5 }}
                                                                custom={index}
                                                            >
                                                                {category}
                                                            </motion.div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>

                                        <div className="h-px bg-[#ECECEE] w-full" />

                                        {/* Search Input */}
                                        <div className="relative">
                                            <input
                                                type="text"
                                                value={searchValue}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}

                                                placeholder="Search..."
                                                className="w-full bg-transparent text-sm font-normal placeholder-[#B3B3B3] outline-none p-2"
                                            />
                                            <motion.button
                                                className="absolute right-2 top-1/2 -translate-y-1/2"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                    <circle cx="11.7669" cy="11.7669" r="8.98856" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M18.0186 18.4854L21.5426 22.0002" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Quick Links in Mobile Menu */}
                                <motion.div
                                    className="space-y-4"
                                    variants={itemVariants}
                                >
                                    {quickLinks.map((link, index) => (
                                        <motion.div
                                            key={link.title}
                                            variants={itemVariants}
                                            whileHover={{ x: 10 }}
                                            custom={index}
                                            className={`cursor-pointer p-2 rounded-md transition-colors
                                                ${link.active ? 'text-[#1D1D1F]' : 'text-[#87878C]'}
                                                hover:bg-[#F5F5F7]`}
                                        >
                                            <h6 className="font1 text-sm font-normal">
                                                {link.title}
                                            </h6>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Additional Mobile Menu Items */}
                                <motion.div
                                    className="pt-6 space-y-4 border-t border-[#ECECEE]"
                                    variants={itemVariants}
                                >
                                    {/* Navigation Icons */}
                                    <div className="flex justify-between p-2">
                                        <motion.div
                                            className="p-2 hover:bg-[#F5F5F7] rounded-lg"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.50083 13.7871V13.5681C3.53295 12.9202 3.7406 12.2925 4.10236 11.7496C4.7045 11.0975 5.1167 10.2983 5.29571 9.43598C5.29571 8.7695 5.29571 8.0935 5.35393 7.42703C5.65469 4.21842 8.82728 2 11.9611 2H12.0387C15.1725 2 18.345 4.21842 18.6555 7.42703C18.7137 8.0935 18.6555 8.7695 18.704 9.43598C18.8854 10.3003 19.2972 11.1019 19.8974 11.7591C20.2618 12.2972 20.4698 12.9227 20.4989 13.5681V13.7776C20.5206 14.648 20.2208 15.4968 19.6548 16.1674C18.907 16.9515 17.8921 17.4393 16.8024 17.5384C13.607 17.8812 10.383 17.8812 7.18762 17.5384C6.09914 17.435 5.08576 16.9479 4.33521 16.1674C3.778 15.4963 3.48224 14.6526 3.50083 13.7871Z" stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </motion.div>

                                        <motion.div
                                            className="p-2 hover:bg-[#F5F5F7] rounded-lg"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.761 20.8538C9.5904 19.5179 7.57111 17.9456 5.73929 16.1652C4.45144 14.8829 3.47101 13.3198 2.8731 11.5954C1.79714 8.25031 3.05393 4.42083 6.57112 3.28752C8.41961 2.69243 10.4384 3.03255 11.9961 4.20148C13.5543 3.03398 15.5725 2.69398 17.4211 3.28752C20.9383 4.42083 22.2041 8.25031 21.1281 11.5954C20.5302 13.3198 19.5498 14.8829 18.2619 16.1652C16.4301 17.9456 14.4108 19.5179 12.2402 20.8538L12.0051 21L11.761 20.8538Z" stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </motion.div>

                                        <motion.div
                                            className="p-2 hover:bg-[#F5F5F7] rounded-lg"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M16.5134 21.5003H8.16555C5.09919 21.5003 2.74679 20.3927 3.41498 15.9351L4.19301 9.89387C4.60491 7.66962 6.02367 6.81836 7.26852 6.81836H17.447C18.7102 6.81836 20.0466 7.73369 20.5225 9.89387L21.3006 15.9351C21.8681 19.8893 19.5797 21.5003 16.5134 21.5003Z" stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </motion.div>
                                    </div>

                                    {/* Sign In and Register Buttons */}
                                    <motion.button
                                        className="w-full p-3 bg-[#1D1D1F] text-white rounded-lg font-medium"
                                        whileHover={{ scale: 1.02, backgroundColor: "#2D2D2F" }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Sign In
                                    </motion.button>

                                    <motion.button
                                        className="w-full p-3 border-2 border-[#1D1D1F] rounded-lg font-medium hover:bg-[#F5F5F7]"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Register
                                    </motion.button>

                                    {/* Ship To Section in Mobile */}
                                    <motion.div
                                        className="flex items-center gap-2 p-3 rounded-lg hover:bg-[#F5F5F7] cursor-pointer"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2.33301 6.87818C2.33301 3.8116 4.8956 1.33301 7.99531 1.33301C11.1038 1.33301 13.6663 3.8116 13.6663 6.87818C13.6663 8.42347 13.1043 9.85809 12.1793 11.0741C11.1589 12.4154 9.90111 13.584 8.48537 14.5013C8.16135 14.7133 7.86892 14.7293 7.51331 14.5013C6.0895 13.584 4.83173 12.4154 3.82001 11.0741C2.89433 9.85809 2.33301 8.42347 2.33301 6.87818ZM6.12916 7.05084C6.12916 8.07815 6.96745 8.88612 7.9953 8.88612C9.02384 8.88612 9.87019 8.07815 9.87019 7.05084C9.87019 6.03154 9.02384 5.18423 7.9953 5.18423C6.96745 5.18423 6.12916 6.03154 6.12916 7.05084Z" fill="#1D1D1F"/>
                                        </svg>
                                        <div className="flex items-center justify-between flex-1">
                                            <span className="text-[#87878C]">Ship to</span>
                                            <div className="flex items-center gap-1">
                                                <span className="text-[#1D1D1F]">Address</span>
                                                <motion.svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    animate={{ rotate: isCategoryOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <path d="M8.5293 10.5576L12.0003 14.0436L15.4713 10.5576" stroke="#1D1D1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </motion.svg>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};


export default NavBar;