import React from 'react'
import SideBar from '../../components/sidebar'
import Link from 'next/link'

export default function Layout({children}) {
    return (
        <nav className="layout w-full h-16 bg-gray-300">
            <Logo />
            <div className="flex">
                <SideBar />
                {children}
            </div>
        </nav>
    )
}

function Logo(){
    return (
        <Link href="/">
            <a>
                <img src="./logo.png" alt="logo" className="h-16 p-1 ml-1 "/>
            </a>
        </Link>
    )
}