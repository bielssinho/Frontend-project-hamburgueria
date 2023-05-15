import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iFormRegister } from '../pages/Register/index';
import { SubmitHandler } from 'react-hook-form';

interface iUserProviderProps{
    children: React.ReactNode;
}

interface iUserProviderValue{
    submit(data: iFormRegister): Promise<void>;
}

export const UserContext = createContext({} as iUserProviderValue);

export const UserProvider = ({children}: iUserProviderProps) => {
    
    const navigate = useNavigate();

    const submit: SubmitHandler<iFormRegister> = async (data) => {
        delete data.confirmPassword
        try {
            const response = await api.post('users', data)

            if(response.statusText === 'Created'){
                toast.success('Conta criada com sucesso!');
                setTimeout(() => {
                    navigate('/');
                }, 3500);
            }
        } catch (error) {
            toast.error('Ops! Algo deu errado!');
        }
    }

    return(
        <UserContext.Provider value={{ submit }}>
            {children}
        </UserContext.Provider>
    )
}