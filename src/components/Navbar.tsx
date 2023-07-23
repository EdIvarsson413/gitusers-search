'use client'

import { useEffect, useState } from 'react'
import LightIcon from '@/components/icons/LightIcon'
import DarkIcon from '@/components/icons/DarkIcon'

const modoInicial = () => {
    if( localStorage.getItem( "theme" ) ) {
        return localStorage.getItem( "theme" ) as "light" | "dark";
    }
    return window.matchMedia( "(prefers-color-scheme: dark)" ).matches ? "dark" : "light";
}

const Navbar = () => {
    const [ modo, setModo] = useState<"light" | "dark">(modoInicial);

    useEffect(() => {
        if( modo === 'dark' ) document.documentElement.classList.add( 'dark' );
        else document.documentElement.classList.remove( 'dark' );
        localStorage.setItem( "theme", modo );
    },[modo])

    const handleTheme = () => modo === 'light' ? setModo( "dark" ) : setModo( "light" );

    return (
        <header className="flex justify-between items-center  mb-12 text-white">
            <h1 className="text-2xl font-semibold dark:text-white text-black">devfinder</h1>
            <button className="flex items-center gap-3 uppercase" onClick={handleTheme}>
                <p className='dark:text-white text-black'>{ modo === 'light' ? 'Oscuro' : 'Claro' }</p>  
                <i>
                    {
                        modo === 'light' ?
                        <DarkIcon width={27} height={27} className='fill-black'/>
                        :
                        <LightIcon width={27} height={27} className='fill-white'/> 
                    }
                </i>
            </button>
        </header> 
    )
}

export default Navbar