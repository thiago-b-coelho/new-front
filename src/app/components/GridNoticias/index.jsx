'use client';
import CardNoticia from '@/app/components/CardNoticia';
import React from 'react'
import './style.css';

const GridNoticias = ({ noticias }) => {
  return (
    <div className='grid-noticias'>
      {noticias.map(noticia => (
        <CardNoticia key={noticia.id} noticia={noticia}/>
      ))}
    </div>
  )
}

export default GridNoticias