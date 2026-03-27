import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Home from './pages/Home'
import Favorites from './pages/Favourites'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/Faq'
import Consultation from './pages/Consultation'
import ScrollToTop from './shared/ScrollTop'
import CategoryPage from './pages/Category'


const Routing = () => {
    return (
        <Suspense fallback={<div className="flex justify-center items-center h-screen">Yüklənir...</div>}>
            <BrowserRouter>
            <ScrollToTop />
                <Routes>
                    <Route element={<Home />} path='/' />
                    <Route path='/favourites' element = {<Favorites/>}/>
                    <Route path = "/cart" element = {<Cart/>}/>
                    <Route path='/about' element = {<About/>}/>
                    <Route path='/contact' element = {<Contact/>}/>
                    <Route path = "/faq" element = {<FAQ/>}/>
                    <Route path = "/consultation" element = {<Consultation/>}/>
                    <Route path = "/category" element = {<CategoryPage/>}/>
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

export default Routing