import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import Logo from '../../img/logo.svg';
import Bag from '../../img/shopping-bag.svg';
import { Container } from '../../styles/container';
import { StyledFormRegisterPage } from "./styles";
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorYup } from '../../styles/yupError';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';


export interface iFormRegister{
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

export const Register = () => {
    const { submit } = useContext(UserContext);

    const formRegisterSchema = yup.object().shape({
        name: yup.string().required('Nome é obrigatório!'),
        email: yup.string().required('E-mail é obrigatório!').email('E-mail inválido!'),
        password: yup.string().required('Senha é obrigatório!').min(6),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais!')
    });

    const { register, handleSubmit, formState: { errors } } = useForm<iFormRegister>({
        resolver: yupResolver(formRegisterSchema)
    });

    return(
        <>
            <Container flexDirection='row'>
                <div>
                    <img src={Logo} alt='Logo Hamburgueria' />
                    <div>
                        <img src={Bag} alt='shopping bag' />
                        <p>A vida é como um sanduiche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>
                    </div>
                </div>
                <StyledFormRegisterPage onSubmit={handleSubmit(submit)}>
                    <div>
                        <h2>Cadastro</h2>
                        <Link to={'/'}>Retornar para o login</Link>
                    </div>
                    <label>
                        Nome
                        <input type='text' {...register('name')}/>
                    </label>
                    {errors.name && <ErrorYup>{errors.name.message}</ErrorYup>}
                    <label>
                        Email
                        <input type='text' {...register('email')}/>
                    </label>
                    {errors.email && <ErrorYup>{errors.email.message}</ErrorYup>}
                    <label>
                        Senha
                        <input type='password' {...register('password')}/>
                    </label>
                    {errors.password && <ErrorYup>{errors.password.message}</ErrorYup>}
                    <label>
                        Confirmar Senha
                        <input type='password' {...register('confirmPassword')}/>
                    </label>
                    {errors.confirmPassword && <ErrorYup>{errors.confirmPassword.message}</ErrorYup>}
                    <button type='submit'>Cadastrar</button>
                </StyledFormRegisterPage>
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