import React from 'react'
import Header from '../components/Header.jsx'
import Routers from '../routes/Routers.jsx'

const Layout=()=>{
    return (
        <div className='h-screen flex flex-col justify-between bg-sky-200'>
            <Header/>
            <Routers/>
        </div>
    )
}

export default Layout