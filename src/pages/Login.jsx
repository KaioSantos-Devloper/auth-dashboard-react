import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
  if (email === "kaio@gmail.com" && senha === "123") {

    navigate("/dashboard");

  } else {

    alert("Email ou senha incorretos");

  }
}

  return (
    <div className="container">
      <div className="login-box">
        <h1>Painel de Login</h1>

        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button onClick={handleLogin}>
          Entrar
        </button>

        <p>
          Não tem uma conta?
          <Link to="/register">Clique aqui</Link>
        </p>

        <p>
          Esqueceu a senha?
          <Link to="/register">Clique aqui</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;