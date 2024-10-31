
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
import {Route, Routes} from "react-router";
import HomePage from "./components/home/HomePage.tsx";
import Blog from "./components/blog/Blog.tsx";

function App() {


  return (
      <>
          <Routes>

              <Route path={"/"} element={<HomePage/>}/>
              <Route path={"/blog"} element={<Blog/>}/>

          </Routes>

      </>
          )
          }

          export default App
