'use client'

import { useEffect, useState } from 'react'
import LightIcon from '@/components/icons/LightIcon'
import DarkIcon from '@/components/icons/DarkIcon'
import { error } from 'console'

// Configuración para traer el modo oscuro del sistema
const modoInicial = () => {
    if( typeof window !== "undefined" ) {
        if( localStorage.getItem( "theme" ) ) {
            return localStorage.getItem( "theme" ) as "light" | "dark";
        }
        return window.matchMedia( "(prefers-color-scheme: dark)" ).matches ? "dark" : "light";
    }
    return "light"
}

const Navbar = () => {
    // Se carga el tema en un string
    const [ modo, setModo] = useState<"light" | "dark">(modoInicial);
    const [ advertencia, setAdvertencia ] = useState<boolean>(false);

    // Se actualiza constantemente el tema con la varibale de localStorage y el modo de clases de Tailwinds
    useEffect(() => {
        if( modo === 'dark' ) document.documentElement.classList.add( 'dark' );
        else document.documentElement.classList.remove( 'dark' );
        localStorage.setItem( "theme", modo );
    },[modo])

    const handleTheme = () => modo === 'light' ? setModo( "dark" ) : setModo( "light" );

    const aviso = () => { setAdvertencia( true ); setTimeout(() => { setAdvertencia( false ) }, 1500 ); }

    return (
        <>
            <header className="flex justify-between items-center mb-3 text-white">
                <h1 className="text-2xl font-semibold dark:text-white text-black">devfinder</h1>
                <button className="flex items-center gap-3 uppercase" onClick={aviso}>
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

            <section className={`mb-12 text-center font-semibold rounded-xl ${advertencia && 'p-2'} 
                                bg-gradient-to-br from-orange-200 to-yellow-400`}>
                { advertencia && 'La opción de tema aún no funciona' }
            </section>
        </>
    )
}

export default Navbar