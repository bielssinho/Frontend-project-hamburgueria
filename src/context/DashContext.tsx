import { createContext, useContext } from "react";
import { useState } from 'react';
import { AuthContext, iProducts } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


interface iDashProviderProps{
    children: React.ReactNode;
}

interface iDashProviderValue{
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setCart: React.Dispatch<React.SetStateAction<iProducts[]>>;
    cart: iProducts[];
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    modal: boolean;
    openSearchBtn: () => void;
    closeSearchBtn: () => void;
    eventSearch: (e: any) => void;
    logout: () => void;
    openSearch: boolean;
    search: string;
    searchProducts: iProducts[]
}

export const DashContext = createContext({} as iDashProviderValue);

export const DashProvider = ({ children }: iDashProviderProps) => {
    const { items } = useContext(AuthContext);
    const [ openSearch, setOpenSearch ] = useState(false);
    const [ search, setSearch ] = useState('');
    const [ searchProducts, setSearchProducts] = useState<iProducts[]>([]);
    const [ cart, setCart ] = useState<iProducts[]>([]);
    const [ modal, setModal ] = useState(false);

    const navigate = useNavigate();

    const openSearchBtn = () => {
        if(!openSearch){
            setOpenSearch(true)
        }
    }

    const closeSearchBtn = () => {
        if(openSearch){
            setOpenSearch(false)
        }
    }

    const eventSearch = (e: any) =>{
        e.preventDefault();

       
        const itemFilter = search.toLowerCase();
        const listProduct: iProducts[] = items.filter(product => product.category.toLowerCase().includes(itemFilter) || product.name.toLowerCase().includes(itemFilter));
        searchProducts.length ? setSearchProducts([]) :
        setSearchProducts(listProduct);
       
    };

    const logout = () => {
        localStorage.clear();
        navigate('/')
    }

    return(
        <DashContext.Provider value={{ setSearch, setCart, cart, setModal, modal, openSearchBtn, closeSearchBtn, eventSearch, logout, openSearch, search, searchProducts}}>
            {children}
        </DashContext.Provider>
    )
}