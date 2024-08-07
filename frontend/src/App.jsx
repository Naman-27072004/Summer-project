import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/about'
import User from './pages/account'
import Cancel from './pages/cancel'
import Cart from './pages/cart'
import Payment from './pages/checkout'
import Contact from './pages/contact'
import Error from './pages/error'
import Faq from './pages/faq'
import Homepage from './pages/homepage'
import List from './pages/list'
import Login from './pages/login'
import Order from './pages/order'
import Premium_c from './pages/premium_c'
import Premium_s from './pages/premium_s'
import Privacy from './pages/privacy'
import Product from './pages/product'
import Profile from './pages/profile'
import Refund from './pages/refund'
import Return from './pages/return'
import Info_s from './pages/s_p_info'
// import S_signup from './pages/s_signup'
import Shipping from './pages/shipping'
import Signup from './pages/signup'
import Term from './pages/term'
import Wishlist from './pages/wishlist'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



function App() {


  return (
    <BrowserRouter>
      <body className='page-layout'>
        <nav><Header />
          <Navbar /></nav>

        <hr />
        <main className='page-body'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='about' element={<About />} />
            <Route path='account' element={<User />} />
            <Route path='cancel' element={<Cancel />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Payment />} />
            <Route path='contact' element={<Contact />} />
            <Route path='error' element={<Error />} />
            <Route path='faq' element={<Faq />} />
            <Route path='list' element={<List />} />
            <Route path='login' element={<Login />} />
            <Route path='order' element={<Order />} />
            <Route path='premium_s' element={<Premium_s />} />
            <Route path='premium_c' element={<Premium_c />} />
            <Route path='privacy' element={<Privacy />} />
            <Route path='product' element={<Product />} />
            <Route path='profile' element={<Profile />} />
            <Route path='refund' element={<Refund />} />
            <Route path='return' element={<Return />} />
            <Route path='s_p_info' element={<Info_s />} />
            <Route path='shipping' element={<Shipping />} />
            <Route path='signup' element={<Signup />} />
            <Route path='term' element={<Term />} />
            <Route path='wishlist' element={<Wishlist />} />
          </Routes>
        </main>
        <footer><Footer /></footer>


      </body>
    </BrowserRouter>
  )
}

export default App
{/* <Route path='s_signup' element={<S_signup />} /> */}