import { useEffect, useRef } from 'react';

const vals = [
  {ico:'🎯',name:'Client-First',desc:'Your business goals drive every technical decision we make.'},
  {ico:'⚡',name:'Agile Speed',desc:'Rapid sprints, clear milestones, zero surprises at all.'},
  {ico:'🛡️',name:'Reliability',desc:'SLA-backed uptime and 24/7 dedicated support always.'},
  {ico:'🌍',name:'Global Reach',desc:'12+ countries with deep domain expertise across verticals.'},
];

const timeline = [
  {yr:'2023',title:'Founded in Lucknow, India',desc:'Started as a 5-member web studio focused on Indian SME clients.'},
  {yr:'2024',title:'Cloud & Mobile Expansion',desc:'Launched cloud and mobile divisions; crossed 50 enterprise clients.'},
  {yr:'2025',title:'AI/ML Practice Launched',desc:'Dedicated AI team; first ML product delivered for healthcare.'},
  {yr:'2026',title:'150+ Projects Delivered',desc:'12+ countries, 98% client satisfaction rate and growing.'},
];

const pills = ['Software Engineering','Cloud Architecture','AI / ML','Cybersecurity','Mobile Dev','UI/UX Design','DevOps','Data Science'];

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
    }, { threshold: 0.05 });
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{padding:'7rem 5%',background:'#060d1a'}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'5rem',alignItems:'start'}}>
        <div className="reveal">
          <div className="eyebrow">About Arnex</div>
          <h2 className="sec-title" style={{marginBottom:'1.2rem'}}>The Partner You Can<br/><span className="gr">Count On</span></h2>
          <p style={{fontSize:'.96rem',color:'#9ab0cc',lineHeight:1.88,marginBottom:'2rem',fontWeight:300}}>
            Founded in 2017, Arnex Tech has grown from a boutique IT studio into a <strong style={{color:'#80e0ff',fontWeight:500}}>full-service technology partner</strong> serving enterprises across 12 countries. We combine deep engineering expertise with a <strong style={{color:'#80e0ff',fontWeight:500}}>client-first philosophy</strong> — delivering solutions built to last.
          </p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1px',background:'rgba(0,200,255,.08)',border:'1px solid rgba(0,200,255,.08)',borderRadius:'18px',overflow:'hidden',marginBottom:'1.4rem'}}>
            {vals.map(v=>(
              <div key={v.name} style={{background:'#0d1a2e',padding:'1.25rem 1.4rem',transition:'background .22s'}}
                onMouseEnter={e=>e.currentTarget.style.background='#112035'}
                onMouseLeave={e=>e.currentTarget.style.background='#0d1a2e'}>
                <div style={{display:'flex',alignItems:'center',gap:'.5rem',marginBottom:'.4rem'}}>
                  <span>{v.ico}</span>
                  <span style={{fontFamily:'Rajdhani,sans-serif',fontSize:'.72rem',fontWeight:700,color:'#9ab0cc',letterSpacing:'.06em',textTransform:'uppercase'}}>{v.name}</span>
                </div>
                <p style={{fontSize:'.78rem',color:'#4a6080',lineHeight:1.65,fontWeight:300}}>{v.desc}</p>
              </div>
            ))}
          </div>
          <div style={{background:'#0d1a2e',border:'1px solid rgba(0,200,255,.08)',borderRadius:'12px',padding:'1.2rem 1.4rem'}}>
            <div style={{fontFamily:'Rajdhani,sans-serif',fontSize:'.6rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.18em',color:'#2a3a50',marginBottom:'.85rem'}}>Tech Expertise</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:'.45rem'}}>
              {pills.map(p=><span key={p} style={{fontSize:'.72rem',padding:'.28rem .8rem',borderRadius:'100px',background:'rgba(0,200,255,.08)',border:'1px solid rgba(0,200,255,.18)',color:'#80e0ff',fontWeight:600}}>{p}</span>)}
            </div>
          </div>
        </div>

        <div className="reveal d1">
          <div style={{fontFamily:'Rajdhani,sans-serif',fontSize:'.6rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.2em',color:'#2a3a50',marginBottom:'1.4rem'}}>Our Journey</div>
          <div>
            {timeline.map(t=>(
              <div key={t.yr} style={{display:'flex',gap:'1.2rem',padding:'1.15rem 0',borderBottom:'1px solid rgba(0,200,255,.08)'}}>
                <div style={{fontFamily:'Rajdhani,sans-serif',fontSize:'.88rem',fontWeight:700,color:'#00c8ff',width:'44px',flexShrink:0,paddingTop:'.08rem'}}>{t.yr}</div>
                <div>
                  <div style={{fontFamily:'Rajdhani,sans-serif',fontSize:'.75rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.04em',color:'#9ab0cc',marginBottom:'.28rem'}}>{t.title}</div>
                  <p style={{fontSize:'.79rem',color:'#4a6080',lineHeight:1.65,fontWeight:300}}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{background:'linear-gradient(135deg,rgba(0,200,255,.08),rgba(0,200,255,.02))',border:'1px solid rgba(0,200,255,.18)',borderRadius:'12px',padding:'1.3rem 1.4rem',marginTop:'1.4rem'}}>
            <div style={{fontFamily:'Rajdhani,sans-serif',fontSize:'.58rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.18em',color:'#00c8ff',marginBottom:'.55rem'}}>Our Mission</div>
            <p style={{fontSize:'.84rem',color:'#b8f0ff',lineHeight:1.78,fontStyle:'italic',fontWeight:300}}>"To empower businesses worldwide with technology that is robust, scalable, and transformative — delivered with integrity and precision."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
