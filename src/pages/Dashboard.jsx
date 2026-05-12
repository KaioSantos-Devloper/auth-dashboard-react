import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-container">

      <aside className="sidebar">
        <h2>Painel</h2>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/usuarios">Usuários</Link>
          <Link to="/relatorios">Relatórios</Link>
          <Link to="/configuracoes">Configurações</Link>
        </nav>
      </aside>

      <main className="dashboard-content">

        <h1>Dashboard</h1>

        <div className="cards">

          <div className="card">
            <h2>Usuários</h2>
            <p>120</p>
          </div>

          <div className="card">
            <h2>Vendas</h2>
            <p>R$ 5.400</p>
          </div>

          <div className="card">
            <h2>Pedidos</h2>
            <p>32</p>
          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;