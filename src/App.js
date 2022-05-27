// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Content from "./components/Content/Content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./components/basket/Basket";
import { useState } from "react";
import { pizzaBlock } from "./data/database";
import UnevenSetsFinite from "./components/Slider/Slider.jsx";
// import { useState } from "react";

// export const Appp =( ) => {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//     <h1>{count}</h1>
//     <button onClick={()=> setCount(count + 1)}>
//     click
//     </button>
//     </div>
    
//   )
// }

function App() {
  const [pizzas, setPizzas] = useState (pizzaBlock)
  
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <UnevenSetsFinite />
       {/* <Appp /> */}
        <Routes>
          <Route path="/" element={<Content pizzas={pizzas} setPizzas={setPizzas} />}></Route>
          <Route path="/basket" element={<Basket />}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
