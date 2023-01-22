import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import SearchedPage from './SearchedPage'
import { Routes , Route, useLocation } from 'react-router-dom'
import Recipe from './Recipe'
import { AnimatePresence } from 'framer-motion'

function AlllPage() {
        const location = useLocation();
        return (
                <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/cuisine/:type' element={<Cuisine/>}/>
                        <Route path='/searched/:type' element={<SearchedPage/>}/>
                        <Route path='/recipe/:type' element={<Recipe/>}/>
                </Routes>
                </AnimatePresence>
        )
} 

export default AlllPage
