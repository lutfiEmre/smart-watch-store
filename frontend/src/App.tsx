
import './css/App.css'

import './css/stylized.css'

import {Route, Routes} from "react-router";
import HomePage from "./components/home/HomePage.tsx";
import Blog from "./components/blog/Blog.tsx";
import ShoppingCard from "./components/store/ShoppingCard.tsx";
import {useEffect} from "react";

function App() {


  return (
      <>
          <Routes>

              <Route path={"/"} element={<HomePage/>}/>
              <Route path={"/blog"} element={<Blog/>}/>
              <Route path={"/shop"} element={<ShoppingCard/>}/>

          </Routes>

      </>
          )
          }

          export default App
