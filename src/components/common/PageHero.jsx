import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PageHero({ eyebrow, title, text, image, cta = true }) {
  return (
    <section className="page-hero" style={{ '--hero-image': `url(${image})` }}>
      <div className="container page-hero__content">
        <span className="eyebrow eyebrow--light">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        {cta && <Link to="/apply" className="button button--red">Request Financing <ArrowRight size={17} /></Link>}
      </div>
    </section>
  );
}
