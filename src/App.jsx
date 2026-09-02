import { useState } from 'react';
import {
  FiActivity, FiArrowRight, FiBarChart2, FiBookOpen, FiBox,
  FiCheck, FiChevronDown, FiCloud, FiCode, FiGrid, FiHeart, FiHome,
  FiLayers, FiMail, FiMapPin, FiMenu, FiMonitor, FiPackage, FiPhone,
  FiPlus, FiSettings, FiShoppingCart, FiSmartphone,
  FiUsers, FiX
} from 'react-icons/fi';
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import logo from './assets/logo.png';

const navItems = ['Home', 'Solutions', 'Industries', 'Products', 'Technology', 'Company'];
const solutions = [
  [FiLayers, 'Hospital ERP', 'Complete hospital management with OPD, IPD, Pharmacy, Lab, Billing & more.', 'blue'],
  [FiActivity, 'Pharmacy ERP', 'Manage inventory, sales, purchases, GST, expiry and more.', 'mint'],
  [FiBookOpen, 'Pathology Software', 'Lab management, test reports, QR reports, sample tracking and analytics.', 'violet'],
  [FiBox, 'School ERP', 'Students, fees, attendance, exams, transport and communication.', 'sky'],
  [FiHome, 'College ERP', 'Admission, departments, examination, fees, library and more.', 'orange'],
  [FiMonitor, 'Website Development', 'Corporate, eCommerce, dynamic & custom web solutions.', 'blue'],
  [FiSmartphone, 'Mobile App Development', 'Android, iOS & cross-platform apps that deliver exceptional experiences.', 'teal'],
  [FiCloud, 'Cloud Solutions', 'Cloud hosting, backup, scalability and security for your business.', 'blue'],
  [FiUsers, 'CRM Solutions', 'Leads, deals, tasks and customer management in one place.', 'violet'],
  [FiSettings, 'AI & Automation', 'AI chatbots, workflow automation, document processing & more.', 'blue'],
  [FiShoppingCart, 'E-Commerce Solutions', 'Powerful eCommerce platforms with payment gateway.', 'violet'],
  [FiPackage, 'Custom Software', 'Tailor-made software built as per your unique business needs.', 'blue']
];
const industries = [[FiHeart, 'Healthcare'], [FiActivity, 'Pharmacy'], [FiBookOpen, 'Education'], [FiMonitor, 'Corporate'], [FiHome, 'Real Estate'], [FiShoppingCart, 'Retail'], [FiBox, 'Logistics'], [FiBarChart2, 'Manufacturing']];
const technologies = [['React', '⚛'], ['Next.js', 'N'], ['Node.js', '⬡'], ['Python', '⌘'], ['PHP', 'php'], ['Java', '♨'], ['Laravel', '⌁'], ['MySQL', '◫'], ['MongoDB', '◉'], ['AWS', 'aws'], ['Azure', '◈'], ['Firebase', '♨'], ['Docker', '▣']];
const faqs = ['What services does Arnex Tech provide?', 'How long does a project typically take?', 'Do you provide custom solutions?', 'Are your solutions scalable?', 'Do you provide after-sales support?'];

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

function Brand() {
  return <a className="brand" href="#home" onClick={(event) => { event.preventDefault(); scrollTo('home'); }}><img src={logo} alt="Arnex Tech" /></a>;
}

function Button({ children, ghost, onClick, type = 'button' }) {
  return <button type={type} className={`button${ghost ? ' button--ghost' : ''}`} onClick={onClick}>{children}<FiArrowRight /></button>;
}

function Proof({ icon: Icon, value, text, inverse }) {
  return <div className={`proof${inverse ? ' proof--inverse' : ''}`}><span><Icon /></span><div><b>{value}</b><small>{text}</small></div></div>;
}

function Dashboard() {
  return <div className="dashboard-wrap corporate-visual" aria-label="Arnex Tech innovation preview">
    <div className="visual-caption"><span>Arnex Tech</span><b>Technology for<br/>what&apos;s next.</b></div>
    <div className="visual-orbit"><i/><i/><i/><i/><i/></div>
    <div className="visual-core"><span>AI</span><b>Innovation<br/>at scale</b></div>
    <div className="visual-card visual-card--top"><small>Global delivery</small><b>25+ industries</b></div>
    <div className="visual-card visual-card--bottom"><small>Always-on support</small><b>24 / 7</b></div>
    <div className="visual-lines"><i/><i/><i/><i/></div>
  </div>;
}

