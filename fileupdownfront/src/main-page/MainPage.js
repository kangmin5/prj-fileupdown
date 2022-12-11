import MainView from "../right-page/MainView";
import Sidebar from "../left-page/Sidebar";
import Intro from "../right-page/Intro";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Manual from "../right-page/Manual";
import FlieList from "../right-page/FlieList";


const MainPage = () => {
  return (
    <BrowserRouter>
      <div className="mainwrap">
          <Sidebar />
          <MainView >
          <Routes>
                <Route path='/' element={<Intro/>} />
                <Route path='/intro' element={<Intro/>} />
                <Route path='/manual' element={<Manual/>} />
                <Route path='/filelist' element={<FlieList/>} />
          </Routes>
          </MainView>
      </div>
    </BrowserRouter>
          
  )
}

export default MainPage;