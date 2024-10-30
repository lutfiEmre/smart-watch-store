

const InviteVisitor = () => {
    return (
        <div className={"mt-[112px]  w-full px-[50px] justify-center items-center flex flex-col gap-[24px]"}>
            <h4 className={'roboto-bold text-center  text-[28px] sm:text-[32px] md:text-[40px] xl:text-[60px]  lg:text-[48px] text-black'}>
                Call to action that invites visitor to
                <br/>
                try the product for free
            </h4>
            <h6 className={'max-w-[768px] roboto-regular xl:text-[25px] lg:text-[18px] text-black text-center'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </h6>
            <div className={'mt-[16px]  flex flex-col sm:w-fit w-full sm:flex-row gap-[16px]'}>
                <input placeholder={'Enter your email'} className={'outline-none w-full sm:w-[357px] roboto-regular placeholder-[#505050] bg-white p-[12px] border-[#000000] border-[1px] active:outline-none'} type="text"/>
                <div className={'px-[24px] cursor-pointer py-[12px] bg4 w-full flex justify-center items-center sm:w-fit h-full border-[1px] border-black'}>
                    <p className={'roboto-regular select-none text-[16px] text-white'}>
                        Try it for free
                    </p>
                </div>
            </div>
            <p className={'roboto-regular text-[12px] text-center'}>
                By clicking Sign Up you're confirming that you agree with our Terms and Conditions.
            </p>
        </div>
    );
};

export default InviteVisitor;
