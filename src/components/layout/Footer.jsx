import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { business } from '../../data/business';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand"><div className="footer-logo"><span>BFO</span> Business Financial One</div><p>Investor-focused real estate and business financing solutions structured around real opportunities.</p><div className="socials socials--footer"><a href={business.social.x} target="_blank" rel="noreferrer" aria-label="X / Twitter">X</a><a href={business.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">◎</a><a href={business.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a></div></div>
        <div><h3>Loan Programs</h3><ul><li><Link to="/loan-programs/fix-flip">Fix & Flip</Link></li><li><Link to="/loan-programs/construction">Construction</Link></li><li><Link to="/loan-programs/rental-dscr">Rental / DSCR</Link></li><li><Link to="/loan-programs/multifamily">Multifamily</Link></li><li><Link to="/loan-programs/commercial">Commercial</Link></li><li><Link to="/business-funding">Business Funding</Link></li></ul></div>
        <div><h3>Company</h3><ul><li><Link to="/about">About</Link></li><li><Link to="/how-it-works">How It Works</Link></li><li><Link to="/faq">FAQ</Link></li><li><Link to="/contact">Contact</Link></li><li><Link to="/apply">Get Started</Link></li></ul></div>
        <div><h3>Contact</h3><ul className="footer-contact"><li><Phone /><a href={business.phoneHref}>{business.phone}</a></li><li><Mail /><a href={business.emailHref}>{business.email}</a></li><li><MapPin /><span>{business.address[0]}<br />{business.address[1]}</span></li></ul></div>
      </div>
      <div className="container footer-disclaimer">Financing is subject to underwriting and approval. Program terms, rates, leverage, loan amounts and closing timelines may vary based on borrower qualifications, property type, transaction structure and lender requirements. Information on this website is for general informational purposes and does not constitute a commitment to lend.</div>
      <div className="footer-bottom"><div className="container"><span>© {new Date().getFullYear()} Business Financial One. All Rights Reserved.</span><div><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms & Conditions</Link></div></div></div>
      <button className="back-to-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp /></button>
    </footer>
  );
}
