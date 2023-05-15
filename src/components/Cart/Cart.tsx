import { useEffect, useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BackgroundModal, StyledTotal } from './styles';
import { MdDelete } from 'react-icons/md';
import { CardCart } from './CardCart';



export const ModalCart= ({ setModal, cart, setCart }: any) => {
    const modalRef = useRef(null);

    useEffect(() => {
        function modalOutClick(event: any) {
            const target = event.target;

            const element: any = modalRef.current;

            if(!element.contains(target)){
                setModal(false);
            }
        }

        window.addEventListener('mousedown', modalOutClick);

        return () => {
            window.removeEventListener('mousedown', modalOutClick);
        }
    })

    const listValue: [] = cart.map((product: any) => product.price * product.counter)

    const value: number = listValue.reduce((total: number, currentValue: number) => { return total + currentValue}, 0)



    return(
        <>
            <BackgroundModal>
                <div ref={modalRef} className='modal'>
                    <div className='modalHeader'>
                        <h2>Carrinho de compras</h2>
                        <h5 onClick={() => setModal(false)}>X</h5>
                    </div>
                    <ul>
                        {
                            cart.length ? 
                            cart.map((product: any) => 
                            <CardCart key={product.id} 
                            product={product}
                            setCart={setCart}
                            cart={cart}
                            />
                            )
                            :
                            <h2>Sacola vazia</h2>
                        }
                    </ul>
                    {
                        cart.length && 
                        <StyledTotal>
                            <div className='tot'>
                                <p>Total</p>
                                <span className='totValue'>{value.toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "BRL",
                                     })}
                                </span>
                            </div>
                            <button onClick={() => setCart([])}>Remover todos</button>
                        </StyledTotal>
                    }
                </div>
            </BackgroundModal>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}