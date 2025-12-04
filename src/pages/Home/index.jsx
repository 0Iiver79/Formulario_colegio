import { useNavigate, Link } from "react-router-dom"
import "./style.css"
import Logo from "../../assets/img/Logo.png"
import Profile from "../../assets/img/Profile.png"
import { useEffect, useState } from "react"

function Home() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [senha, setSenha] = useState("")
  const [email, setEmail] = useState("")
  const [remember, setRemember] = useState(false)

  // Carregar dados do localStorage se "Relembre-me" estiver ativo
  useEffect(() => {
    const savedEmail = localStorage.getItem("email")
    const savedSenha = localStorage.getItem("senha")

    if (savedEmail && savedSenha) {
      setEmail(savedEmail)
      setSenha(savedSenha)
      setRemember(true)
    }
  }, [])

  // Função de validação de email
  function emailValido(email) {
    return /\S+@\S+\.\S+/.test(email)
  }

  // Função de login
  function handleLogin(e) {
    e.preventDefault()

    if (!emailValido(email)) {
      alert("Por favor, insira um e-mail válido.")
      return
    }

    if (senha.length < 6) {
      alert("A senha precisa ter pelo menos 6 caracteres.")
      return
    }

    if (remember) {
      localStorage.setItem("email", email)
      localStorage.setItem("senha", senha)
      localStorage.setItem("remember", "true")
    } else {
      localStorage.removeItem("email")
      localStorage.removeItem("senha")
      localStorage.removeItem("remember")
    }

    alert("Login enviado com sucesso!")
  }

  // Navegar para página de cadastro
  function irParaCadastro() {
    navigate("/cadastro")
  }

  return (
    <main>
      <div className="container">

        <section className="container-cadastro">
          <h1>Olá, Bem-Vindo!</h1>
          <p>Não tem uma conta?</p>
          <img src={Profile} alt="Icon Perfil" />

          <button
            type="button"
            onClick={irParaCadastro}
            className="btn-cadastro"
          >
            Cadastre-se
          </button>
        </section>

        <form className="container-form" onSubmit={handleLogin}>
          <img src={Logo} alt="Logo do Colegio Benjamin Constant" />

          <div className="form-content">

            <div className="form-group">
              <label htmlFor="email_user">E-mail Institucional</label>
              <input
                type="email"
                id="email_user"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="senha_user">Senha</label>

              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="senha_user"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />

                {senha.length > 0 && (
                  <span
                    className="toggle-text"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Ocultar" : "Mostrar"}
                  </span>
                )}
              </div>
            </div>

            <div className="form-options">
              <div className="check">
                <input
                  type="checkbox"
                  id="rememberCheck"
                  checked={remember}
                  onChange={(e) => {
                    setRemember(e.target.checked)
                    if (!e.target.checked) {
                      setEmail("")
                      setSenha("")
                    }
                  }}
                />
                <label htmlFor="rememberCheck">Relembre-me</label>
              </div>
              
             
              <Link to="/recuperar-senha" className="forgot">
                Esqueceu a senha?
              </Link>
            </div>

            <button type="submit" className="btn-login">
              Entrar
            </button>

            <div className="divider">
              <div className="line"></div>
              <span>Ou</span>
              <div className="line"></div>
            </div>

            <button type="button" className="google-btn">
              <img src="https://www.google.com/favicon.ico" alt="Google" />
              Entrar com Google
            </button>

          </div>
        </form>

      </div>
    </main>
  )
}

export default Home
