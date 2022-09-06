import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllProductsPage from './pages/AllProductsPage';
import CreditScorePage from './pages/CreditScorePage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import OnBoardingPage from './pages/OnBoardingPage';
import NotFoundPage from './pages/NotFoundPage';
import TopNavigation from './components/topnavigation/TopNavigation';
import { useAppDispatch, useAppSelector } from './store/store';
import { useEffect } from 'react';
import { getUser, UserInfo, useSigninMutation } from './store/slices/authSlice';

function App() {
  const user = useAppSelector(state => state.auth)
  const [_,data] = useSigninMutation();
  const dispatch = useAppDispatch();


  
  
  useEffect(() => {
    if(!localStorage.getItem('user')) return;
    const userInfo:UserInfo["userData"] = JSON.parse(localStorage.getItem('user')!)
    dispatch(getUser(userInfo))
 
  } ,[data])

  


  if(!user.userData.email) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnBoardingPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/signin" element={<SigninPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>  
    )
  } else {
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
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
