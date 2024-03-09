import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ILogin } from "@/app/interfaces/login.interface";
import { IObjectResponse } from "@/app/interfaces/response.interface";
import { FaEye, FaUser, FaEyeSlash } from 'react-icons/fa';
require('dotenv').config();


export default function Login() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassWord] = useState<boolean>(false);
    const [disableBtn, setDisableBtn] = useState<boolean>(true);
    const [wrongMail, setWrongMail] = useState<boolean>(false);
    const [insufPassword, setInsufPassword] = useState<boolean>(false);
    const apiUrl = process.env.API || 'http://localhost:3000';

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setFunction: React.Dispatch<React.SetStateAction<string>>) => {
        setFunction(event.target.value);
    }

    const togglePassword = () => {
        setShowPassWord(!showPassword);
    }

    const validateEmail = () => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    const controlBtn = () => {
        const validEmail = validateEmail();

        if(password.length && validEmail) {
            setDisableBtn(false);
        } else {
            setDisableBtn(true);
        }
    }

    useEffect(() => {
        controlBtn();
    }, [email, password]);

    const wrongMailText = () => {
        const validEmail = validateEmail();

        if(!validEmail) {
            setWrongMail(true);
        } else {
            setWrongMail(false);
        }
    }

    const insuficientPassword = () => {
        if(!password.length) {
            setInsufPassword(true);
        } else {
            setInsufPassword(false);
        }
    }

    const handleBlurEmail = () => {
        /* controlBtn(); */
        wrongMailText();
    }

    const handleBlurPassword = () => {
        /* controlBtn(); */
        insuficientPassword();
    }

    const handleClick = async () => {
        
        const body: ILogin = { user_email: email, user_password: password }
        
        try {
            const response: AxiosResponse<IObjectResponse> = await axios.post<any>(
              `${apiUrl}/user/login`, body
            );  
            const token = response.data.data.token;
            localStorage.setItem('token', token);
            console.log(token);
            
          } catch (error) {
            console.log(error);
          }
    }
    return (
        <div className="text-gray-500 font-sans pt-32 flex flex-col items-center text-center gap-6">
            <div className="flex flex-row gap-4 items-center font-extrabold text-3xl">
                <FaUser/>
                <h1 className="">login escritores</h1>
            </div>
            <p className="text-sm">{`Publique artigos de maneira fácil e rápida ;)`}</p>

            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-start w-full">
                        <span className="text-red-500">*</span><span>email</span>
                    </div>
                    
                    <input type="text" 
                    className="border-2 border-gray-500 p-3 rounded-lg outline-none"
                    onChange={(event) => handleChange(event, setEmail)}
                    onBlur={handleBlurEmail}/>
                    <div className="flex justify-start">
                        { wrongMail ? <span className="text-red-500">email incorreto</span> : ''}
                    </div>
                    
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-start w-full">
                        <span className="text-red-500">*</span><span>senha</span>
                    </div>
                    <div className="flex flex-row border-2 border-gray-500 p-3 rounded-lg items-center">
                        <input type={showPassword ? "text" : "password"} 
                        className="outline-none"
                        onChange={(event) => handleChange(event, setPassword)}
                        onBlur={handleBlurPassword}/>

                        { showPassword ? <FaEyeSlash onClick={togglePassword}/> : <FaEye onClick={togglePassword}/>}
                        
                    </div>
                    <div className="flex justify-start">
                        { insufPassword ? <span className="text-red-500">senha vazia</span> : ''}
                    </div>
                </div>

                <button type="submit" onClick={handleClick} disabled={disableBtn}
                className="bg-red-500 p-4 text-white font-extrabold rounded-lg mt-4"
                >Login</button>           
            </div>
        </div>
    )
}