import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LoanCard({ program }) {
  const Icon = program.icon;
  const path = program.slug === 'business-funding' ? '/business-funding' : `/loan-programs/${program.slug}`;
  return (
    <article className="loan-card">
      <div className="loan-card__image"><img src={program.image} alt="" /><span className="loan-card__icon"><Icon /></span></div>
      <div className="loan-card__body">
        <h3>{program.title}</h3><p>{program.description}</p>
        <span className="loan-card__highlight">{program.highlight}</span>
        <Link to={path}>Explore program <ArrowUpRight size={17} /></Link>
      </div>
    </article>
  );
}
