import React from 'react'
import {ImUsers, ImStatsDots, ImTable} from 'react-icons/im'
export default function SideBar() {
    return (
        <div className="w-28 h-screen bg-gray-800 ">
            <h1 className="text-center font-bold text-lg border-b-2">Admin</h1>
            
            <ImUsers className="h-8 w-8 mx-auto my-3"/>
            <ImTable className="h-8 w-8 mx-auto my-3"/>
            <ImStatsDots className="h-8 w-8 mx-auto my-3"/>
        </div>
    )
}
