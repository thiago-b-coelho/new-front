"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const Router = useRouter();
  const [formulario, setFormulario] = useState({
    email: "",
    senha: "",
  });

  const aoSubmeter = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:8080/login",
        formulario
      );
      alert(result.data.message)
      Router.push('/admin/noticias/criar')

    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const aoAlterarValores = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };
  return (
    <form onSubmit={aoSubmeter}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" onChange={aoAlterarValores} />
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input type="password" name="senha" onChange={aoAlterarValores} />
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
};
export default LoginForm;
