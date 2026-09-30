import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { business } from '../../data/business';

export default function CTASection({ title = 'Ready to Fund Your Next Opportunity?', text = 'Tell us about your real estate investment or business financing needs and take the next step.', primaryTo = '/apply', primaryUrl, primaryLabel = 'Get Started' }) {
  const primaryAction = primaryUrl
    ? <a className="button button--white" href={primaryUrl} target="_blank" rel="noreferrer">{primaryLabel} <ArrowRight size={17} /></a>
    : <Link className="button button--white" to={primaryTo}>{primaryLabel} <ArrowRight size={17} /></Link>;
  return (
    <section className="final-cta">
      <div className="container final-cta__inner">
        <div><span className="eyebrow eyebrow--light">LET’S TALK FINANCING</span><h2>{title}</h2><p>{text}</p></div>
        <div className="button-row">
          {primaryAction}
          <a className="button button--outline-light" href={business.phoneHref}><Phone size={17} /> Call {business.phone}</a>
        </div>
      </div>
    </section>
  );
}