function SectionHeading({ overline, title, subtitle, action }) {
  return <div className="section-heading"><div><span className="overline">{overline}</span>{title && <h2>{title}</h2>}{subtitle && <p>{subtitle}</p>}</div>{action && <button className="text-action">View All <FiArrowRight /></button>}</div>;
}

function SolutionCard({ item, onLearnMore }) {
  const [Icon, title, text, tone] = item;
  return <article className="solution-card"><div className={`solution-icon ${tone}`}><Icon /></div><div><h3>{title}</h3><p>{text}</p></div><button onClick={() => onLearnMore(item)}>Learn More <FiArrowRight /></button></article>;
}

function FooterLinks({ title, links }) {
  return <div className="footer-links"><h3>{title}</h3>{links.map((link) => <a href="#home" key={link}>{link}</a>)}</div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState(null);
  const SelectedIcon = selectedSolution?.[0];
  const jump = (id) => { setMenuOpen(false); scrollTo(id); };
  const sendForm = (event) => { event.preventDefault(); event.currentTarget.reset(); setSubmitted(true); window.setTimeout(() => setSubmitted(false), 2800); };
  const navTarget = ['home', 'solutions', 'industries', 'solutions', 'technology', 'company'];

  return <main>
    <header className="site-header"><div className="nav-shell"><Brand /><nav className={`nav-links${menuOpen ? ' open' : ''}`}>{navItems.map((item, index) => <button key={item} onClick={() => jump(navTarget[index])} className={`nav-link${index === 0 ? ' selected' : ''}`}>{item}{index > 0 && <FiChevronDown />}</button>)}<button className="nav-contact" onClick={() => jump('contact')}>Contact Us</button></nav><button className="demo-button" onClick={() => jump('contact')}>Get a Demo <FiArrowRight /></button><button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX /> : <FiMenu />}</button></div></header>

    <section id="home" className="hero"><div className="hero-inner container"><div className="hero-copy"><span className="hero-chip"><i>✦</i> Arnex Tech · Digital Transformation Partner</span><h1>Creating a <span>future-ready</span><br/>enterprise, today.</h1><p>We help ambitious organisations reimagine operations, customer experiences and growth through technology designed for what comes next.</p><div className="hero-buttons"><Button onClick={() => jump('solutions')}>Explore capabilities</Button><Button ghost onClick={() => jump('contact')}>Connect with us</Button></div></div><Dashboard /></div><div className="container proof-row"><Proof icon={FiGrid} value="50+" text="Projects Delivered"/><Proof icon={FiLayers} value="25+" text="Industries Served"/><Proof icon={FiCheck} value="10+" text="Years of Experience"/><Proof icon={FiActivity} value="24/7" text="Support Available"/></div></section>

    <section id="solutions" className="solutions section"><div className="container"><SectionHeading overline="Our Capabilities" title="Navigate your next." subtitle="Powerful, flexible solutions that help organisations change with confidence." action/><div className="solutions-grid">{solutions.map((item) => <SolutionCard item={item} onLearnMore={setSelectedSolution} key={item[1]} />)}</div></div></section>

    <section id="industries" className="industries section"><div className="container"><SectionHeading overline="Industries" title="Expertise for every industry." subtitle="From complex systems to everyday experiences, we solve the challenges that matter."/><div className="industry-grid">{industries.map(([Icon, label]) => <div className="industry-pill" key={label}><Icon />{label}</div>)}<div className="industry-pill more">••• More</div></div></div></section>

    <section id="company" className="ai-section"><div className="container ai-panel"><div className="why-list"><span className="overline">Why Choose Arnex Tech?</span><h2>Technology that makes a measurable difference.</h2>{[['⌂', 'Custom Built Solutions', 'Tailored software to match your business goals.'], ['♧', 'Scalable & Secure', 'Built with modern technology for maximum security.'], ['◉', 'Cost Effective', 'High quality solutions at affordable pricing.'], ['◷', 'On-Time Delivery', 'We deliver on time, every time.'], ['▢', '24/7 Support', 'Our team is always here to support you.']].map(([mark, title, text]) => <div className="why-item" key={title}><span>{mark}</span><div><b>{title}</b><p>{text}</p></div></div>)}</div><div className="ai-copy"><span className="overline">We Transform Businesses with</span><h2><span>AI-Powered</span><br/>Solutions</h2><p>Bring intelligence to every part of your business with practical AI built around people, process and growth.</p><ul><li>AI-Powered Business Automation</li><li>Real-time Analytics &amp; Insights</li><li>Scalable &amp; Secure Architecture</li><li>Cloud-Based Solutions</li><li>Mobile-First Approach</li><li>Dedicated Support &amp; Maintenance</li></ul><Button onClick={() => jump('contact')}>Explore AI Solutions</Button></div><div className="ai-orbit" aria-hidden="true"><span className="orbit orbit-one"/><span className="orbit orbit-two"/><div className="brain"><div className="brain-lobe one"/><div className="brain-lobe two"/><div className="brain-lobe three"/><i/><i/><i/><i/></div><div className="orbit-label label-one">⌘</div><div className="orbit-label label-two">↗</div><div className="orbit-label label-three">☁</div></div></div></section>

    <section id="technology" className="technology section"><div className="container"><SectionHeading overline="Our Ecosystem" title="Technology that works for people." subtitle="Modern platforms, deep engineering and a focus on real business outcomes."/><div className="tech-grid">{technologies.map(([name, mark]) => <div className="tech" key={name}><span>{mark}</span><small>{name}</small></div>)}</div></div></section>

    <section className="blue-stats"><div className="container"><Proof icon={FiGrid} value="50+" text="Projects Delivered" inverse/><Proof icon={FiLayers} value="25+" text="Industries Served" inverse/><Proof icon={FiCheck} value="10+" text="Partners & Clients" inverse/><Proof icon={FiHeart} value="98%" text="Client Satisfaction" inverse/><Proof icon={FiActivity} value="24/7" text="Support Available" inverse/></div></section>

    <section id="contact" className="bottom-section section"><div className="container bottom-grid"><div className="testimonials"><SectionHeading overline="What Our Clients Say"/><div className="quote-grid">{[['Dr. Ramesh Verma', 'City Hospital, Lucknow', 'Arnex Tech delivered an outstanding hospital management system that transformed our operations.', 'RK'], ['Anita Sharma', 'Sharma Medical Store', 'Professional team, excellent support and very reliable solutions. Highly recommended!', 'AS'], ['Varun Patel', 'CEO, Buildcon Industries', 'Their software delivery and support understanding our unique needs was excellent.', 'VP']].map(([name, company, quote, initials], index) => <div className="quote-card" key={name}><div className="stars">★★★★★</div><p>“{quote}”</p><div><span className={`person person-${index}`}>{initials}</span><b>{name}<small>{company}</small></b></div></div>)}</div></div><div className="faq"><SectionHeading overline="Frequently Asked Questions"/>{faqs.map((faq, index) => <button onClick={() => setActiveFaq(activeFaq === index ? null : index)} className={`faq-item${activeFaq === index ? ' expanded' : ''}`} key={faq}><span>{faq}<em>{activeFaq === index ? 'Absolutely — our team creates tailored software, ERP, mobile and web systems based on your exact business needs.' : ''}</em></span><FiPlus /></button>)}</div><form className="contact-card" onSubmit={sendForm}><span className="overline">Let's Build Something</span><h2>Great Together</h2><input required placeholder="Your Name"/><input required type="email" placeholder="Email Address"/><input placeholder="Phone Number"/><select defaultValue=""><option value="" disabled>Select Service</option><option>Custom Software</option><option>ERP Solution</option><option>Web Development</option><option>AI & Automation</option></select><textarea required placeholder="Your Message" rows="3"/><Button type="submit">{submitted ? 'Message Sent!' : 'Send Message'}</Button><div className="contact-details"><a href="tel:+918853708777"><FiPhone /> +91 88537 08777</a><a href="mailto:techaarnex@gmail.com"><FiMail /> techaarnex@gmail.com</a><a href="https://www.google.com/maps/search/?api=1&query=Sector+19+Vrindavan+Yojana+Lucknow+Uttar+Pradesh+India" target="_blank" rel="noreferrer"><FiMapPin /> Sector 19, Vrindavan Yojana<br/>Lucknow, Uttar Pradesh</a></div></form></div></section>

    {selectedSolution && <div className="solution-modal-backdrop" onMouseDown={() => setSelectedSolution(null)}><section className="solution-modal" role="dialog" aria-modal="true" aria-labelledby="solution-title" onMouseDown={(event) => event.stopPropagation()}><button className="modal-close" aria-label="Close solution details" onClick={() => setSelectedSolution(null)}><FiX /></button><div className={`solution-icon ${selectedSolution[3]}`}><SelectedIcon /></div><span className="overline">Arnex Tech Solution</span><h2 id="solution-title">{selectedSolution[1]}</h2><p>{selectedSolution[2]}</p><div className="modal-features"><span><FiCheck /> Tailored to your workflow</span><span><FiCheck /> Secure &amp; scalable technology</span><span><FiCheck /> Dedicated onboarding &amp; support</span></div><Button onClick={() => { setSelectedSolution(null); jump('contact'); }}>Talk to an Expert</Button></section></div>}

    <section className="connect-section"><div className="container connect-shell"><div className="connect-intro"><span className="overline">Connect with Arnex Tech</span><h2>Let&apos;s start a conversation.</h2><p>Reach our team directly, on the channel that works best for you.</p></div><div className="connect-links"><a className="connect-link email" href="mailto:techaarnex@gmail.com"><FiMail /><span><small>Email us</small><b>techaarnex@gmail.com</b></span><FiArrowRight /></a><a className="connect-link phone" href="tel:+918853708777"><FiPhone /><span><small>Call us</small><b>+91 88537 08777</b></span><FiArrowRight /></a><a className="connect-link whatsapp" href="https://wa.me/918853708777?text=Hi%20Arnex%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer"><FaWhatsapp /><span><small>WhatsApp</small><b>Chat with us</b></span><FiArrowRight /></a><a className="connect-link youtube" href="https://www.youtube.com/@AarnexTech" target="_blank" rel="noreferrer"><FaYoutube /><span><small>YouTube</small><b>@AarnexTech</b></span><FiArrowRight /></a><a className="connect-link instagram" href="https://www.instagram.com/techaarnex/" target="_blank" rel="noreferrer"><FaInstagram /><span><small>Instagram</small><b>@techaarnex</b></span><FiArrowRight /></a><a className="connect-link address" href="https://www.google.com/maps/search/?api=1&query=Sector+19+Vrindavan+Yojana+Lucknow+Uttar+Pradesh+India" target="_blank" rel="noreferrer"><FiMapPin /><span><small>Head office</small><b>Sector 19, Vrindavan Yojana, Lucknow</b></span><FiArrowRight /></a></div></div></section>

    <footer><div className="container footer-grid"><div className="footer-brand"><Brand /><p>We build digital solutions that help businesses grow, automate operations and achieve more.</p><div className="socials"><a aria-label="WhatsApp" href="https://wa.me/918853708777" target="_blank" rel="noreferrer"><FaWhatsapp /></a><a aria-label="Instagram" href="https://www.instagram.com/techaarnex/" target="_blank" rel="noreferrer"><FaInstagram /></a><a aria-label="YouTube" href="https://www.youtube.com/@AarnexTech" target="_blank" rel="noreferrer"><FaYoutube /></a></div></div><FooterLinks title="Solutions" links={['Hospital ERP', 'Pharmacy ERP', 'School ERP', 'College ERP', 'Website Development', 'Mobile App Development']}/><FooterLinks title="Company" links={['About Us', 'Our Team', 'Careers', 'Blog', 'Case Studies', 'Contact Us']}/><FooterLinks title="Support" links={['Help Center', 'FAQs', 'Privacy Policy', 'Terms & Conditions']}/></div><div className="container legal"><span>© 2026 Arnex Tech. All Rights Reserved.</span><span>Made with ♥ in India</span></div></footer>
  </main>;
}
