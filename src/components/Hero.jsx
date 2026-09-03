import { useEffect, useRef } from 'react';

const stats = [
  {val:'150',sup:'+',label:'Projects'},
  {val:'8',sup:'+',label:'Years'},
  {val:'98',sup:'%',label:'Satisfaction'},
  {val:'12',sup:'+',label:'Countries'},
];

const services = [
  {ico:'🖥️',name:'Custom Software',sub:'Web · Desktop · Enterprise Apps'},
  {ico:'☁️',name:'Cloud & DevOps',sub:'AWS · Azure · GCP · CI/CD'},
  {ico:'🤖',name:'AI & Analytics',sub:'ML · NLP · Computer Vision · BI'},
  {ico:'📱',name:'Mobile Apps',sub:'iOS · Android · Flutter · React Native'},
  {ico:'🔒',name:'Cybersecurity',sub:'VAPT · ISO 27001 · SOC 2'},
  {ico:'🔗',name:'IT Consulting',sub:'ERP · CRM · SAP · Salesforce'},
];

export default function Hero() {
  const dotsRef = useRef(null);

  useEffect(() => {
    const container = dotsRef.current;
    if (!container) return;
    for (let i = 0; i < 18; i++) {
      const s = document.createElement('span');
      s.style.cssText = `position:absolute;width:2px;height:2px;border-radius:50%;background:#00c8ff;left:${Math.random()*100}%;top:${40+Math.random()*55}%;animation:floatDot ${6+Math.random()*10}s ease-in-out infinite;animation-delay:${Math.random()*8}s;opacity:0`;
      container.appendChild(s);
    }
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" style={{minHeight:'100vh',padding:'66px 5% 0',display:'flex',flexDirection:'column',justifyContent:'center',position:'relative',overflow:'hidden'}}>
      <style>{`
        @keyframes floatDot{0%{opacity:0;transform:translateY(0) scale(0)}20%{opacity:.6}80%{opacity:.4}100%{opacity:0;transform:translateY(-120px) scale(1.5)}}
        @keyframes livePulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.2;transform:scale(.5)}}
      `}</style>

      {/* BG */}
      <div style={{position:'absolute',inset:0,pointerEvents:'none',backgroundImage:'linear-gradient(rgba(0,200,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,255,.04) 1px,transparent 1px)',backgroundSize:'60px 60px',maskImage:'radial-gradient(ellipse 90% 90% at 70% 30%,black 20%,transparent 75%)'}}/>
      <div style={{position:'absolute',top:'-10%',right:'-5%',width:'55vw',height:'55vw',maxWidth:'650px',maxHeight:'650px',background:'radial-gradient(circle,rgba(0,120,255,.07) 0%,transparent 65%)',pointerEvents:'none'}}/>
      <div ref={dotsRef} style={{position:'absolute',inset:0,overflow:'hidden',pointerEvents:'none'}}/>

      <div
  className="hero-grid"
  style={{
    position: 'relative',
    zIndex: 2,
    display: 'grid',
    gridTemplateColumns: '1fr 420px',
    gap: '3.5rem',
    alignItems: 'center',
    padding: '5rem 0 4rem'
  }}
>
        {/* LEFT */}
        <div>
          <div style={{display:'inline-flex',alignItems:'center',gap:'.6rem',background:'rgba(0,200,255,.08)',border:'1px solid rgba(0,200,255,.18)',borderRadius:'100px',padding:'.3rem .9rem .3rem .45rem',fontSize:'.65rem',color:'#80e0ff',letterSpacing:'.12em',textTransform:'uppercase',fontWeight:600,marginBottom:'1.8rem',fontFamily:'Rajdhani,sans-serif'}}>
            <div style={{width:'18px',height:'18px',borderRadius:'50%',background:'rgba(0,200,255,.15)',border:'1px solid rgba(0,200,255,.18)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#00c8ff',animation:'livePulse 2s infinite',display:'block'}}/>
            </div>
            Enterprise IT Partner · Est. 2017
          </div>

          <h1 style={{fontFamily:'Rajdhani,sans-serif',fontSize:'clamp(2.8rem,5.5vw,5.5rem)',fontWeight:700,lineHeight:.96,letterSpacing:'-.01em',marginBottom:'1.6rem',color:'#e4eeff'}}>
            We Build<br/>
            <span style={{background:'linear-gradient(110deg,#00c8ff 0%,#4fa8ff 50%,#80e0ff 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Digital</span><br/>
            <span style={{color:'#4a6080',fontWeight:300}}>Infrastructure</span>
          </h1>

          <p style={{fontSize:'.97rem',color:'#9ab0cc',lineHeight:1.82,maxWidth:'520px',marginBottom:'2.4rem',fontWeight:300}}>
            Aarnex Tech engineers enterprise-grade software, cloud systems, and AI solutions — designed to scale, built to last, delivered on time.
          </p>

          <div style={{display:'flex',gap:'.8rem',flexWrap:'wrap',marginBottom:'4rem'}}>
            <a href="#services" onClick={e=>{e.preventDefault();scrollTo('services')}} style={{display:'inline-flex',alignItems:'center',gap:'.5rem',background:'linear-gradient(135deg,#0077cc,#00a8e8,#00c8ff)',color:'#fff',padding:'.82rem 2rem',borderRadius:'9px',fontFamily:'Rajdhani,sans-serif',fontSize:'.88rem',fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',boxShadow:'0 4px 24px rgba(0,168,232,.3)'}}>
              Explore Services ↓
            </a>
            <a href="#contact" onClick={e=>{e.preventDefault();scrollTo('contact')}} style={{display:'inline-flex',border:'1px solid rgba(0,200,255,.18)',color:'#b8f0ff',padding:'.82rem 2rem',borderRadius:'9px',fontFamily:'Rajdhani,sans-serif',fontSize:'.88rem',fontWeight:600,letterSpacing:'.08em',textTransform:'uppercase'}}>
              Start a Project →
            </a>
          </div>

          <div style={{display:'flex',gap:'2.5rem',borderTop:'1px solid rgba(0,200,255,.08)',paddingTop:'2rem',flexWrap:'wrap'}}>
            {stats.map(s=>(
              <div key={s.label}>
                <div style={{fontFamily:'Rajdhani,sans-serif',fontSize:'2.4rem',fontWeight:700,lineHeight:1,color:'#e4eeff',marginBottom:'.22rem'}}>
                  {s.val}<sup style={{fontSize:'1rem',color:'#00c8ff'}}>{s.sup}</sup>
                </div>
                <div style={{fontSize:'.6rem',color:'#2a3a50',textTransform:'uppercase',letterSpacing:'.14em',fontWeight:600}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div style={{background:'#0d1a2e',border:'1px solid rgba(0,200,255,.18)',borderRadius:'18px',overflow:'hidden',position:'relative'}}>
          <div style={{position:'absolute',top:0,left:0,right:0,height:'1px',background:'linear-gradient(90deg,transparent,#00c8ff,transparent)'}}/>
          <div style={{padding:'1rem 1.4rem',borderBottom:'1px solid rgba(0,200,255,.08)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',gap:'5px'}}>
              {['rgba(255,90,90,.5)','rgba(255,180,60,.45)','rgba(60,200,100,.4)'].map((c,i)=>
                <span key={i} style={{width:'8px',height:'8px',borderRadius:'50%',background:c,display:'block'}}/>
              )}
            </div>
            <span style={{fontFamily:'Rajdhani,sans-serif',fontSize:'.62rem',color:'#4a6080',letterSpacing:'.15em',textTransform:'uppercase',fontWeight:600}}>Our Services</span>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'1px',background:'rgba(0,200,255,.08)'}}>
            {services.map(s=>(
              <div key={s.name} onClick={()=>scrollTo('services')} style={{background:'#0d1a2e',padding:'1.1rem 1.4rem',display:'flex',gap:'.85rem',alignItems:'center',cursor:'pointer',transition:'background .2s'}}>
                <div style={{width:'34px',height:'34px',borderRadius:'8px',background:'rgba(0,200,255,.08)',border:'1px solid rgba(0,200,255,.18)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.95rem',flexShrink:0}}>{s.ico}</div>
                <div>
                  <div style={{fontFamily:'Rajdhani,sans-serif',fontSize:'.72rem',fontWeight:700,color:'#9ab0cc',marginBottom:'.12rem'}}>{s.name}</div>
                  <div style={{fontSize:'.68rem',color:'#2a3a50'}}>{s.sub}</div>
                </div>
                <span style={{marginLeft:'auto',color:'rgba(0,200,255,.18)',fontSize:'.8rem'}}>→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
