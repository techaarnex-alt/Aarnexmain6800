import { useState, useEffect } from 'react';
import LOGO from '../logo';

const links = ['services','about','process','contact'];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const secs = document.querySelectorAll('section[id]');
      let cur = '';
      secs.forEach(s => { if (window.scrollY >= s.offsetTop - 110) cur = s.id; });
      setActive(cur);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav style={{
      position:'fixed',inset:'0 0 auto 0',zIndex:999,
      display:'flex',alignItems:'center',justifyContent:'space-between',
      padding:'0 5%',height:'66px',
      background: scrolled ? 'rgba(6,13,26,.98)' : 'rgba(6,13,26,.93)',
      backdropFilter:'blur(40px) saturate(180%)',
      borderBottom:'1px solid rgba(0,200,255,.08)',
      transition:'background .3s'
    }}>
      <a href="#home" onClick={e=>{e.preventDefault();scrollTo('home')}} style={{display:'flex',alignItems:'center'}}>
        <img src={LOGO} alt="Aarnex Tech" style={{height:'50px',width:'auto',objectFit:'contain'}}/>
      </a>

      <ul style={{display:'flex',gap:'2px',listStyle:'none'}}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l}`}
              onClick={e=>{e.preventDefault();scrollTo(l)}}
              style={{
                padding:'.42rem .95rem',borderRadius:'7px',
                fontFamily:'Rajdhani,sans-serif',fontSize:'.78rem',fontWeight:600,
                color: active===l ? '#00c8ff' : '#4a6080',
                background: active===l ? 'rgba(0,200,255,.08)' : 'transparent',
                letterSpacing:'.1em',textTransform:'uppercase',transition:'all .2s',display:'block'
              }}>
              {l.charAt(0).toUpperCase()+l.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" onClick={e=>{e.preventDefault();scrollTo('contact')}} style={{
        background:'linear-gradient(135deg,#0077cc,#00a8e8,#00c8ff)',
        color:'#fff',padding:'.48rem 1.3rem',borderRadius:'8px',
        fontFamily:'Rajdhani,sans-serif',fontSize:'.75rem',fontWeight:700,
        letterSpacing:'.12em',textTransform:'uppercase',
        boxShadow:'0 0 18px rgba(0,200,255,.2)',transition:'all .22s'
      }}>
        Get a Quote
      </a>
    </nav>
  );
}
