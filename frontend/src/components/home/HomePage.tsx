import React from 'react';
import MiniTopBar from "../MiniTopBar.tsx";
import NavBar from "../NavBar.tsx";
import Header from "./Header.tsx";
import WatchesList from "./WatchesList.tsx";
import FeatureOne from "./FeatureOne.tsx";
import HighlightB from "./HighlightBenefit.tsx";
import MediumHero from "./MediumHero.tsx";
import InviteVisitor from "./InviteVisitor.tsx";
import GalleryWatch from "./GalleryWatch.tsx";
import Footer from "../Footer.tsx";

const HomePage = () => {
    return (
        <>
            <MiniTopBar/>
            <NavBar/>
            <div className={'w-full h-full'}>
                <div
                    className={'flex w-full lg:px-[50px] md:px-[85px] px-[40px] sm:px-[70px] xl:px-[100px] flex-col gap-[112px]'}>
                    <Header/>
                    <WatchesList/>
                    <FeatureOne/>
                    <HighlightB/>
                </div>
                <MediumHero/>
                <div
                    className={'flex w-full lg:px-[50px] md:px-[85px] px-[40px] sm:px-[70px] xl:px-[100px] flex-col gap-[112px]'}>
                    <InviteVisitor/>
                    <GalleryWatch/>
                </div>

            </div>
            <Footer/>
        </>
    );
};

export default HomePage;
