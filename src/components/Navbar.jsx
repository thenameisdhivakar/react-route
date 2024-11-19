import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import About from '../pages/About'
import Contact from '../pages/Contact'
import Products from '../pages/Products'
import Home from "../pages/Home"

const Navbar = () => {
    return (
        <>
            <div className="flex border-b-2 border-teal-500">
                <div>
                    <p className="text-2xl font-bold">REACT-ROUTER</p>
                </div>
                <div className="space-x-6 text-2xl font-bold  justify-end flex flex-1">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/home" element={<Home/>} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/products" element={<Products />} />
                        </Routes>


                        <Link className="hover:text-teal-500" to='/home'>Home</Link>
                        <Link className="hover:text-teal-500" to='/about'>About</Link>
                        <Link className="hover:text-teal-500" to='/contact'>Contact</Link>
                        <Link className="hover:text-teal-500" to='/products'>Products</Link>
                    </BrowserRouter>
                </div>
            </div>
        </>
    )
}

export default Navbar