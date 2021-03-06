import React from 'react'
import Navbar from './navbar'

export default function Layout({children}) {
    return (
        <div className="container bg-gray-100 mx-auto w-screen">
            <Navbar/>
            {children}
        </div>
    )
}
