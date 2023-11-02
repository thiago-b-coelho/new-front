'use client'
import { useEffect, useState } from "react";
import Noticia from "@/app/components/Noticia";
import axios from "axios";

const HomePage = () => {
  const [noticias, setNoticias] = useState([]);

  const getNoticias = async () => {
    try {
      const result = await axios.get("http://localhost:8080/noticias");
      setNoticias(result.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    getNoticias();
  }, []);
  return (
    <div>
      <h1>home</h1>
      {noticias.map((noticia) => (
        <Noticia key={noticia.id} noticia={noticia} />
      ))}
    </div>
  );
};

export default HomePage;
