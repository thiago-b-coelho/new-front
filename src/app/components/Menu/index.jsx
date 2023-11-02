"use client";
import { useState } from "react";
import "./style.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Menu = () => {
  const [menuLateral, setMenuLateral] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="Menu">
        <button onClick={() => setMenuLateral(!menuLateral)}>Menu</button>
        <div>Logo</div>
        <button onClick={() => router.push("/login")}>Login</button>
      </nav>
      {menuLateral && (
        <div className="Menu_lateral">
          <div className="fechar" onClick={() => setMenuLateral(!menuLateral)}>
            X
          </div>
          <ul>
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/noticias/produto">Produto</Link>
            </li>
            <li>
              <Link href="/noticias/vendas">Vendas</Link>
            </li>
            <li>
              <Link href="/noticias/rh">RH</Link>
            </li>
            <li>
              <Link href="/noticias/tecnologia">Tecnologia</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Menu;
