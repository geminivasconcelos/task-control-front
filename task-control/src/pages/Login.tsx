import "./Login.css";
import backgroundImage from "../assets/background-login-register.png";
import gogoleIcon from "../assets/google-icon.png";
import githubIcon from "../assets/github-icon.png";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="illustration-wrapper">
          {/* Partículas de fundo */}
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>

          {/* Ícones flutuantes animados */}
          <div className="floating-icon icon-1">📋</div>
          <div className="floating-icon icon-2">✓</div>
          <div className="floating-icon icon-3">💡</div>
          <div className="floating-icon icon-4">🕐</div>
          <div className="floating-icon icon-5">💳</div>
          <div className="floating-icon icon-6">📊</div>

          {/* Círculos decorativos */}
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>

          <img
            src={backgroundImage}
            alt="Ilustração"
            className="illustration"
          />
        </div>
      </div>

      <div className="login-right">
        <p className="welcome-text">
          <span className="span-welcome-text">Bem-vindo ao</span>{" "}
          <strong className="strong-welcome-text">Task Control!</strong>
        </p>
        <p className="subtitle">Entre na sua conta</p>

        <form className="login-form">
          <div className="container-login-form">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="usuario@usuario.com" />
          </div>

          <div className="container-login-form">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="***********" />
          </div>

          <button type="submit" className="login-button">
            LOGIN
          </button>

          <div className="social-login">
            <img src={gogoleIcon} alt="Google" />
            <img src={githubIcon} alt="GitHub" />
          </div>
        </form>

        <p className="register-text">
          Não tem conta? <a href="/register">Registre-se</a>
        </p>
      </div>
    </div>
  );
}
