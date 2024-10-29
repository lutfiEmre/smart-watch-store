
const MiniTopBar = () => {
    return (
        <div className="w-full flex gap-[32px] select-none justify-center sm:justify-end sm:pr-[99px] items-center h-[32px] bg1">
            <h6 className={'font1 cursor-pointer font-normal text-[#87878C]'}>
                About
            </h6>
            <h6 className={'font1 cursor-pointer font-normal text-[#87878C]'}>
                Partner
            </h6>
            <h6 className={'font1 cursor-pointer font-normal text-[#87878C]'}>
                Promo
            </h6>
        </div>
    );
};

export default MiniTopBar;
