import './style.css'
import Logo from '../../assets/img/Logo.png'
import Profile from '../../assets/img/Profile.png'

function Home() {
  return (
    <main>
      <div className='container'>
        <section className='container-cadastro'>
          <h1>Olá, Bem-Vindo!</h1>
          <p>não tem uma conta?</p>
          <img src={Profile} alt="Icon Perfil" />
          <button type='button'>Cadastre-se</button>
        </section>

        <form className='container-form'>
          <img src={Logo} alt="Logo do Colegio Benjamin Constant" />

          <label htmlFor="email_user">E-mail Institucional</label>
          <input type="email" id="email_user" placeholder='Digite seu e-mail' />

          <label htmlFor="senha_user">Senha</label>
          <input type="password" id="senha_user" placeholder='Digite sua senha' />

          <div className="check">
            <input type="checkbox" id="remember_me" />
            <label htmlFor="remember_me">Relembre-me</label>
          </div>

          <a href="#">Esqueceu a senha?</a>
          <button type='submit'>Entrar</button>
        </form>
      </div>
    </main>
  )
}

export default Home
