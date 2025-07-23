import { useNavigate, useLocation } from "react-router-dom";
import dashboardIcon from "../assets/imagem-dashboard.png";
import "../pages/Dashboard.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const goToSettings = () => {
    navigate('/settings');
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
          <img src={dashboardIcon} alt="Logo" />
          <span>Teste teste teste teste</span>
        </div>

        <nav className="menu">
          <button 
            className={`menu-item ${location.pathname === '/dashboard' ? 'active' : ''}`}
            onClick={goToDashboard}
          >
            📋 Tasks
          </button>
          <button className="menu-item">🎓 Courses</button>
          <button className="menu-item">📂 Category</button>
          <button className="menu-item">📅 Calendar</button>
        </nav>

        <div className="bottom-menu">
          <button className="menu-item">❓ Help</button>
          <button 
            className={`menu-item ${location.pathname === '/settings' ? 'active' : ''}`}
            onClick={goToSettings}
          >
            ⚙️ Settings
          </button>
        </div>
      </aside>

      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
