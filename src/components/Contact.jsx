import {FaYoutube} from"react-icons/fa";
import { useEffect, useRef, useState } from 'react';

const infos = [
  {ico:'📧',label:'Email',val:'techaarnex@gmail.com'},
  {ico:'📞',label:'Phone',val:'+91 88537 08777'},
  {ico:<FaYoutube color="red" size={22}/>,label:'YouTube',val:'http://www.youtube.com/@AarnexTech'},
  {ico:'⏱️',label:'Response Time',val:'Within 24 hours — guaranteed'},
];

export default function Contact() {
  const ref = useRef(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
    }, { threshold: 0.05 });
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleSend = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  const inputStyle = {
    width:'100%',padding:'.78rem 1rem',borderRadius:'9px',
    border:'1px solid rgba(0,200,255,.18)',background:'rgba(0,200,255,.025)',
    color:'#e4eeff',fontSize:'.84rem',fontFamily:'Exo 2,sans-serif',
    outline:'none',display:'block',marginBottom:'.65rem',
    transition:'border-color .2s,box-shadow .2s'
  };

  return (
    <section id="contact" ref={ref} style={{padding:'7rem 5%',background:'#080f1e'}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1.25fr',gap:'4rem',alignItems:'start'}}>
        <div className="reveal">
          <div className="eyebrow">Get In Touch</div>
          <h2 className="sec-title" style={{marginBottom:'1rem'}}>Let's Build Something<br/><span className="gr">Great Together</span></h2>
          <p style={{fontSize:'.93rem',color:'#9ab0cc',lineHeight:1.85,maxWidth:'400px',marginBottom:'2rem',fontWeight:300}}>Have a project in mind? Drop us a message and our team responds within 24 hours with a tailored proposal.</p>

          <div style={{display:'flex',flexDirection:'column',gap:'1px',background:'rgba(0,200,255,.08)',border:'1px solid rgba(0,200,255,.08)',borderRadius:'16px',overflow:'hidden',marginBottom:'1.4rem'}}>
            {infos.map(i=>(
              <div key={i.label} style={{background:'#0d1a2e',padding:'1.05rem 1.35rem',display:'flex',gap:'.85rem',alignItems:'center',transition:'background .22s'}}
                onMouseEnter={e=>e.currentTarget.style.background='#112035'}
                onMouseLeave={e=>e.currentTarget.style.background='#0d1a2e'}>
                <div style={{width:'36px',height:'36px',borderRadius:'9px',flexShrink:0,background:'rgba(0,200,255,.08)',border:'1px solid rgba(0,200,255,.18)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.9rem'}}>{i.ico}</div>
                <div>
                  <div style={{fontFamily:'Rajdhani,sans-serif',fontSize:'.58rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.14em',color:'#2a3a50',marginBottom:'.16rem'}}>{i.label}</div>
                  <div style={{fontSize:'.84rem',color:'#9ab0cc',fontWeight:500}}>{i.val}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{background:'#0d1a2e',border:'1px solid rgba(0,200,255,.08)',borderRadius:'12px',padding:'1.1rem 1.4rem'}}>
            <div style={{fontFamily:'Rajdhani,sans-serif',fontSize:'.6rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.14em',color:'#2a3a50',marginBottom:'.45rem'}}>🏢 Head Office</div>
            <p style={{fontSize:'.8rem',color:'#4a6080',lineHeight:1.7,fontWeight:300}}>Sector 19 Vrindavan Yojana,Lucknow<br/>Uttar Pradesh, India</p>
          </div>
        </div>

        <div className="reveal d1">
          <div style={{background:'#0d1a2e',border:'1px solid rgba(0,200,255,.08)',borderRadius:'20px',padding:'2.4rem 2rem',position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:'1px',background:'linear-gradient(90deg,transparent,#00c8ff 50%,transparent)'}}/>
            <div style={{fontFamily:'Rajdhani,sans-serif',fontSize:'1.15rem',fontWeight:700,letterSpacing:'.04em',textTransform:'uppercase',color:'#e4eeff',marginBottom:'.3rem'}}>Send Us a Message</div>
            <div style={{fontSize:'.78rem',color:'#4a6080',marginBottom:'1.7rem',fontWeight:300,lineHeight:1.6}}>We'll respond within 24 hours with a custom proposal for your project.</div>

            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'.65rem',marginBottom:'.65rem'}}>
              <input style={{...inputStyle,marginBottom:0}} type="text" placeholder="Full Name"/>
              <input style={{...inputStyle,marginBottom:0}} type="text" placeholder="Company Name"/>
            </div>
            <input style={inputStyle} type="email" placeholder="Work Email Address"/>
            <input style={inputStyle} type="tel" placeholder="Phone Number"/>
            <select style={{...inputStyle,color:'#4a6080',cursor:'pointer',appearance:'none'}}>
              <option value="" disabled>Service Required</option>
              {['Custom Software Development','Cloud & DevOps','Mobile App Development','AI & Data Analytics','Cybersecurity Solutions','IT Consulting & Integration','Other / Not Sure'].map(o=><option key={o}>{o}</option>)}
            </select>
            <select style={{...inputStyle,color:'#4a6080',cursor:'pointer',appearance:'none'}}>
              <option value="" disabled>Project Budget</option>
              {['Under ₹5 Lakhs','₹5L – ₹20 Lakhs','₹20L – ₹50 Lakhs','₹50 Lakhs+','To Be Discussed'].map(o=><option key={o}>{o}</option>)}
            </select>
            <textarea style={{...inputStyle,resize:'vertical',minHeight:'88px',marginBottom:'1.2rem'}} rows={3} placeholder="Briefly describe your project..."/>
            <button onClick={handleSend} style={{
              width:'100%',padding:'.88rem',border:'none',borderRadius:'9px',
              background: sent ? '#15803d' : 'linear-gradient(135deg,#0077cc,#00a8e8,#00c8ff)',
              color:'#fff',fontFamily:'Rajdhani,sans-serif',fontSize:'.82rem',fontWeight:700,
              letterSpacing:'.1em',textTransform:'uppercase',cursor:'pointer',
              boxShadow: sent ? '0 4px 24px rgba(21,128,61,.35)' : '0 4px 22px rgba(0,168,232,.25)',
              transition:'all .22s'
            }}>
              {sent ? '✅ Message Sent!' : 'Send Message →'}
            </button>
            <div style={{display:'flex',alignItems:'center',gap:'.4rem',marginTop:'.85rem',fontSize:'.67rem',color:'#2a3a50'}}>
              🔒 Your data is secure and never shared with third parties.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
