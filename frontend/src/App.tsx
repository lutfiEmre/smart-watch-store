
import './css/App.css'
import MiniTopBar from "./components/MiniTopBar.tsx";
import './css/stylized.css'
import NavBar from "./components/NavBar.tsx";
import Header from "./components/home/Header.tsx";
import WatchesList from "./components/home/WatchesList.tsx";
import FeatureOne from "./components/home/FeatureOne.tsx";
import HighlightB from "./components/home/HighlightBenefit.tsx";
import MediumHero from "./components/home/MediumHero.tsx";
import InviteVisitor from "./components/home/InviteVisitor.tsx";
import GalleryWatch from "./components/home/GalleryWatch.tsx";
import Footer from "./components/Footer.tsx";

function App() {


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
          )
          }

          export default App
