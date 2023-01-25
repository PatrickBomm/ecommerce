import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Navbar} from './components/navbar'
import {Shop} from './pages/shop/shop'
import {Item} from './pages/item/item'
import { Checkout } from './pages/checkout/checkout';
import { ShopContextProvider } from './context/shop-context';


function App() {
      return <div className="App">
        <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />}/>
            <Route path='item/:id' element={<Item />} />
            <Route path='checkout' element={<Checkout />} />
          </Routes>
        </Router>
        </ShopContextProvider>
      </div>;
    
  }

export default App;
