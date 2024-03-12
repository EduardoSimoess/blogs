import { GlobalContext } from '@/provider/global';
import { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { RiErrorWarningLine } from 'react-icons/ri';

export default function RegisterUpperText() {

    /* const { incorrect } = useContext(GlobalContext); */

    return (
        <div className='flex flex-col gap-2'>
            <div className="flex flex-row gap-4 items-center font-extrabold text-3xl">
                <FaUser/>
                <h1 className="">Cadastro</h1>
            </div>
            <p className="text-sm">Só leva um minuto!</p>
{/*             { incorrect ?             <div className='flex flex-row gap-2 text-red-500 rounded-lg p-3 font-extrabold items-center'>
                <RiErrorWarningLine/>
                <p>Dados incompletos</p>
            </div> : ''} */}
        </div>
    )
}