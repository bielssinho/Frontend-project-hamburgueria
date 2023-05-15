import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from '../components/NotFoundPage';
import { UserProvider } from '../context/UserContext';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';


export const RoutesMain = () => {
    return(
        <Routes>
            <Route 
                index path='/' 
                element={<Login/>}
            />

            <Route  
                path='/register' 
                element={
                <UserProvider>
                    <Register/>
                </UserProvider>
                }
            />

            <Route  
                path='/dashboard/:name' 
                element={<Dashboard/>}
            />

            <Route  
                path='*' 
                element={<NotFoundPage/>}
            />
        </Routes>
    )
}