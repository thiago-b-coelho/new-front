"use client";
import { useState } from "react";
import "./style.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCoffee, faXmark } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const [menuLateral, setMenuLateral] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="Menu">
        <button onClick={() => setMenuLateral(!menuLateral)}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
        <div>
          <FontAwesomeIcon icon={faCoffee} size="2x" color="#333" />
        </div>
        <button className="login" onClick={() => router.push("/login")}>Login</button>
      </nav>
      {menuLateral && (
        <div className="Menu_lateral">
          <div className="fechar" onClick={() => setMenuLateral(!menuLateral)}>
            <FontAwesomeIcon icon={faXmark} size="2x" />
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
