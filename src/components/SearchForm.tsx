import SearchIcon from '@/components/icons/SearchIcon'

interface Props {
    getUser: ( username: string ) => Promise<void>
}

const SearchForm = ( { getUser }: Props ) => {
    const handleSubmit = async ( e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        await getUser( username );
    }

    return (
        <form
            onSubmit={handleSubmit}
            autoComplete='off'
            className='flex flex-wrap gap-3 items-center dark:bg-gray-800 bg-gray-200 shadow-xl 
                    dark:shadow-none p-3 rounded-xl justify-center'
        >
            <span className='min-w-[20px]'>
                <SearchIcon className='fill-blue-500 ml-3' width={25} height={25} />
            </span>
            <input
                name='username'
                type="text"
                className='bg-transparent flex-1 p-2 dark:text-white text-black focus:outline-none 
                            dark:placeholder-white placeholder-gray-400 h-[50px]'
                placeholder='Buscar usuario de GitHub'
            />
            <button
                className='bg-blue-500 rounded-md px-4 py-3 text-white font-semibold 
                            hover:bg-blue-700 transition-all duration-300'
            >
                Buscar
            </button>
        </form>
    )
}

export default SearchForm