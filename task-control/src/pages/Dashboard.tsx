import { useState } from "react";
import "./Dashboard.css";
import user from "../assets/user.png";
import CreateTaskModal from "../components/CreateTaskModal";
import Layout from "../components/Layout";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (task: any) => {
    console.log('Nova tarefa:', task);
  };

  return (
    <Layout>
      <header className="dashboard-header">
        <h2>TO-DO LIST</h2>
        <input type="text" placeholder="🔍 Search task" />

        <button className="new-task-button" onClick={() => setIsModalOpen(true)}>
          + New Task
        </button>

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

      <CreateTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </Layout>
  );
}
