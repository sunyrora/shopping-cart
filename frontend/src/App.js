import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Screens
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';

//Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar setSideToggle={()=>setSideToggle(!sideToggle)} />
      <SideDrawer show={sideToggle} setSideToggle={()=>setSideToggle(!sideToggle)} />
      <Backdrop show={sideToggle} setSideToggle={()=>setSideToggle(!sideToggle)} />
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />}/>
          <Route exact path="/product/:id" element={<ProductScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
        </Routes>
      </main>
    </Router>
  ); 
}

export default App;
