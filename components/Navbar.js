import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link href={"/editors"}   className="navoption">Editors </Link>
            <Link href={"/"}   className="navoption">Home </Link>
            <Link href={"/about"}   className="navoption">About </Link>
            <Link href={"/communitypage"}   className="navoption">Community </Link>
        </div>
    )
}

export default Navbar