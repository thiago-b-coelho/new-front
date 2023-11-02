'use client';
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const CadastroForm = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const aoSubmeter = async (e) => { 
    e.preventDefault();
    try{
      const formulario = {
        nome, email, senha
      }
      const result = await axios.post('http://localhost:8080/usuarios', formulario);
      alert('Usuário foi cadastrado com sucesso');
      return useRouter().push('admin/noticias/criar')
    } catch (error) {
      alert(error.response.data.message)
    }
    console.log(nome, email, senha)
  }

  const aoAlterarValores = (e) => {
    const {name, value} = e.target

    switch(name) {
      case 'nome':
        setNome(value)
        break;
      case 'email':
        setEmail(value)
        break;
      case 'senha':
        setSenha (value)
        break;
      default:
        break;
    }
  }

  return (
    <form onSubmit={aoSubmeter}>
      <div>
        <label htmlFor="nome">Nome</label>
        <input type="text" name="nome" onChange={aoAlterarValores}/>
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" onChange={aoAlterarValores}/>
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input type="password" name="senha" onChange={aoAlterarValores}/>
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default CadastroForm