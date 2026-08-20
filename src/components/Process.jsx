import { useEffect, useRef } from 'react';

const steps = [
  {n:'01',title:'Discovery & Planning',desc:'Structured workshops to map goals, users, tech constraints, and scope. Output: detailed PRD and roadmap.',tags:['Workshops','PRD','Roadmap']},
  {n:'02',title:'Architecture & Design',desc:'System design, data models, API contracts, and UI/UX wireframes — blueprinted before a single line of code.',tags:['System Design','UI/UX','Prototypes']},
  {n:'03',title:'Agile Development',desc:'Two-week sprints with CI, daily standups, and a live shared dashboard — full visibility at all times.',tags:['Sprints','CI/CD','Dashboard']},
  {n:'04',title:'QA & Security Testing',desc:'Automated and manual testing across devices and loads. Security scans and VAPT before every release.',tags:['Automation','VAPT','Load Testing']},
  {n:'05',title:'Launch & Ongoing Support',desc:'Zero-downtime deployment, SLA monitoring, post-launch fixes, and dedicated 24/7 account management.',tags:['Deploy','SLA','24/7 Support']},
];

const phases = [
  {ico:'⏱️',title:'Typical Timeline',desc:'MVP in 4–6 weeks. Full product in 8–16 weeks depending on scope.'},
  {ico:'💬',title:'Communication',desc:'Weekly calls, Slack channel, and a live tracker — always in the loop.'},
  {ico:'📄',title:'Engagement Models',desc:'Fixed-price, T&M, or dedicated team — you choose what fits best.'},
];

export default function Process() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
    }, { threshold: 0.05 });
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="process" ref={ref} className="process-section" style={{padding:'7rem 5%',background:'#0b1528'}}>
      <div className="reveal process-header" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'3rem',alignItems:'end',marginBottom:'3.5rem'}}>
        <div>
          <div className="eyebrow">How We Work</div>
          <h2 className="sec-title">A Process Built for<br/><span className="gr">Success</span></h2>
        </div>
        <div style={{background:'#0d1a2e',border:'1px solid rgba(0,200,255,.08)',borderRadius:'12px',padding:'1.15rem 1.4rem'}}>
          <p style={{fontSize:'.82rem',color:'#4a6080',lineHeight:1.75,fontWeight:300}}>Our methodology is <strong style={{color:'#80e0ff',fontWeight:500}}>ISO-aligned and agile</strong>. Most mid-size projects go from discovery to live in <strong style={{color:'#80e0ff',fontWeight:500}}>8–16 weeks</strong> — on schedule and on budget.</p>
        </div>
      </div>

      <div className="reveal d1 process-list" style={{display:'flex',flexDirection:'column',gap:'1px',background:'rgba(0,200,255,.08)',border:'1px solid rgba(0,200,255,.08)',borderRadius:'20px',overflow:'hidden',marginBottom:'2.4rem'}}>
        {steps.map(s=>(
          <div key={s.n} style={{background:'#0b1528',display:'grid',gridTemplateColumns:'58px 1fr auto',gap:'1.5rem',alignItems:'center',padding:'1.7rem 2rem',transition:'background .22s',cursor:'default'}}
            onMouseEnter={e=>e.currentTarget.style.background='#0d1a2e'}
            onMouseLeave={e=>e.currentTarget.style.background='#0b1528'}>
            <div style={{fontFamily:'Rajdhani,sans-serif',fontSize:'1.7rem',fontWeight:700,color:'rgba(0,200,255,.14)',lineHeight:1,letterSpacing:'.02em'}}>{s.n}</div>
            <div>
              <div style={{fontFamily:'Rajdhani,sans-serif',fontSize:'.82rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.08em',color:'#e4eeff',marginBottom:'.38rem'}}>{s.title}</div>
              <p style={{fontSize:'.82rem',color:'#4a6080',lineHeight:1.7,fontWeight:300,maxWidth:'480px'}}>{s.desc}</p>
            </div>
            <div style={{display:'flex',gap:'.35rem',flexWrap:'wrap',justifyContent:'flex-end'}}>
              {s.tags.map(t=><span key={t} style={{fontSize:'.57rem',padding:'.16rem .55rem',borderRadius:'4px',background:'rgba(0,200,255,.08)',color:'#80e0ff',border:'1px solid rgba(0,200,255,.18)',fontWeight:700,letterSpacing:'.08em',whiteSpace:'nowrap'}}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div className="reveal d2 process-phases" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1rem'}}>
        {phases.map(p=>(
          <div key={p.title} style={{background:'#0d1a2e',border:'1px solid rgba(0,200,255,.08)',borderRadius:'14px',padding:'1.4rem',textAlign:'center',transition:'border-color .22s'}}
            onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(0,200,255,.18)'}
            onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(0,200,255,.08)'}>
            <div style={{fontSize:'1.5rem',marginBottom:'.7rem'}}>{p.ico}</div>
            <div style={{fontFamily:'Rajdhani,sans-serif',fontSize:'.75rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.08em',color:'#9ab0cc',marginBottom:'.4rem'}}>{p.title}</div>
            <p style={{fontSize:'.78rem',color:'#4a6080',lineHeight:1.65,fontWeight:300}}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
