import gallerywatch1 from  '../../assets/gallerywatch1.svg'
import gallerywatch2 from  '../../assets/gallerywatch2.svg'
import gallerywatch3 from  '../../assets/gallerywatch3.svg'

const GalleryWatch = () => {
    return (
        <div className={'flex flex-col mt-[112px] gap-[80px]'}>
            <div className={'flex flex-col gap-[24px]'}>
                <h4 className={'roboto-bold   text-[28px] sm:text-[32px] md:text-[40px] xl:text-[60px]  lg:text-[48px] text-black'}>
                    Smart Watch [gallery]
                </h4>
                <h6 className={'max-w-[768px] roboto-regular text-[18px] text-black '}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h6>
            </div>
            <div className="w-full container  p-4">
                <div className="grid grid-cols-6 w-full gap-[32px] ">
                    {/* Sol büyük saat */}
                    <div className="col-span-2 w-full row-span-2">
                        <div className="relative w-full h-full">
                            <img
                                src={gallerywatch1}
                                alt="Watch 1"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>


                    <div className="col-span-4 w-full row-span-1">
                        <div className="relative w-full h-full">
                            <img
                                src={gallerywatch3}
                                alt="Watch 2"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>


                    <div className="col-span-2 w-full row-span-2">
                        <div className="relative w-full h-full">
                            <img
                                src={gallerywatch2}
                                alt="Watch 3"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>


                    <div className="col-span-2 w-full row-span-1">
                        <div className="relative w-full h-full">
                            <img
                                src={gallerywatch1}
                                alt="Watch 4"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>


                    <div className="col-span-2 w-full row-span-1">
                        <div className="relative w-full h-full">
                            <img
                                src={gallerywatch2}
                                alt="Watch 5"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>


                    <div className="col-span-2 w-full row-span-1">
                        <div className="relative w-full h-full">
                            <img
                                src={gallerywatch3}
                                alt="Watch 6"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryWatch;
