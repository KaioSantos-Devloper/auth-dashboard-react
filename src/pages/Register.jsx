import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleRegister() {
    if (nome && email && senha) {
      alert("Cadastro realizado com sucesso!");
    } else {
      alert("Preencha todos os campos");
    }
  }

  return (
    <div className="container">
      <div className="register-box">

        <h1>Criar Conta</h1>

        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

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

        <button onClick={handleRegister}>
          Cadastrar
        </button>

        <p>
          Já possui conta?
          <Link to="/"> Fazer login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;