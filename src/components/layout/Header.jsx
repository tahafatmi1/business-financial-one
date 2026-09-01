import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { business } from '../../data/business';
import { allPrograms } from '../../data/loanPrograms';

function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Business Financial One home">
      {business.logoUrl ? <img src={business.logoUrl} alt="Business Financial One" /> : <><span className="brand__mark">BFO</span><span className="brand__name">Business Financial <b>One</b></span></>}
    </Link>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setMenuOpen(false); setDropdownOpen(false); window.scrollTo(0, 0); }, [location.pathname]);
  useEffect(() => {
    const close = (event) => { if (dropRef.current && !dropRef.current.contains(event.target)) setDropdownOpen(false); };
    document.addEventListener('mousedown', close); return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__contact">
            <a href={business.phoneHref}><Phone size={14} />{business.phone}</a>
            <a href={business.emailHref}><Mail size={14} />{business.email}</a>
          </div>
          <div className="socials" aria-label="Social media">
            <a href={business.social.x} target="_blank" rel="noreferrer" aria-label="X / Twitter">X</a>
            <a href={business.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
            <a href={business.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
          </div>
        </div>
      </div>
      <div className="nav-wrap">
        <div className="container nav-inner">
          <Brand />
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
            <NavLink to="/">Home</NavLink>
            <div className="nav-dropdown" ref={dropRef} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button className={location.pathname.startsWith('/loan-programs') ? 'active' : ''} aria-expanded={dropdownOpen} onClick={() => setDropdownOpen(!dropdownOpen)}>Loan Programs <ChevronDown size={15} /></button>
              <div className={`nav-dropdown__menu ${dropdownOpen ? 'is-open' : ''}`}>
                <Link className="nav-dropdown__overview" to="/loan-programs">View All Programs <ArrowRight size={15} /></Link>
                {allPrograms.map((program) => {
                  const Icon = program.icon;
                  return <Link key={program.slug} to={program.slug === 'business-funding' ? '/business-funding' : `/loan-programs/${program.slug}`}><Icon size={17} />{program.shortTitle}</Link>;
                })}
              </div>
            </div>
            <NavLink to="/how-it-works">How It Works</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link className="button button--primary nav-cta" to="/apply">Get Started <ArrowRight size={16} /></Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
