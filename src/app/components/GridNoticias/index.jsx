'use client';
import CardNoticia from '@/app/components/CardNoticia';
import React from 'react'

const GridNoticias = ({ noticias }) => {
  return (
    <div>
      {noticias.map(noticia => (
        <CardNoticia key={noticia.id} noticia={noticia}/>
      ))}
    </div>
  )
}

export default GridNoticias