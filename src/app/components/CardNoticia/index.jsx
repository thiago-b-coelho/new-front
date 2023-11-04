"use client";
import React from "react";
import './style.css'

const CardNoticia = ({ noticia }) => {
  return (
    <div className="card-noticia">
      <div
        className="imagem"
        style={{ backgroundImage: `url(${noticia.img})` }}
      />
      <h2>{noticia.titulo}</h2>
      <p dangerouslySetInnerHTML={{ __html: noticia.texto }} />
      <div className="publicado-em">
        {new Date(noticia.createdAt).toLocaleDateString("pt-BR")}
      </div>
    </div>
  );
};

export default CardNoticia;
