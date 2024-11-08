import MiniTopBar from "../MiniTopBar.tsx";
import NavBar from "../NavBar.tsx";
import Footer from "../Footer.tsx";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api, { Product } from '../../services/api.ts';
import useCartStore from "../../helpers/useCartStore.ts";

interface Watch extends Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    code: string;
    height: string;
    color: string;
    composition: string;
}

const WatchView = () => {
    const {

        addItem,
    } = useCartStore();
    const { id } = useParams();
    const navigate = useNavigate();
    const [watch, setWatch] = useState<Watch | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [select, setSelect] = useState<{
        color: number;
        size: number;
    }>({
        color: 1,
        size: 1
    });

    useEffect(() => {
        const fetchWatch = async () => {
            try {
                setIsLoading(true);
                const watchId = id ? parseInt(id.replace(':', '')) : null;

                if (!watchId) {
                    throw new Error('Invalid watch ID');
                }

                const watchData = await api.getProduct(watchId);
                setWatch(watchData);
            } catch (error) {
                console.error('Error fetching watch:', error);
                setError('Failed to load watch details');
            } finally {
                setIsLoading(false);
            }
        };

        fetchWatch();
    }, [id]);

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error || !watch) {
        return <div className="flex justify-center items-center h-screen">Error: {error || 'Watch not found'}</div>;
    }
    const handleAddToCart = async (watch: Product) => {
        await addItem(watch.id);
    };
    const handleClose = () => {
        navigate(-1);
    };

    return (
        <div className="">
            <MiniTopBar/>
            <NavBar/>
            <div className="flex w-full lg:px-[50px] md:px-[85px] px-[40px] sm:px-[70px] xl:px-[100px] flex-col gap-[112px]">
                <div className="mt-[174px] px-[85px] flex flex-col">
                    <div className="w-full flex-row gap-[10px] flex justify-end items-center">
                        <h6 className="worksansregular text-[20px] text-darkblue cursor-pointer"
                            onClick={handleClose}>
                            Close
                        </h6>
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className="cursor-pointer" onClick={handleClose}>
                            <g clipPath="url(#clip0_4030_1237)">
                                <path d="M17.0004 4.0752L3.40039 17.6752M17.0004 17.6752L3.40039 4.0752"
                                      stroke="#1F2937" strokeWidth="1.275"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_4030_1237">
                                    <rect width="13.6" height="13.6" fill="white"
                                          transform="translate(3.40039 4.0752)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="grid grid-cols-2 gap-[40px]">
                        <div className="flex flex-col gap-[20px]">
                            <img className="w-[516px] h-auto object-cover" src={watch.image} alt={watch.name}/>
                            <div className="flex flex-row gap-[20px]">
                                <img className="w-[33%] h-[151px] object-cover" src={watch.image} alt={watch.name}/>
                                <img className="w-[33%] h-[151px] object-cover" src={watch.image} alt={watch.name}/>
                                <img className="w-[33%] h-[151px] object-cover" src={watch.image} alt={watch.name}/>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h6 className="worksansregular text-[17.5px] text-gray">
                                {watch.code}
                            </h6>
                            <h4 className="worksanssbold leading-8 text-[30px] text-darkblue">
                                {watch.name}
                            </h4>
                            <h3 className="worksansmedium mt-[10px] text-[24px] text-gray">
                                ${watch.price.toLocaleString()}
                            </h3>

                            {/* Rating section */}
                            <div className="flex mt-[40px] items-center flex-row gap-[20.4px]">
                                <h6 className="worksansregular text-[22.95px] text-gray">
                                    4.5/5
                                </h6>
                                <div className="flex gap-[13px] flex-row">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i}>
                                            <svg width="24" height="23" viewBox="0 0 24 23" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.4968 22.4855C18.3098 22.4862 18.1255 22.4421 17.9591 22.3569L11.9985 19.2363L6.03788 22.3569C5.84433 22.4587 5.6261 22.5041 5.40802 22.488C5.18993 22.472 4.98072 22.395 4.80418 22.266C4.62765 22.1369 4.49085 21.9609 4.40936 21.758C4.32787 21.5551 4.30495 21.3333 4.34319 21.118L5.51194 14.538L0.696695 9.86297C0.546462 9.71305 0.439888 9.52505 0.388412 9.31914C0.336935 9.11324 0.3425 8.8972 0.404508 8.69422C0.472249 8.4865 0.596856 8.30193 0.764191 8.16145C0.931525 8.02097 1.13489 7.93021 1.3512 7.89947L8.01307 6.92941L10.9466 0.933718C11.0423 0.736116 11.1918 0.569468 11.3778 0.452863C11.5638 0.336259 11.7789 0.274414 11.9985 0.274414C12.2181 0.274414 12.4332 0.336259 12.6192 0.452863C12.8053 0.569468 12.9547 0.736116 13.0504 0.933718L16.019 6.91772L22.6809 7.88778C22.8972 7.91853 23.1006 8.00929 23.2679 8.14977C23.4352 8.29024 23.5598 8.47481 23.6276 8.68253C23.6896 8.88551 23.6951 9.10155 23.6437 9.30745C23.5922 9.51336 23.4856 9.70136 23.3354 9.85128L18.5201 14.5263L19.6889 21.1063C19.7306 21.3255 19.7088 21.5519 19.6259 21.759C19.5431 21.9661 19.4027 22.1452 19.2214 22.2751C19.0097 22.4234 18.7549 22.4974 18.4968 22.4855Z"
                                                      fill="#1F2937"/>
                                            </svg>
                                        </div>
                                    ))}
                                    {[...Array(1)].map((_, i) => (
                                        <div key={i}>
                                            <svg width="24" height="23" viewBox="0 0 24 23" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.697 21.8487L18.6811 21.8479L18.6651 21.848C18.5809 21.8483 18.4979 21.8286 18.4228 21.7906C18.4221 21.7902 18.4214 21.7899 18.4207 21.7895L12.4651 18.6716L12.1694 18.5168L11.8737 18.6716L5.9131 21.7921L5.91208 21.7927C5.82409 21.8389 5.7249 21.8596 5.62578 21.8523C5.52664 21.845 5.43155 21.81 5.3513 21.7513C5.27106 21.6927 5.20889 21.6127 5.17184 21.5204L4.58026 21.758L5.17184 21.5204C5.1348 21.4282 5.12438 21.3274 5.14177 21.2295L5.14177 21.2295L6.31052 14.6495L6.3697 14.3163L6.12691 14.0806L1.3154 9.4092C1.24843 9.34147 1.20089 9.25697 1.17778 9.16453C1.15486 9.07287 1.15681 8.97679 1.18338 8.8862C1.21457 8.7941 1.27045 8.71228 1.34498 8.64971C1.42104 8.58586 1.51348 8.5446 1.6118 8.53063L1.61395 8.53032L8.27583 7.56025L8.60874 7.51178L8.7566 7.20958L11.6902 1.2139L11.6913 1.2116C11.7348 1.12178 11.8027 1.04603 11.8873 0.993027C11.9718 0.940026 12.0696 0.911914 12.1694 0.911914C12.2692 0.911914 12.367 0.940025 12.4515 0.993028C12.5361 1.04603 12.604 1.12178 12.6475 1.2116L12.6475 1.21161L12.6502 1.21703L15.6188 7.20103L15.7673 7.50041L16.098 7.54857L22.7599 8.51863L22.7621 8.51894C22.8604 8.53291 22.9528 8.57417 23.0289 8.63802L23.4388 8.14977L23.0289 8.63803C23.1034 8.70059 23.1593 8.7824 23.1905 8.87451C23.2171 8.9651 23.219 9.06118 23.1961 9.15284C23.173 9.24528 23.1255 9.32977 23.0585 9.3975L18.247 14.0689L18.0042 14.3046L18.0634 14.6378L19.2321 21.2178L19.2321 21.2178L19.2335 21.2256C19.2525 21.3252 19.2426 21.4281 19.2049 21.5223L19.7968 21.759L19.2049 21.5223C19.1677 21.6154 19.1048 21.696 19.0237 21.7549C18.928 21.8211 18.8133 21.854 18.697 21.8487Z"
                                                      stroke="#1F2937" strokeWidth="1.275"/>
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                                <h6 className="worksansregular underline cursor-pointer text-[17px] text-gray">
                                    See all 18 reviews
                                </h6>
                            </div>

                            {/* Color selection */}
                            <div className="mt-[40px] flex flex-col gap-[20px]">
                                <h5 className="worksansmedium text-gray text-[20px]">
                                    Color
                                </h5>
                                <div className="flex flex-row gap-[15px]">
                                    {[
                                        { id: 1, color: '#DD8419' },
                                        { id: 2, color: '#CDEF44' },
                                        { id: 3, color: '#0BD9F5' },
                                        { id: 4, color: '#9C167B' }
                                    ].map((colorOption) => (
                                        <div
                                            key={colorOption.id}
                                            onClick={() => setSelect({ ...select, color: colorOption.id })}
                                            className={`${select.color === colorOption.id ? "p-[5px] border-[1.5px] border-[#4B5563]" : "p-[5px]"} cursor-pointer`}
                                        >
                                            <div
                                                className="w-[40px] h-[40px]"
                                                style={{ backgroundColor: colorOption.color }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Size selection */}
                            <div className="mt-[40px] flex flex-col gap-[20px]">
                                <h5 className="worksansmedium text-gray text-[20px]">
                                    Size
                                </h5>
                                <div className="flex flex-row gap-[15px]">
                                    <div
                                        onClick={() => setSelect({ ...select, size: 1 })}
                                        className={`border-[1.5px] min-w-[247px] flex flex-col ${select.size === 2 ? "border-opacity-10" : ""} gap-[10px] cursor-pointer border-darkblue p-[20px]`}
                                    >
                                        <h6 className="worksansmedium text-darkblue text-[20px]">
                                            Small
                                        </h6>
                                        <h6 className="worksansregular text-gray text-[15px]">
                                            {watch.height}
                                        </h6>
                                    </div>
                                    <div
                                        onClick={() => setSelect({ ...select, size: 2 })}
                                        className={`border-[1.5px] min-w-[247px] flex flex-col ${select.size === 1 ? "border-opacity-10" : ""} gap-[10px] cursor-pointer border-darkblue p-[20px]`}
                                    >
                                        <h6 className="worksansmedium text-darkblue text-[20px]">
                                            Medium
                                        </h6>
                                        <h6 className="worksansregular text-gray text-[15px]">
                                            {parseInt(watch.height) + 5}mm
                                        </h6>
                                    </div>
                                </div>
                                <h6 className="worksansregular text-[18px] underline text-gray cursor-pointer">
                                    Find the perfect size?
                                </h6>
                            </div>

                            {/* Additional watch details */}
                            <div className="mt-[20px] flex flex-col gap-[15px]">
                                <div className="flex flex-row gap-[10px]">
                                    <span className="worksansregular text-[15px] text-gray">Category:</span>
                                    <span className="worksansmedium text-[15px] text-darkblue">{watch.category}</span>
                                </div>
                                <div className="flex flex-row gap-[10px]">
                                    <span className="worksansregular text-[15px] text-gray">Material:</span>
                                    <span className="worksansmedium text-[15px] text-darkblue">{watch.composition}</span>
                                </div>
                            </div>

                            {/* Action buttons */}
                            <div className="mt-[40px] max-h-[516px] flex flex-col gap-[20px]">
                                <button
                                    onClick={() => {
                                        // Add to bag logic here
                                        handleAddToCart(watch)
                                    }}
                                    className="w-full bg2 p-[20px] flex justify-center items-center hover:opacity-90 transition-opacity"
                                >
                                    <p className="worksansmedium text-[20px] text-darkblue">
                                        Add to Bag
                                    </p>
                                </button>

                                <button
                                    onClick={() => {
                                        // Add to wishlist logic here
                                        console.log('Adding to wishlist:', {
                                            watch,
                                            selectedColor: select.color,
                                            selectedSize: select.size
                                        });
                                    }}
                                    className="w-full border-[1.5px] border-[#1F2937] p-[20px] flex justify-center items-center hover:bg-gray-50 transition-colors"
                                >
                                    <p className="worksansmedium text-[20px] text-darkblue">
                                        Add to Wishlist
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default WatchView;