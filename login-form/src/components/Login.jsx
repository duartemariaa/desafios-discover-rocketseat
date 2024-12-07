import React from "react";
import './Login.css'
import login from '../assets/log-in.svg'

function Login(){
    return (
        <div className="login-container">
            <div className="login-content">
                <div className="title">
                    <img src={login} alt="" />
                    <h1>Faça seu login</h1>
                </div>
                <p>Entre com suas informações de cadastro.</p>
            </div>
            <div className="input-area">
                <label>E-mail</label>
                <input type="e-mail" id="email" placeholder="Digite seu email"/>
                <label>Senha</label>
                <input type="password" id="password" placeholder="Digite sua senha"/>
            </div>
            <div className="checkbox-area">
                <div>
                    <input type="checkbox"/>
                    <label>Lembre-me</label>
                </div>
                <a href="#">Esqueci minha senha</a>
            </div>
            <button className="login-btn">ENTRAR</button>
            <p className="signup-text">Não tem uma conta? <a href="#">Registre-se</a></p>
        </div>
    )
}

export default Login