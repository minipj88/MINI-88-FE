import {useState} from 'react'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import AllProducts from './pages/AllProducts'
import Cart from './pages/Cart'
import CreditScore from './pages/CreditScore'
import Home from './pages/Home'
import OnBoarding from './pages/OnBoarding'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

function App() {

  const [userLoginState,setUserLoginState] = useState(false)
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
    {/* {userLoginState && <Route element={<Navigate replace={<OnBoarding/>} />}} */}
   </Routes>
   </BrowserRouter>
  )
}

export default App
