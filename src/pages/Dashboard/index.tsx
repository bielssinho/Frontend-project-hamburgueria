import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { MdLogout } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import Logo from '../../img/logo.svg';
import { StyledDiv, StyledList } from './styles';
import { Card } from '../../components/Card/Card';
import { ModalCart } from '../../components/Cart/Cart';
import { DashContext } from '../../context/DashContext';


export const Dashboard = () => {
    const { items, loading, loadUser } = useContext(AuthContext);
    const { setSearch, setCart, cart, setModal, modal, openSearchBtn, closeSearchBtn, eventSearch, logout, openSearch, search, searchProducts } = useContext(DashContext);

    useEffect(() => {
        loadUser()
    }, []);

    if(loading){
        return null;
    }

    return(
    <StyledDiv>
        <header>
            <div>
                <img src={Logo} alt='logo Burguer Kenzie' />
                <div className='options'>
                    <BiSearch onClick={() => { openSearch ? closeSearchBtn() : openSearchBtn()}} className='styleSearch'/>
                    <div>
                        <FaShoppingCart onClick={() => setModal(true)} className='styleCart'/>
                        <span>{cart.length}</span>
                    </div>
                    <MdLogout onClick={logout} className='styleLogout'/>
                </div>
            </div>
            {
                openSearch &&
                <form onSubmit={eventSearch} className='search'>
                    <input type="text" onChange={e => setSearch(e.target.value)}/>
                    <BiSearch type='submit' className='searchBtn'/>
                </form>
            }
        </header>
        <StyledList>
            <ul>
            {
                search !== '' ? 
                searchProducts.map((item) => <Card key={item.id} item={item} /> ) 
                : 
                items.map((item) => <Card key={item.id} item={item} id={item.id} cart={cart} setCart={setCart} /> )
            }
            </ul>
        </StyledList>
        {
            modal && <ModalCart cart={cart} setModal={setModal} setCart={setCart} />
        }
    </StyledDiv> 
    )
}