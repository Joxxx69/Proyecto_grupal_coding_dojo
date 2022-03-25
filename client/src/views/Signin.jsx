import React from 'react';
import FormLogin from '../components/FormLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'
import Navbar from '../components/Navbar';

const Signin = (params) => {
    const navigate = useNavigate();
    const {login} = useAuth();
    const {state} = useLocation();
    

    console.log('este es el state', state);
    

    const LoginUser =(user)=>{
        login(user)
        .then(()=>{
            console.log('se envio')
            navigate(state?.path || '/');
        })
        .catch(err=> alert('error en el login'));
    }

    return (
            <Navbar>
                <FormLogin onSubmitProp={LoginUser} />
            </Navbar>
    );
}


export default Signin;