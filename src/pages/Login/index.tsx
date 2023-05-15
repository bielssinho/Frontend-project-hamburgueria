import Logo from '../../img/logo.svg';
import Bag from '../../img/shopping-bag.svg';
import { Link } from 'react-router-dom';
import { StyledFormLoginPage } from './styles';
import { Container } from '../../styles/container';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorYup } from '../../styles/yupError';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';


export interface iFormLogin{
    email: string;
    password: string;
}

export const Login = () => {
    const { submit, autoLogin } = useContext(AuthContext);

    const formLoginSchema = yup.object().shape({
        email: yup.string().required('E-mail obrigatório'),
        password: yup.string().required('Senha obrigatória')
    }) 

    const { register, handleSubmit, formState: { errors }} = useForm<iFormLogin>({
        resolver: yupResolver(formLoginSchema)
    })

    useEffect(() => {
        autoLogin()
    }, [])

    return(
        <>
            <Container flexDirection='row-reverse'>
                <div>
                    <img src={Logo} alt='Logo Hamburgueria' />
                    <div>
                        <img src={Bag} alt='shopping bag' />
                        <p>A vida é como um sanduiche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>
                    </div>
                </div>
                <StyledFormLoginPage onSubmit={handleSubmit(submit)}>
                    <h2>Login</h2>
                    <label>
                        Email
                        <input type='text' {...register('email')} />
                    </label>
                    {errors.email && <ErrorYup>{errors.email.message}</ErrorYup>}
                    <label>
                        Senha
                        <input type='password' {...register('password')} />
                    </label>
                    {errors.password && <ErrorYup>{errors.password.message}</ErrorYup>}
                    <button type='submit'>Logar</button>
                    <span>Crie uma conta para sborear muitas delícias e metar sua fome!</span>
                    <Link to={'/register'}>Cadastre-se</Link>
                </StyledFormLoginPage>
            </Container>
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