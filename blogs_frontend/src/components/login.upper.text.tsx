import { FaUser } from 'react-icons/fa';

export default function LoginUpperText() {
    return (
        <div className='flex flex-col gap-2'>
            <div className="flex flex-row gap-4 items-center font-extrabold text-3xl">
                <FaUser/>
                <h1 className="">login escritores</h1>
            </div>
            <p className="text-sm">{`Publique artigos de maneira fácil e rápida ;)`}</p>
        </div>
    )
}