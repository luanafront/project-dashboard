import {TopBar} from "./components/templates/TopBar.jsx";
import './App.css'
import {News} from "./components/pages/News.jsx";
import {mockInfo} from "./mock.js";
import {AsideBar} from "./components/molecules/AsideBar.jsx";
import {Route, Routes} from "react-router-dom";
import {NewsDetail} from "./components/pages/NewsDetail.jsx";

export const App = () => {

  return (
    <div className='app'>
      <AsideBar/>
      <section className='app__content'>
        <TopBar/>
        <Routes>
          <Route path='/' element={<News infos={mockInfo}/>}/>
          <Route path='/:id' element={<NewsDetail/>}/>
        </Routes>
      </section>
    </div>
  )
}
