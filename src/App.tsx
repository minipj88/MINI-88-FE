import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import CreditScore from './pages/CreditScore';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import OnBoarding from './pages/OnBoarding';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/allproducts" element={<AllProducts/>} />
        <Route path="/creditscore" element={<CreditScore/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/onboarding" element={<OnBoarding/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
