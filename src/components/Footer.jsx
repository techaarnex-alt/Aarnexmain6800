import LOGO from '../logo';

const links = ['services','about','process','contact'];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer style={{background:'#060d1a',borderTop:'1px solid rgba(0,200,255,.08)',padding:'1.8rem 5%',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'1.2rem'}}>
      <a href="#home" onClick={e=>{e.preventDefault();scrollTo('home')}} style={{display:'flex',alignItems:'center'}}>
        <img src={LOGO} alt="Arnex Tech" style={{height:'32px',width:'auto',objectFit:'contain'}}/>
      </a>
      <div style={{display:'flex',gap:'1.4rem'}}>
        {links.map(l=>(
          <a key={l} href={`#${l}`} onClick={e=>{e.preventDefault();scrollTo(l)}}
            style={{fontFamily:'Rajdhani,sans-serif',fontSize:'.65rem',color:'#2a3a50',textTransform:'uppercase',letterSpacing:'.14em',fontWeight:600,transition:'color .2s'}}
            onMouseEnter={e=>e.currentTarget.style.color='#00c8ff'}
            onMouseLeave={e=>e.currentTarget.style.color='#2a3a50'}>
            {l.charAt(0).toUpperCase()+l.slice(1)}
          </a>
        ))}
      </div>
      <small style={{fontSize:'.64rem',color:'#2a3a50'}}>© 2025 Arnex Tech Pvt. Ltd. All rights reserved.</small>
    </footer>
  );
}
