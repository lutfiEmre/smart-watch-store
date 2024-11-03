
import MiniTopBar from "../MiniTopBar.tsx";
import NavBar from "../NavBar.tsx";
import Footer from "../Footer.tsx";
import OurBlog from "./OurBlog.tsx";


const Blog = () => {
    return (
        <div   className={''}>
            <MiniTopBar/>
            <NavBar/>
            <div   className={'flex w-full lg:px-[50px] md:px-[85px] px-[40px] sm:px-[70px] xl:px-[100px] flex-col gap-[112px]  '}>
                <OurBlog/>
                {/*<ReadOurLatest/>*/}
            </div>
            <Footer/>

            </div>
    );
};

export default Blog;
