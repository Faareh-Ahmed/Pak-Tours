'use client'
import Menu from "@/components/icons/menu";
import { useState } from "react";


export default function Navbar() {

    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="w-full absolute "> {/* Remove the Absolute to Make the Menu working*/}
                <div className=" flex flex-col   md:items-center md:justify-center md:flex-row text-2xl ">
                    <div className=" flex flex-row  font-bold  text-2xl ">
                        <img src="images/Logo2.jpeg" alt='Logo' className=" rounded-full object-cover h-20 w-20" />
                        <button onClick={() => setOpen(!open)} className={`md:hidden focus:outline-none focus:shadow-outline ml-auto p-4 `}>
                            <Menu />
                        </button>
                    </div>
                    <nav className={`  flex-col flex-grow pb-4 md:pb-0 ${open ? 'flex' : 'hidden'} md:flex justify-center items-center md:flex-row text-black list-none `}>
                        <li className=" p-4">Home</li>
                        <li className=" p-4">About</li>
                        <li className=" p-4">Carousel</li>
                        <li className=" p-4">Contact</li>
                    </nav>
                </div>
            </div>


        </>
    );
}