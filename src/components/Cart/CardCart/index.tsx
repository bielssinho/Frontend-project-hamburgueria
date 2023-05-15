import { MdDelete } from 'react-icons/md';


export const CardCart = ({ cart, product, setCart }: any) => {
    const eventRemove = () => {
        const newCart = cart.filter((produc: any) => produc.id != product.id);

        setCart(newCart)
    }

    const add = () => {
        return product.counter + 1;
    }

    const sub = () => {
        return product.counter + 1;
    }
    
    return(
        <li>
            <div className='item'>
                <img src={product.img} alt={product.name} />
                <div className='itemInfo'>
                    <h3>{product.name}</h3>
                    <div className='count'>
                        <button onClick={sub}>-</button>
                        <p>{product.counter}</p>
                        <button onClick={add}>+</button>
                    </div>
                </div>
            </div>
            <MdDelete className='delete' onClick={eventRemove}/>
        </li>
    )
}