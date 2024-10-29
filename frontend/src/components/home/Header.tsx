
import { motion } from 'framer-motion';
import homeheader from '../../assets/homeheader.svg';

const Header = () => {
    // Content animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="relative w-full justify-center items-center flex min-h-screen overflow-hidden bg-white">
            {/* Main content container */}
            <motion.div
                className="relative z-10 container  py-12"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="flex w-full lg:gap-[50px] justify-center items-center flex-col-reverse lg:flex-row">
                    {/* Text content section */}
                    <motion.div
                        className=" flex flex-col gap-[24px] w-full  justify-center items-center lg:items-start"
                        variants={itemVariants}
                    >
                        <motion.h4
                            className="text-black xl:text-start text-center text-[56px] w-full font-bold leading-tight"
                            style={{ fontFamily: 'JosefinSans-Bold' }}
                            variants={itemVariants}
                        >
                            Your Source for  <br className={'hidden lg:flex '}/> Stylish Smartwatches
                        </motion.h4>

                        <motion.h6
                            className="text-black max-w-[600px] lg:max-w-full lg:px-0 px-[50px] text-[18px] w-full leading-relaxed"
                            style={{ fontFamily: 'JosefinSans-Regular' }}
                            variants={itemVariants}
                        >
                            We believe that time should be both smart and stylish. Our mission is to bring you
                            the latest innovations in wearable technology, combining cutting-edge features with
                            fashion-forward design
                        </motion.h6>

                        <motion.div
                            className="bg3 px-[25px] lg:px-[13px] ml-1 mt-2 lg:scale-120 scale-[150%] py-[17px] lg:py-[12px] cursor-pointer select-none
                        hover:shadow-lg transition-all duration-300 ease-in-out"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            variants={itemVariants}
                        >
                            <h6 className="font-semibold text-[21px] text-black uppercase">
                                SHOP NOW
                            </h6>
                        </motion.div>
                    </motion.div>

                    {/* Image section with animated shadow */}
                    {/* Image section with animated shadow */}
                    <motion.div className="w-fit h-full flex justify-center items-center relative w-full">
                        {/* Animated shadow overlay */}
                        <motion.div
                            className="absolute w-full flex justify-center items-center lg:-ml-[40px] inset-0 blur-xl -z-10 scale-105" // blur-2xl'den blur-xl'e değişti, scale-105 eklendi
                            animate={{
                                background: [
                                    'rgba(255, 107, 107, 0.5)',     // opaklık 0.3'ten 0.5'e artırıldı
                                    'rgba(78, 205, 196, 0.5)',
                                    'rgba(168, 230, 207, 0.5)',
                                    'rgba(255, 139, 148, 0.5)',
                                    'rgba(255, 107, 107, 0.5)'
                                ]
                            }}
                            transition={{
                                duration: 3,                      // süre 5'ten 3'e düşürüldü
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        <motion.img
                            className="2xl:w-[720px] w-[250px] lg:w-[700px] xl:w-[800px] sm:h-[350px] lg:max-h-[600px] lg:h-auto object-cover relative z-10"
                            src={homeheader}
                            alt="Smartwatch Showcase"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                                ease: "easeOut"
                            }}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Header;