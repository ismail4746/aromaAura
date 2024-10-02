import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Page1 from './components/Page1'; // Home
import Page2 from './components/Page2'; // Shop (Product page)
import Page3 from './components/Page3'; // About Us
import Page4 from './components/Page4'; // Services
import Page5 from './components/Page5'; // Blog
import Page6 from './components/Page6';
import Cart from './components/Cart'; // Cart component
import Checkout from './components/Checkout';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Element } from 'react-scroll';
import PlaceOrder from './components/PlaceOrder';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={
            <div>
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
            <Page6 />
            </div>
          } />
          <Route path="/shop" element={<Page5 />} />
          <Route path="/about" element={<Page2 />} />
          <Route path="/services" element={<Page3 />} />
          <Route path="/sale" element={<Page6 />} />
          {/* <Route path="/" element={
            <div>
              <Element name="home">
                <Page1 />
              </Element>
              <Element name="shop">
                <Page5 />
              </Element>
              <Element name="about">
                <Page2 />
              </Element>
              <Element name="services">
                <Page3 />
              </Element>
              <Element name="blog">
                <Page6 />
              </Element>
            </div>
          }/> */}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
