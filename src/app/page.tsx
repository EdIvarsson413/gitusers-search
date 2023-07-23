"use client"
import CardUser from '@/components/CardUser'
import SearchForm from '@/components/SearchForm'
import { useState } from 'react'
import type { User } from '@/ts/user'

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | ''>('');

  const getUser = async ( username : string ) => {
    const url = `https://api.github.com/users/${username}`
    
    // Consultando a la API
    const res = await fetch(url);

    // Si no se encuentra el usuario
    if( !res.ok ) {
      setUser(null);
      setError('Usuario no encontrado')
      return;
    }

    const data = await res.json();
    setUser( data );
    setError('');
  }
  
  return (
    <div className='max-h-screen'>
      <SearchForm getUser={getUser}/>
      {
        // Si el usuario exite
        user && <CardUser user={user}/>
      }
      {
        // Si no existe
        error !== '' && (
          <p className='text-center text-white text-2xl rounded-xl font-bold py-1 
                        mt-5 bg-red-600 hover:bg-red-800 transition-all duration-300'>
              ERROR
          </p>
        )
      }
      
    </div>
  )
}

export default Home