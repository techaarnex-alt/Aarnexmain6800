import { useEffect, useRef } from 'react';

const svcs = [
  {num:'01',title:'Custom Software Dev',desc:'Full-cycle development of web portals, ERPs, CRMs, and enterprise platforms built to your exact business logic.',tags:['React','Node.js','Python','.NET']},
  {num:'02',title:'Cloud & DevOps',desc:'Cloud migrations, containerisation, and CI/CD pipelines that cut costs and accelerate delivery cycles significantly.',tags:['AWS','Azure','Docker','K8s']},
  {num:'03',title:'Mobile App Development',desc:'Cross-platform and native apps for iOS & Android — from consumer products to B2B enterprise mobility solutions.',tags:['Flutter','React Native','Swift']},
  {num:'04',title:'AI & Data Analytics',desc:'ML models, NLP, computer vision, BI dashboards, and intelligent automation that turns raw data into decisions.',tags:['TensorFlow','PyTorch','Power BI']},
  {num:'05',title:'Cybersecurity',desc:'VAPT, security audits, zero-trust architecture, ISO 27001 / SOC 2 compliance and incident response planning.',tags:['ISO 27001','VAPT','SOC 2']},
  {num:'06',title:'IT Consulting',desc:'Strategic advisory, legacy modernisation, ERP/CRM integrations, and API design that unifies your digital ecosystem.',tags:['ERP','SAP','Salesforce']},
];

export default function Services() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
    }, { threshold: 0.05 });
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="services-section" style={{padding:'7rem 5%',background:'#080f1e'}}>
      <div className="reveal services-header" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'3rem',alignItems:'end',marginBottom:'3.5rem'}}>
        <div>
          <div className="eyebrow">What We Build</div>
          <h2 className="sec-title">Complete IT Solutions<br/><span className="gr">End-to-End</span></h2>
          <p className="sec-sub" style={{marginTop:'.8rem'}}>From discovery to deployment — we design, engineer, and maintain technology that drives real business outcomes.</p>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'.7rem'}}>
            {[['6','Services'],['60+','Engineers'],['24/7','Support']].map(([n,l])=>(
              <div key={l} style={{background:'#0d1a2e',border:'1px solid rgba(0,200,255,.08)',borderRadius:'11px',padding:'1rem',textAlign:'center'}}>
                <div style={{fontFamily:'Rajdhani,sans-serif',fontSize:'1.7rem',fontWeight:700,color:'#00c8ff',lineHeight:1,marginBottom:'.22rem'}}>{n}</div>
                <div style={{fontSize:'.58rem',color:'#2a3a50',textTransform:'uppercase',letterSpacing:'.14em',fontWeight:600}}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{background:'rgba(0,200,255,.08)',border:'1px solid rgba(0,200,255,.18)',borderLeft:'3px solid #00c8ff',borderRadius:'10px',padding:'1rem 1.2rem'}}>
            <p style={{fontSize:'.8rem',color:'#b8f0ff',lineHeight:1.7,fontStyle:'italic'}}>"We don't just build software — we build competitive advantage for your business, one sprint at a time."</p>
          </div>
        </div>
      </div>

      <div className="reveal d1 services-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',background:'rgba(0,200,255,.08)',border:'1px solid rgba(0,200,255,.08)',borderRadius:'20px',overflow:'hidden'}}>
        {svcs.map(s=>(
          <div key={s.num} style={{background:'#080f1e',padding:'2rem 1.7rem',position:'relative',cursor:'default',transition:'background .25s'}}
            onMouseEnter={e=>{e.currentTarget.style.background='#0b1528';e.currentTarget.querySelector('.sc-line').style.opacity='1'}}
            onMouseLeave={e=>{e.currentTarget.style.background='#080f1e';e.currentTarget.querySelector('.sc-line').style.opacity='0'}}>
            <div className="sc-line" style={{position:'absolute',top:0,left:0,right:0,height:'1px',background:'linear-gradient(90deg,transparent,#00c8ff,transparent)',opacity:0,transition:'opacity .28s'}}/>
            <div style={{fontFamily:'Rajdhani,sans-serif',fontSize:'2.8rem',fontWeight:700,color:'rgba(0,200,255,.1)',lineHeight:1,marginBottom:'1.2rem',letterSpacing:'.02em'}}>{s.num}</div>
            <div style={{fontFamily:'Rajdhani,sans-serif',fontSize:'.92rem',fontWeight:700,letterSpacing:'.06em',textTransform:'uppercase',color:'#e4eeff',marginBottom:'.6rem'}}>{s.title}</div>
            <p style={{fontSize:'.82rem',color:'#4a6080',lineHeight:1.78,fontWeight:300}}>{s.desc}</p>
            <div style={{display:'flex',flexWrap:'wrap',gap:'.35rem',marginTop:'1.1rem'}}>
              {s.tags.map(t=><span key={t} style={{fontSize:'.58rem',padding:'.17rem .55rem',borderRadius:'4px',background:'rgba(0,200,255,.08)',color:'#80e0ff',border:'1px solid rgba(0,200,255,.18)',fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase'}}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
