'use client';
import { useState } from 'react'
import './style.css'
import { useRouter } from 'next/navigation';

const Menu = () => {
  const [menuLateral, setMenuLateral] = useState(false);
  const router = useRouter();

  return (<>
    <nav className='Menu'>
      <button onClick={() => setMenuLateral(!menuLateral)}>Menu</button>
      <div>Logo</div>
      <button onClick={() => router.push('/login')}>Login</button>
    </nav>
    { menuLateral && 
    <div className='Menu_lateral'>
      <div className="fechar" onClick={() => setMenuLateral(!menuLateral)}>X</div>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>}
  </>)
}

export default Menu