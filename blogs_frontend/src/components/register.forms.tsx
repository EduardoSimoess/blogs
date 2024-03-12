import {IRegister, IView} from "@/interfaces/register.interface";
import { IObjectResponse } from "@/interfaces/response.interface";
import { GlobalContext } from "@/provider/global";
import axios, { AxiosResponse } from "axios";
import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function RegisterFrom () {


    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassWord] = useState<boolean>(false);
    const [insufPassword, setInsufPassword] = useState<boolean>(false);
    const [disableBtn, setDisableBtn] = useState<boolean>(true);
    const [personalData, setPersonalData] = useState<IRegister>({
        user_name: '',
        user_last_name: '',
        user_email: '',
        user_telephone: '',
        user_password: ''
    });

    const [view, setView] = useState<IView>({
        wrongMail: false,
        insufPassword: false,
        insufName: false,
        insufLatsName: false,
        wrongPhone: false,
        diferentPassword: false
    });
    /* const { setIncorrect } = useContext(GlobalContext); */
    const apiUrl = process.env.API || 'http://localhost:3000';

    useEffect(() => {
        const viewValues: boolean[] = Object.values(view);
        const personalValues: string[] = Object.values(personalData);
        const bool = viewValues.some((valeu) => valeu === true);
        const boolPersonal = personalValues.some((valeu) => valeu === '');
        
        if(bool || boolPersonal) {
            setDisableBtn(true);
        } else {
            setDisableBtn(false);
        }
    }, [view])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: keyof IRegister) => {
        setPersonalData(prevState => ({ ...prevState, [key]: event.target.value }));
    }

    const validateEmail = () => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(personalData.user_email);
    }

    const wrongMailText = () => {
        const validEmail = validateEmail();

        if(!validEmail) {
            setView(prevState => ({ ...prevState, wrongMail: true }));
        } else {
            setView(prevState => ({ ...prevState, wrongMail: false }));
        }
    }
    
    const verifyCharacters = (ketView: keyof IView, keyPersonal: keyof IRegister) => {
        console.log(personalData[keyPersonal].length);
        
        if(!personalData[keyPersonal].length) {            
            setView(prevState => ({ ...prevState, [ketView]: true }));
        } else {
            setView(prevState => ({ ...prevState, [ketView]: false }));
        }
    }

    const verifyPassword = () => {
        if(!password.length) {
            setInsufPassword(true);
        } else {
            setInsufPassword(false);
        }
    }

    const togglePassword = () => {
        setShowPassWord(!showPassword);
    }

    const verifyPhone = () => {
        const regex = /^[1-9]{2}(?:9[1-9])[0-9]{3}[0-9]{4}$/;

        const cleanPhone = personalData.user_telephone.replace(/\D/g, '');
        
        setView(prevState => ({ ...prevState, wrongPhone: !regex.test(cleanPhone) }));
    }

    const verifyPasswords = () => {
        if (password !== personalData.user_password) {
            setView(prevState => ({ ...prevState, diferentPassword: true }));
        } else {
            setView(prevState => ({ ...prevState, diferentPassword: false }));
        }

    }

    const handleClick = async () => {
        
        const body: IRegister = personalData;
        
        try {
            const response: AxiosResponse<IObjectResponse> = await axios.post<any>(
              `${apiUrl}/user/create`, body
            );  
            const { data } = response.data;
            if(!data) {
                /* setIncorrect(true); */
            } else {
                localStorage.setItem('token', data.token);
            }
            
          } catch (error) {
            console.log(error);
          }
    }

    return (
        <div className="flex flex-col gap-4 pb-6">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-start w-full">
                        <span className="text-red-500">*</span><span>Nome</span>
                    </div>
                    
                    <input type="text" 
                    className="border-2 border-gray-500 p-3 rounded-lg outline-none"
                    onChange={(event) => handleChange(event, "user_name")}
                    onBlur={() => verifyCharacters("insufName", "user_name")}/>
                    <div className="flex justify-start">
                        { view.insufName ? <span className="text-red-500">nome vazio</span> : ''}
                    </div>
                    
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-start w-full">
                        <span className="text-red-500">*</span><span>Sobrenome</span>
                    </div>
                    
                    <input type="text" 
                    className="border-2 border-gray-500 p-3 rounded-lg outline-none"
                    onChange={(event) => handleChange(event, "user_last_name")}
                    onBlur={() => verifyCharacters("insufLatsName", "user_last_name")}/>
                    <div className="flex justify-start">
                        { view.insufLatsName ? <span className="text-red-500">sobrenome vazio</span> : ''}
                    </div>
                    
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-start w-full">
                        <span className="text-red-500">*</span><span>Telefone</span>
                    </div>
                    
                    <input type="text" 
                    className="border-2 border-gray-500 p-3 rounded-lg outline-none"
                    onChange={(event) => handleChange(event, "user_telephone")}
                    onBlur={verifyPhone}/>
                    <div className="flex justify-start">
                        { view.wrongPhone ? <span className="text-red-500">Telefone inválido</span> : ''}
                    </div>
                    
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-start w-full">
                        <span className="text-red-500">*</span><span>email</span>
                    </div>
                    
                    <input type="text" 
                    className="border-2 border-gray-500 p-3 rounded-lg outline-none"
                    onChange={(event) => handleChange(event, "user_email")}
                    onBlur={wrongMailText}/>
                    <div className="flex justify-start">
                        { view.wrongMail ? <span className="text-red-500">email incorreto</span> : ''}
                    </div>
                    
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-start w-full">
                        <span className="text-red-500">*</span><span>senha</span>
                    </div>
                    <div className="flex flex-row border-2 border-gray-500 p-3 rounded-lg items-center">
                        <input type={showPassword ? "text" : "password"} 
                        className="outline-none"
                        onChange={(event) => setPassword(event.target.value)}
                        onBlur={verifyPassword}/>

                        { showPassword ? <FaEyeSlash onClick={togglePassword}/> : <FaEye onClick={togglePassword}/>}
                        
                    </div>
                    <div className="flex justify-start">
                        { insufPassword ? <span className="text-red-500">senha vazia</span> : ''}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-start w-full">
                        <span className="text-red-500">*</span><span>confirmar senha</span>
                    </div>
                    <div className="flex flex-row border-2 border-gray-500 p-3 rounded-lg items-center">
                        <input type={showPassword ? "text" : "password"} 
                        className="outline-none"
                        onChange={(event) => handleChange(event, "user_password")}
                        onBlur={verifyPasswords}/>

                        { showPassword ? <FaEyeSlash onClick={togglePassword}/> : <FaEye onClick={togglePassword}/>}
                        
                    </div>
                    <div className="flex justify-start">
                        { view.diferentPassword ? <span className="text-red-500">senhas diferentes</span> : ''}
                    </div>
                </div>

                <button type="submit" onClick={handleClick} disabled={disableBtn}
                className="bg-red-500 p-4 text-white font-extrabold rounded-lg mt-4"
                >Login</button>  
        </div>
    )
}