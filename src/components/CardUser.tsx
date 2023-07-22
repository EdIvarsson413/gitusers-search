import Image from "next/image"
import avatar from '@/assets/imgs/avatar.jpg'
import LocationIcon from '@/components/icons/LocationIcon'
import CompanyIcon from '@/components/icons/CompanyIcon'
import TwitterIcon from '@/components/icons/TwitterIcon'
import LinkIcon from '@/components/icons/LinkIcon'
import type { User } from "@/ts/user"
import formatearFecha from "@/ts/formatearFecha"

interface Props {
    user: User
}

const CardUser = ( { user }: Props ) => {
    return (
        <article className="bg-gray-800 text-white p-7 my-7 rounded-xl grid-arias">
            {/* Avatar del usuario */}
            <div className="seccion-logo">
                <Image 
                    src={user.avatar_url}
                    alt={`Imagen avatar user ${user.name}`}
                    className="rounded-full mx-5 mb-3 md:w-28 w-[6.5rem]"
                    width={112}
                    height={112}
                />
            </div>

            {/* Nombre y username */}
            <div className="seccion-usuario">
                <h2 className="font-bold text-xl">{ user.name }</h2>
                <p className="text-blue-500">
                    <a href={`https://github.com/${user.login}`} target="_blank">@{ user.login }</a>
                </p>
            </div>

            {/* Fecha de registro */}
            <p className="seccion-fecha text-justify">
                Desde { formatearFecha( user.created_at || '' ) }
            </p>

            {/* Descripcion del usuario */}
            <p className={`seccion-descripcion my-3 text-justify 
                        ${user.bio ? 'text-white' : 'text-gray-600'}`}
            >
                { user.bio ? user.bio : 'Sin Descripción' }
            </p>
            

            {/* Datos (repos, seguidores y siguiendo) */}
            <div className="seccion-datos flex sm:justify-center sm:gap-16 md:justify-between 
                        bg-slate-900 p-6 my-3 w-full text-center rounded-xl">
                <section className="text-sm">
                    <span>Repos</span>
                    <br />
                    <span className="font-bold text-xl">{ user.public_repos }</span>
                </section>

                <section className="text-sm">
                    <span>Followers</span>
                    <br />
                    <span className="font-bold text-xl">{ user.followers }</span>
                </section>

                <section className="text-sm">
                    <span>Following</span>
                    <br />
                    <span className="font-bold text-xl">{ user.following }</span>
                </section>
            </div>

            {/* Otros datos  */}
            <div className="seccion-social grid grid-cols-2">
                <section className="flex space-x-2 mt-4 items-center">
                    <i><LocationIcon className={`w-5 h-5 ${user.location ? 'fill-white' : 'fill-gray-600'}`}/></i>
                    <p className={`truncate ... ${user.location ? 'text-white' : 'text-gray-600'}`}>
                        {
                            user.location ? user.location : 'No Disponible'
                        }
                    </p>
                </section>
                <section className="flex space-x-2 mt-4 items-center">
                    <i><LinkIcon className={`w-5 h-5 ${user.blog ? 'fill-white' : 'fill-gray-600'}`}/></i>
                    <p className={`truncate ... ${user.blog ? 'text-white' : 'text-gray-600'}`}>
                        {
                            user.blog ? user.blog : 'No Disponible'
                        }
                    </p>
                </section>
                <section className="flex space-x-2 mt-4 items-center">
                    <i><TwitterIcon className={`w-5 h-5 ${user.twitter_username ? 'fill-white' : 'fill-gray-600'}`}/></i>
                    <p className={`truncate ... ${user.twitter_username ? 'text-white' : 'text-gray-600'}`}>
                        {
                            user.twitter_username ? user.twitter_username : 'No Disponible'
                        }
                    </p>
                </section>
                <section className="flex space-x-2 mt-4 items-center">
                    <i><CompanyIcon className={`w-5 h-5 ${user.company ? 'fill-white' : 'fill-gray-600'}`}/></i>
                    <p className={`truncate ... ${user.company ? 'text-white' : 'text-gray-600'}`}>
                        {
                            user.company ? user.company : 'No Disponible'
                        }
                    </p>
                </section>
            </div>
        </article>
    )
}

export default CardUser