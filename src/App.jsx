import { Outlet } from "react-router-dom";
import './App.css'
import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";

function App() {


  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>

    </>
  )
}

export default App
