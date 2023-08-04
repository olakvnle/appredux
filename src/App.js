import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from "./Pages/cart";

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/cart" element = {<Cart/>}/>
    </Routes>
  );
}
export default App;
