import "./Login.css";
import backgroundImage from "../assets/background-login-register.png";
import gogoleIcon from "../assets/google-icon.png";
import githubIcon from "../assets/github-icon.png";
import { useState, useEffect } from "react";
import { login, debugLocalStorage, validateToken } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    debugLocalStorage();
    
    if (validateToken()) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
       await login(email, senha);

    
      if (validateToken()) {
        navigate("/dashboard");
      } else {
        setError("Erro ao salvar dados de autenticação. Tente novamente.");
      }

      debugLocalStorage();
    } catch (error: any) {
      if (error.response?.status === 401) {
        setError("Email ou senha incorretos");
      } else if (error.response?.status === 400) {
        setError("Dados inválidos");
      } else if (
        error.code === "NETWORK_ERROR" ||
        error.message.includes("Network Error")
      ) {
        setError("Erro de conexão. Verifique se o servidor está rodando.");
      } else {
        setError("Erro interno. Tente novamente mais tarde.");
      }
    } finally {
      setLoading(false);
    }
  };

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

        <form className="login-form" onSubmit={handleLogin}>
          {error && <div className="error-message">{error}</div>}

          <div className="container-login-form">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="usuario@usuario.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="container-login-form">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="***********"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "ENTRANDO..." : "LOGIN"}
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
