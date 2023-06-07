import { Outlet } from "react-router-dom";
import './App.css'
import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";

function App() {


  return (
    <section className="app_container">
      <header>
        <Header/>
      </header>
      <main className="main_container">
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>

    </section>
  )
}

export default App
