'use client';
import React from 'react'

const CardNoticia = ({ noticia }) => {
  {console.log(noticia)}
  return (
    <div>
      <h2>{noticia.titulo}</h2>
      <img src={noticia.img} alt={noticia.titulo} />
      <p>{noticia.texto}</p>
    </div>
  )
}

export default CardNoticia