import { Outlet } from "react-router-dom";
import './App.css'
import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import Cart from "./components/common/Cart/Cart";
import { useState } from "react";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleVisibilityCart = () => {
    setIsCartVisible(!isCartVisible);

};

  return (
    <section className="app_container">
      <header>
        <Header updateCarVisible={toggleVisibilityCart} />

      </header>
      <main className="main_container">

        <Outlet/>
        <Cart isVisible={isCartVisible}/>
        
      </main>

      <footer>
        <Footer/>
      </footer>

    </section>
  )
}

export default App
