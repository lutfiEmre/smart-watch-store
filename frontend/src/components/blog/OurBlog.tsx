import blog1 from '../../assets/blog/Image 01.svg'
import blog2 from '../../assets/blog/Image 02.svg'
import blog3 from '../../assets/blog/Image 03.svg'
import blog4 from '../../assets/blog/Image 04.svg'
import blog5 from '../../assets/blog/Image 05.svg'
import blog6 from '../../assets/blog/Image 06.svg'


const OurBlog = () => {
    return (
        <div className={'mt-[48px] min-h-screen w-full gap-[48px] flex-col'}>
            <div className={'flex flex-col w-full justify-center items-center gap-[16px]'}>
                <h4 className={'font-extrabold text-[36px] text-darkblue'}>
                    Our Blog Posts
                </h4>
                <h4 className={'font-normal text-[16px] text-gray'}>
                    Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem. Nullam sodales lorem libero.
                </h4>
            </div>
            <div className={'grid gap-y-[82px] gap-[32px] mt-[48px] md:grid-cols-2 grid-cols-1 xl:grid-cols-3'}>
                <div className={'relative flex justify-center items-center '}>
                    <img className={'w-[416px] h-auto'} src={blog1} alt=""/>
                    <div className={'absolute gap-[12px] bottom-[-60px] bg6 w-[300px] md:w-[80%] flex flex-col justify-start items-center p-[24px] bg-white '}>
                        <h4 className={'font-bold uppercase text-[16px] text-[#1D4ED8]'}>
                            Vehicle
                        </h4>
                        <h5 className={'font-normal text-center text-[14px] text-darkblue'}>
                            One of Saturn’s largest rings may be newer than anyone
                        </h5>
                        <h6 className={'font-normal text-[12px] text-black'}>
                            May 13, 2019 by Silene Cox
                        </h6>
                    </div>
                </div>
                <div className={'relative flex justify-center items-center '}>
                <img className={'w-[416px] h-auto'} src={blog2} alt=""/>
                <div className={'absolute gap-[12px] bottom-[-60px] bg6 w-[300px] md:w-[80%] flex flex-col justify-start items-center p-[24px] bg-white '}>
                    <h4 className={'font-bold uppercase text-[16px] text-[#1D4ED8]'}>
                        Work
                    </h4>
                    <h5 className={'font-normal text-center text-[14px] text-darkblue'}>
                        One of Saturn’s largest rings may be newer than anyone
                    </h5>
                    <h6 className={'font-normal text-[12px] text-black'}>
                        May 13, 2019 by Silene Cox
                    </h6>
                </div>
            </div>
                <div className={'relative flex justify-center items-center '}>
                    <img className={'w-[416px] h-auto'} src={blog3} alt=""/>
                    <div className={'absolute gap-[12px] bottom-[-60px] bg6 w-[300px] md:w-[80%] flex flex-col justify-start items-center p-[24px] bg-white '}>
                        <h4 className={'font-bold uppercase text-[16px] text-[#1D4ED8]'}>
                            Productivity
                        </h4>
                        <h5 className={'font-normal text-center text-[14px] text-darkblue'}>
                            One of Saturn’s largest rings may be newer than anyone
                        </h5>
                        <h6 className={'font-normal text-[12px] text-black'}>
                            May 13, 2019 by Silene Cox
                        </h6>
                    </div>
                </div>
                <div className={'relative flex justify-center items-center '}>
                    <img className={'w-[416px] h-auto'} src={blog4} alt=""/>
                    <div className={'absolute gap-[12px] bottom-[-60px] bg6 w-[300px] md:w-[80%] flex flex-col justify-start items-center p-[24px] bg-white '}>
                        <h4 className={'font-bold uppercase text-[16px] text-[#1D4ED8]'}>
                            Vehicle
                        </h4>
                        <h5 className={'font-normal text-center text-[14px] text-darkblue'}>
                            One of Saturn’s largest rings may be newer than anyone
                        </h5>
                        <h6 className={'font-normal text-[12px] text-black'}>
                            May 13, 2019 by Silene Cox
                        </h6>
                    </div>
                </div>
                <div className={'relative flex justify-center items-center '}>
                    <img className={'w-[416px] h-auto'} src={blog5} alt=""/>
                    <div className={'absolute gap-[12px] bottom-[-60px] bg6 w-[300px] md:w-[80%] flex flex-col justify-start items-center p-[24px] bg-white '}>
                        <h4 className={'font-bold uppercase text-[16px] text-[#1D4ED8]'}>
                          WORK
                        </h4>
                        <h5 className={'font-normal text-center text-[14px] text-darkblue'}>
                            One of Saturn’s largest rings may be newer than anyone
                        </h5>
                        <h6 className={'font-normal text-[12px] text-black'}>
                            May 13, 2019 by Silene Cox
                        </h6>
                    </div>
                </div>
                <div className={'relative flex justify-center items-center '}>
                    <img className={'w-[416px] h-auto'} src={blog6} alt=""/>
                    <div className={'absolute gap-[12px] bottom-[-60px] bg6 w-[300px] md:w-[80%] flex flex-col justify-start items-center p-[24px] bg-white '}>
                        <h4 className={'font-bold uppercase text-[16px] text-[#1D4ED8]'}>
                            Productivity
                        </h4>
                        <h5 className={'font-normal text-center text-[14px] text-darkblue'}>
                            One of Saturn’s largest rings may be newer than anyone
                        </h5>
                        <h6 className={'font-normal text-[12px] text-black'}>
                            May 13, 2019 by Silene Cox
                        </h6>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurBlog;
