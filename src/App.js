import Card from "./Component/Card";
import Header from "./Component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartItem from "./Component/CartItem";
function App() {
  return ( 
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="CartItem" element={<CartItem/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;

