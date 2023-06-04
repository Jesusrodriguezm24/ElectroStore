import { Outlet } from "react-router-dom";
import './App.css'

function App() {


  return (
    <>
      <h1 style={{textAlign:'center'}}>Electro Store</h1>

      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App
