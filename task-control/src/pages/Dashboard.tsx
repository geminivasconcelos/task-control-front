// import React from "react";
import "./Dashboard.css";
import dashboardIcon from "../assets/imagem-dashboard.png";
import user from "../assets/user.png";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
          <img src={dashboardIcon} alt="Logo" />
          <span>Teste teste teste teste</span>
        </div>

        <nav className="menu">
          <button className="menu-item active">📋 Tarefas</button>
          <button className="menu-item">📂 Categorias</button>
          <button className="menu-item">📅 Calendário</button>
        </nav>

        <div className="bottom-menu">
          <button className="menu-item">❓ Ajuda</button>
          <button className="menu-item">⚙️ Configurações</button>
        </div>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <h2>Lista de Tarefas</h2>
          <input type="text" placeholder="🔍 Pesquisar tarefa" />
          <button className="new-task-button">+ Nova Tarefa</button>
          <div className="icons">
            <div className="icon-24x24">24×24</div>
            <img src={user} alt="Avatar" className="avatar" />
          </div>
        </header>

        <section className="task-list">
          <div className="task-card selected">
            <strong>Aula: Laboratório de Programação Web</strong>
            <p>20:20PM–22:10PM</p>
            <p>ICC II - UFBA</p>
            <p>UFBA</p>
            <span className="eye-icon">👁️</span>
          </div>

          <div className="task-card">
            <strong>Aula: Laboratório de Programação Web</strong>
            <p>20:20PM–22:10PM</p>
            <p>ICC II - UFBA</p>
            <p>UFBA</p>
            <span className="eye-icon">👁️</span>
          </div>

          <div className="task-card">
            <strong>Aula: Laboratório de Programação Web</strong>
            <p>20:20PM–22:10PM</p>
            <p>ICC II - UFBA</p>
            <p>UFBA</p>
            <span className="eye-icon">👁️</span>
          </div>
        </section>
      </main>
    </div>
  );
}
