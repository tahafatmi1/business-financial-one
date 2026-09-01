import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { business } from '../../data/business';

export default function CTASection({ title = 'Ready to Fund Your Next Opportunity?', text = 'Tell us about your real estate investment or business financing needs and take the next step.' }) {
  return (
    <section className="final-cta">
      <div className="container final-cta__inner">
        <div><span className="eyebrow eyebrow--light">LET’S TALK FINANCING</span><h2>{title}</h2><p>{text}</p></div>
        <div className="button-row">
          <Link className="button button--white" to="/apply">Get Started <ArrowRight size={17} /></Link>
          <a className="button button--outline-light" href={business.phoneHref}><Phone size={17} /> Call {business.phone}</a>
        </div>
      </div>
    </section>
  );
}
