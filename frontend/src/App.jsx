
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/about'
import User from './pages/account'
import Cart from './pages/cart'
import Payment from './pages/checkout'
import Contact from './pages/contact'
import Error from './pages/error'
import Faq from './pages/faq'
import Homepage from './pages/homepage'
import Login from './pages/login'
import Privacy from './pages/privacy'
import Product from './pages/product'
import Refund from './pages/refund'
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
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Payment />} />
            <Route path='contact' element={<Contact />} />
            <Route path='error' element={<Error />} />
            <Route path='faq' element={<Faq />} />
            <Route path='login' element={<Login />} />
            <Route path='privacy' element={<Privacy />} />
            <Route path='product' element={<Product />} />
            <Route path ='refund' element={<Refund/>}/>
            <Route path ='shipping' element={<Shipping/>}/>
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
