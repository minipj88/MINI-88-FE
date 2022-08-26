import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllProductsPage from './pages/AllProductsPage';
import CreditScorePage from './pages/CreditScorePage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import OnBoardingPage from './pages/OnBoardingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/allproducts" element={<AllProductsPage/>} />
        <Route path="/creditscore" element={<CreditScorePage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/signin" element={<SigninPage/>} />
        <Route path="/onboarding" element={<OnBoardingPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
