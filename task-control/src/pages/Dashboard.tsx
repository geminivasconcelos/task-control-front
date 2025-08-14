import { useState } from "react";
import "./Dashboard.css";
import user from "../assets/user.png";
import CreateTaskModal from "../components/CreateTaskModal";
import Layout from "../components/Layout";
import Task from "../components/Task";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goToSettingsPage = () => {
    navigate("/settings");
  };

  const handleSave = (task: any) => {
    console.log("Nova tarefa:", task);
  };

  return (
    <Layout>
      <header className="dashboard-header">
        <h2>TO-DO LIST</h2>
        <input type="text" placeholder="🔍 Search task" />

        <button
          className="new-task-button"
          onClick={() => setIsModalOpen(true)}
        >
          + New Task
        </button>

        <div className="icons">
          <div className="icon-24x24">24×24</div>
          <button className="btn-avatar-config " onClick={goToSettingsPage}>
            <img src={user} alt="Avatar" className="avatar" />
          </button>
        </div>
      </header>

      <section className="task-list">
        <Task />
      </section>

      <CreateTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </Layout>
  );
}
