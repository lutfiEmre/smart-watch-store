import mediumsvg from '../../assets/mediumhero.svg'

const MediumHero = () => {
    return (
        <div className={'mt-[112px]  w-full relative h-[800px] lg:h-[900px] sm:h-[700px]'}>
            <div className={'absolute w-full px-[70px] flex flex-col gap-[24px] flex justify-center items-center h-full'}>
                <h4 className={'josefinbold lg:text-[48px] md:text-[40px] text-[30px] sm:text-start text-center sm:text-[36px] xl:text-[56px] text-white'}>
                    Medium length hero
                    <br className={'sm:flex hidden'}/>
                    headline goes here
                </h4>
                <p className={'josefinregular max-w-[768px] text-center text-[18px] text-white'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>
                <div className={'mt-[16px] px-[49.5px] rounded-[15px] py-[13.5px] cursor-pointer select-none w-fit h-fit bg5'}>
                    <p className={'roboto-sbold text-[16px] text-black'}>
                        SHOP NOW
                    </p>
                </div>
            </div>
            <img className={'w-full h-full object-cover'} src={mediumsvg} alt=""/>
        </div>
    );
};

export default MediumHero;
