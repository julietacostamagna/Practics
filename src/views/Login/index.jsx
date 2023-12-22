import React, { useState } from 'react'
import InputGroup from '../../components/InputGroup'
import { TbEye, TbEyeClosed } from "react-icons/tb";
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Login = () => {
    const [pass, setPass] = useState("password");
    const [iconEye, setIconEye] = useState(<TbEye />);
    const showPassword = () => {
        setPass(pass == "password" ? "text" : "password");
        setIconEye(pass == "password" ? <TbEyeClosed /> : <TbEye />);
    }
    return (
        <div className='flex h-full justify-center items-center bg-gray-100 dark:bg-gray-800'>
            <div className="sm:w-full sm:max-w-sm p-5">
                <img className="mx-auto h-24 w-auto" src="https://app.coopmorteros.coop/public/images/logos/Iso_OfiVirtual_Logo_Recortado.png?random=6582f0b2a7340" alt="Your Company" />
                <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">Iniciar Sesión </h2>
                <InputGroup props={{ label: 'Email', ph: "Ingrese un Email", type: 'email', req: true }} />
                <InputGroup showPass={showPassword} props={{ label: 'Contraseña', ph: "Ingrese una Contraseña", type: pass, req: true, btnIcon: iconEye }} />
                <div className='w-full flex justify-center'>
                    <Button props={{ class: 'text-black bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-400 m-2', text: "Ingresar" }} />
                    <Link to={'/Register'}>
                        <Button props={{ class: 'text-black bg-white hover:bg-yellow-400 focus:bg-yellow-400 m-2', text: "Registrarme" }} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login