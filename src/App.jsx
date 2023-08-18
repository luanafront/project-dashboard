import {TopBar} from "./components/templates/topBar/TopBar.jsx";
import './App.css'
import {News} from "./components/pages/News.jsx";
import {mockInfo} from "./mock.js";
import {AsideBar} from "./components/molecules/AsideBar.jsx";

export const App = () => {

  return (
    <div className='app'>
      <AsideBar/>
      <section className='app__content'>
        <TopBar/>
        <News infos={mockInfo}/>
      </section>
    </div>
  )
}
