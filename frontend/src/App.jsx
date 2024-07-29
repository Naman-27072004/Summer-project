
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import About from './pages/about'
import User from './pages/account'
import Cart from './pages/cart'
import Payment from './pages/checkout'
import Error from './pages/error'
import Homepage from './pages/homepage'
import Login from './pages/login'
import Product from './pages/product'
import Signup from './pages/signup'

function App() {


  return (
    <>
     <BrowserRouter>
        <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='about' element={<About/>} />
        <Route path='account' element={<User/>} />
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<Payment/>}/>
        <Route path='error' element={<Error/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='signup' element={<Signup/>}/>

        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
