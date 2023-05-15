import { createContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { SubmitHandler} from 'react-hook-form';
import { toast } from 'react-toastify';
import { iFormLogin } from '../pages/Login';

interface iAuthProviderProps{
    children: React.ReactNode;
}

interface iAuthProviderValue{
    items: iProducts[];
    loading: boolean;
    submit(data: iFormLogin): Promise<void>;
    loadUser: () => Promise<void>;
    autoLogin: () => void;
}

export interface iProducts{
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
}

export const AuthContext = createContext({} as iAuthProviderValue);

export const AuthProvider = ( {children}: iAuthProviderProps ) => {
    const [ items, setItems ] = useState<iProducts[]>([]);
    const [ loading, setLoading ] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    
    const loadUser = async () => {
        const token = localStorage.getItem('@TOKEN');
        const user = localStorage.getItem('@USER');

        if(!token){
            setLoading(false);
            return navigate('/');
        }

        try {
            api.defaults.headers.common.authorization = `Bearer ${token}`;
    
            const { data } = await api.get('products')
            
            setItems(data);
            if(token){
                navigate(`/dashboard/${user}`);
            }
        } catch (error) {
            localStorage.clear();
            navigate('/');
        }finally{
            setLoading(false);
        } 
    }
  
    

    const submit: SubmitHandler<iFormLogin> = async (data) => {
        try {
            const response = await api.post('login', data)
            const { accessToken } = response.data;
            localStorage.setItem('@TOKEN', accessToken)
            localStorage.setItem('@USER', response.data.user.name)
            api.defaults.headers.common.authorization = `Bearer ${accessToken}`;

            
            const toNavigate = location.state?.from?.pathname || `/dashboard/${response.data.user.name}`;
            
            navigate(toNavigate, { replace: true }); 
        } catch (error) {
            toast.error('Ops! Algo deu errado no Login')
        }
    }

    const autoLogin = () => {
        const token = localStorage.getItem('@TOKEN');
        const user = localStorage.getItem('@USER');

        if(token){
            navigate(`/dashboard/${user}`)    
        }
    }

    return (
        <AuthContext.Provider value ={{ items, loading, submit, loadUser, autoLogin }}>
            {children}
        </AuthContext.Provider>
    )
}