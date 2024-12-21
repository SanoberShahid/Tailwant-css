"use client";
import React,{ useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";//humburger icons
import { HiX } from "react-icons/hi";//close icons

const Header =() => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen) ;//toggleMenu open/close
};
const  CloseMenu =()=>{
    setIsMenuOpen(false);//close the menu
};
return(
    <header className="bg-blue-500 text-white py-5 flex justify-between items-center px-10 relative z-10">
        <h1 className="text-2xl font-bold">Women-Watches</h1>

          {/* desktop navbar */}
          <nav className="flex flex-row items-center gap-3 text-white font-bold">
            <Link href="/"onClick={CloseMenu}>Home</Link>
            <Link href="/about"onClick={CloseMenu}>About</Link>
            <Link href="/watches"onClick={CloseMenu}>Watches</Link>
            <Link href="/contact"onClick={CloseMenu}>Contact</Link>
            < FaShoppingCart className="text-white text-xl" />
        </nav>



<div className="md:hidden flex items-center">
    <HiMenuAlt3
    className="text-white text-3xl cursor-pointer"
    onClick={toggleMenu}//toggle menu onclick
    />
    </div>
    {/* mobile menu */}
    <div className={`${
    isMenuOpen ? 'block' : 'hidden'
        } absolute top-0 left-0 w-full bg-blue-500 md:hidden z-20`} 
        >
            {/* close button */}
            <div className="flex justify-end">
                <HiX
                 className="text-white text-3xl cursor-pointer"
                 onClick={toggleMenu}//close menu when click
                />

            </div>
           
        <nav className="flex flex-row items-center gap-3 text-white font-bold">
            <Link href="/"onClick={CloseMenu}>Home</Link>
            <Link href="/about"onClick={CloseMenu}>About</Link>
            <Link href="/watches"onClick={CloseMenu}>Watches</Link>
            <Link href="/contact"onClick={CloseMenu}>Contact</Link>
            < FaShoppingCart className="text-white text-xl" />
        </nav>

    </div>



    </header>
);

};
export default Header;