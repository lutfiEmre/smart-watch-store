import highlightsaat from '../../assets/highlightb.svg'

const HighlightB = () => {
    return (
        <div className={'flex flex-col items-center gap-[24px]'}>
            <h4 className={'roboto-bold text-black md:text-[35px] sm:text-[30px] text-center sm:text-start text-[28px] lg:text-[48px]'}>
                Highlight the key benefits of
                <br/>
                using your product or service
            </h4>
            <h6 className={'text-[18px] text-center sm:text-start roboto-medium'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h6>
            <div className={'mt-[80px] w-full justify-between items-center flex flex-col-reverse lg:flex-row gap-[80px]'}>
                <div className={'flex flex-row gap-[32px]'}>
                    <div className={'w-[2px] h-[122px] bg-black'}></div>
                    <div className={'flex flex-col gap-[40px]'}>
                        <div className={'flex flex-col gap-[16px]'}>
                            <h4 className={'roboto-bold text-center lg:text-center xl:text-start leading-[1.2em] text-[24px] text-black'}>
                                Highlight benefit one
                            </h4>
                            <h5 className={'roboto-regular lg:text-start text-center text-[16px] text-black max-w-[584px]'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                                nulla. </h5>
                        </div>
                        <div className={'flex flex-col gap-[16px]'}>
                            <h4 className={'roboto-bold text-center lg:text-center xl:text-start leading-[1.2em] text-[24px] text-black'}>
                                Highlight benefit one
                            </h4>
                            <h5 className={'roboto-regular lg:text-start text-center text-[16px] text-black max-w-[584px]'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                                nulla. </h5>
                        </div>
                        <div className={'flex flex-col gap-[16px]'}>
                            <h4 className={'roboto-bold text-center lg:text-center xl:text-start leading-[1.2em] text-[24px] text-black'}>
                                Highlight benefit one
                            </h4>
                            <h5 className={'roboto-regular lg:text-start text-center text-[16px] text-black max-w-[584px]'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                                nulla. </h5>
                        </div>
                    </div>
                </div>
                <img className={'2xl:w-fit h-[250px] object-cover lg:h-auto w-full lg:w-[400px] xl:w-[400px]'} src={highlightsaat} alt=""/>
            </div>
        </div>
    );
};

export default HighlightB;
