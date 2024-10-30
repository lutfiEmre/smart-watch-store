import featureimg from '../../assets/clocks/featureone.svg'

const FeatureOne = () => {
    return (
        <div className={' w-full justify-center items-center flex flex-col lg:flex-row gap-[80px]'}>
            <img className={'2xl:w-fit w-full h-[200px] object-cover lg:h-auto xl:w-[500px] lg:w-[400px]'} src={featureimg} alt=""/>
            <div className={'flex flex-col justify-center items-center lg:items-start lg:justify-start gap-[16px]'}>
                <h6 className={'roboto-sbold lg:text-start text-center text-black text-[16px]'}>
                    Feature one
                </h6>
                <h4 className={'roboto-bold text-black md:text-[35px] sm:text-[30px] text-center sm:text-start text-[28px] lg:text-[48px]'}>
                    Highlight the key benefits of
                    <br/>
                    using your product or service
                </h4>
                <h5 className={'roboto-regular lg:text-start text-center text-[18px] text-black max-w-[616px]'}>
                    Highlight Unique Selling Proposition (USP) with a short summary of the key feature and how it
                    benefits customers.
                </h5>
                <div className={'mt-[16px] select-none cursor-pointer w-fit h-fit bg4 p-[12px]'}>
                    <h6 className={'roboto-regular text-black text-[16px]'}>
                        Learn more
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default FeatureOne;
