import { Outlet } from "react-router-dom";
import './App.css'
import Footer from "./components/Footer/Footer";

function App() {


  return (
    <>
      <header>
        <h1 style={{textAlign:'center'}}>Electro Store</h1>
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
