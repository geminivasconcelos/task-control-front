import "./Register.css";
import backgroundImage from "../assets/background-login-register.png";
import googleIcon from "../assets/google-icon.png";
import githubIcon from "../assets/github-icon.png";
import { useState, useEffect } from "react";
import { register, debugLocalStorage } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    debugLocalStorage();
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await register(nome, sobrenome, email, senha);

      navigate("/dashboard");
    } catch (error: any) {
      if (error.response?.status === 400) {
        setError("Verifique os dados informados");
      } else if (error.response?.status === 409) {
        setError("Este email já está cadastrado");
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
    <div className="register-container">
      <div className="register-left">
        <div className="illustration-wrapper">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>

          <div className="floating-icon icon-1">📋</div>
          <div className="floating-icon icon-2">✓</div>
          <div className="floating-icon icon-3">💡</div>
          <div className="floating-icon icon-4">🕐</div>
          <div className="floating-icon icon-5">💳</div>
          <div className="floating-icon icon-6">📊</div>

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

      <div className="register-right">
        <p className="welcome-text">
          <span className="span-welcome-text">Bem-vindo ao</span>{" "}
          <strong className="strong-welcome-text">Task Control!</strong>
        </p>
        <p className="subtitle">Crie sua conta</p>

        <form className="register-form" onSubmit={handleRegister}>
          {error && <div className="error-message">{error}</div>}

          <div className="container-register-form">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              placeholder="Fulano"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="container-register-form">
            <label htmlFor="sobrenome">Sobrenome</label>
            <input
              type="text"
              id="sobrenome"
              placeholder="da Silva"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              required
            />
          </div>

          <div className="container-register-form">
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

          <div className="container-register-form">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="***********"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="register-button" disabled={loading}>
            {loading ? "REGISTRANDO..." : "REGISTRAR"}
          </button>

          <div className="social-register">
            <img src={googleIcon} alt="Google" />
            <img src={githubIcon} alt="GitHub" />
          </div>
        </form>

        <p className="register-text">
          Já tem conta? <a href="/">Entrar</a>
        </p>
      </div>
    </div>
  );
}
