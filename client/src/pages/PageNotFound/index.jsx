import React from 'react'
import { useNavigate } from "react-router-dom";
import Logo from '../../components/Logo'

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='error-container'>
                <div className='error-header'>
                    <Logo/>
                    <h1>404</h1>
                    <p>Page not found</p>
                </div>

                <div className='error-footer'>
                    <p onClick={() => navigate("/start")}>Voltar para página principal</p>
                </div>
            </div>
        </>
    )
}

export default PageNotFound