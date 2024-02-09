import React from 'react'
import Login from "../components/Login"
import Signup from '../components/Signup'
import Generator from '../components/Generator'
import {Routes,Route} from 'react-router-dom'


const Routers=()=>{
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Signup/>}/>
            <Route path='/home' element={<Generator/>}/>
        </Routes>
    )
}
export default Routers
