import { useNavigate } from 'react-router-dom'
import './style.css'
import Logo from '../../assets/img/Logo.png'
import Profile from '../../assets/img/Profile.png'
import { useState } from 'react';


function Home() {
  const navigate = useNavigate();

  function irParaCadastro() {
    navigate("/cadastro")
  }

  const [showPassword, setShowPassword] = useState(false);



  return (
    <main>
      <div className='container'>

        <section className='container-cadastro'>
          <h1>Olá, Bem-Vindo!</h1>
          <p>não tem uma conta?</p>
          <img src={Profile} alt="Icon Perfil" />
          <button type='button' onClick={irParaCadastro}>Cadastre-se</button>
        </section>

        <form className='container-form'>

          <img src={Logo} alt="Logo do Colegio Benjamin Constant" />

          <div className="form-content">

            <div className="form-group">
              <label htmlFor="email_user">E-mail Institucional</label>
              <input type="email" id="email_user" placeholder="Digite seu e-mail" />
            </div>

            <div className="form-group">
              <label htmlFor="senha_user">Senha</label>

              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="senha_user"
                  placeholder="Digite sua senha"
                />

                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? (
                    <svg width="20" height="20" fill="none" stroke="gray" strokeWidth="2">
                      <path d="M1 1l18 18" />
                      <path d="M4 4C2 6 1 10 1 10s4 7 9 7c2 0 4-1 5-3" />
                      <path d="M10 7a3 3 0 0 1 3 3 3 3 0 0 1-3 3" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" fill="none" stroke="gray" strokeWidth="2">
                      <path d="M1 10S5 3 10 3s9 7 9 7-4 7-9 7S1 10 1 10z" />
                      <circle cx="10" cy="10" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="form-options">
              <div className="check">
                <input type="checkbox" id="remember_me" />
                <label htmlFor="remember_me">Relembre-me</label>
              </div>
              <a href="#" className="forgot">Esqueceu a senha?</a>
            </div>

            <button type='submit'>Entrar</button>

          </div>

        </form>

      </div>
    </main>
  )
}

export default Home
