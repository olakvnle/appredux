import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from "./Pages/cart";
import Appp from './Components/Appp';
import Arrow from './Components/Arrow';

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/cart" element = {<Cart/>}/>
    </Routes>
    <Appp/>
    <Arrow/>
    </>

    
  );
}
export default App;
