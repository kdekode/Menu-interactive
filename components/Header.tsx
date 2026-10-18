
"use client";

import { Menu } from "./Menu"
import { useState } from "react";

export function Header(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return(

        <>
        
        {isOpen && (
            <Menu />
        )}

        <header className="flex justify-between p-5 z-9">
            <div className="w-1/2">
                @Logo
            </div>
            <div className="flex justify-end w-1/2 gap-5">
                <nav className="w-1/2 flex-justify-end">
                    <ul className="flex justify-end gap-5">
                        <li><a href="">Iniciar session</a></li>
                        <li><a href="">Registrarte</a></li>
                    </ul>
                </nav>

                <button 
                onClick={toggleMenu}
                className="w-1/8 bg-white text-black rounded-lg"
                >
                    {isOpen ? "Cerrar" : "Menu"}
                </button>
            </div>
        </header>

        </>

    )
}