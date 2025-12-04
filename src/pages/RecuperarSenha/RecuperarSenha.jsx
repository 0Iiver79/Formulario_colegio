import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./resetStyle.css";
import Logo from "../../assets/img/Logo.png";

function RecuperarSenha() {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add("body-recuperar-senha");

        return () => {
           
            document.body.classList.remove("body-recuperar-senha");
        };
    }, []);

    function irParaHome() {
        navigate("/home"); 
    }

    return (
        <main className="main-reset">
            <div className="container-reset">
                <section className="container-left">
                    <img src={Logo} alt="Logo do Colegio Benjamin Constant" />
                </section>

                <form className="container-formsReset">
                    
                        <h1>Esqueceu a Senha ?</h1>

                        <div className="container-inputsReset">
                            <label htmlFor="email_reset">E-mail Institucional</label>
                            <input type="email" placeholder="Digite seu e-mail" id="email_reset" />

                            <div className="buttons-container">
                                <button type="button">Enviar</button>
                                <button type="button" onClick={irParaHome}>Voltar</button>
                            </div>
                        </div>

                    
                </form>
            </div>
        </main>
    );
}

export default RecuperarSenha;
