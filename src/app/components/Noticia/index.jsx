'use client';
import Image from 'next/image'
import React from 'react'

const Noticia = ({ noticia }) => {
  return (
    <div>
      <div>{noticia.titulo}</div>
      <img src={noticia.img} alt="noticia" width={250} height={250}/>
      <div dangerouslySetInnerHTML={{__html: noticia.texto}}></div>
      <br />
    </div>
  )
}

export default Noticia