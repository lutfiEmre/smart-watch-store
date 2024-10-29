
import './css/App.css'
import MiniTopBar from "./components/MiniTopBar.tsx";
import './css/stylized.css'
import NavBar from "./components/NavBar.tsx";
import Header from "./components/home/Header.tsx";
import WatchesList from "./components/home/WatchesList.tsx";

function App() {


  return (
      <>
          <MiniTopBar/>
          <NavBar/>
          <div className={'w-full xl:px-[100px] lg:px-[100px]'}>
              <Header/>
              <WatchesList/>
          </div>
          <div className={'w-full h-[500px]'}></div>
      </>
  )
}

export default App
