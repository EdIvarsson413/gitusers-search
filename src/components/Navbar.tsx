import LightIcon from '@/components/icons/LightIcon'
import DarkIcon from '@/components/icons/DarkIcon'

const Navbar = () => {
    return (
        <header className="flex justify-between items-center  mb-12 text-white">
            <h1 className="text-2xl font-semibold">devfinder</h1>
            <button className="flex items-center gap-3 uppercase">
                <p>Claro</p>  
                <i>
                    <LightIcon width={27} height={27}/>
                </i>
            </button>
        </header> 
    )
}

export default Navbar