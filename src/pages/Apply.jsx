import { ArrowRight, BriefcaseBusiness, Building2, Check, FileText, Landmark, Phone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import { borrowerFormRoutes, business } from '../data/business';

export default function Apply() {
  const prepare = ['Contact and borrower information', 'Property or business details', 'Requested financing amount', 'Transaction purpose and use of funds', 'Supporting documents, when requested'];
  return <><Seo title="Apply for Financing" description="Start a secure real estate or business financing application with Business Financial One." />
    <section className="apply-hero"><div className="container"><span className="eyebrow eyebrow--light">Get Started</span><h1>Choose Your Financing Path</h1><p>Business Funding and Commercial requests begin with the BFO borrower form. All other loan programs continue through the secure My1003App portal.</p></div></section>
    <section className="apply-section"><div className="container"><div className="secure-application">
      <div className="secure-application__main"><span className="secure-application__icon"><ShieldCheck /></span><span className="eyebrow">Financing Applications</span><h2>Select the Program You Need</h2><p>Choose the path that matches your financing request so your information reaches the correct application flow.</p>
        <div className="application-paths">
          <Link to={borrowerFormRoutes.businessFunding}><BriefcaseBusiness /><span><strong>Business Funding</strong><small>Working capital, equipment, inventory and business growth.</small></span><ArrowRight /></Link>
          <Link to={borrowerFormRoutes.commercial}><Building2 /><span><strong>Commercial Real Estate</strong><small>Commercial acquisitions, refinances and investment properties.</small></span><ArrowRight /></Link>
          <a href={business.applicationUrl} target="_blank" rel="noreferrer"><Landmark /><span><strong>All Other Loan Programs</strong><small>Fix & Flip, Construction, Rental/DSCR, Multifamily and Bridge/Cash-Out.</small></span><ArrowRight /></a>
        </div>
        <small>The My1003App option opens on a separate hosted application website.</small>
      </div>
      <aside className="secure-application__aside"><FileText /><h3>What to Have Ready</h3><ul>{prepare.map(item => <li key={item}><Check />{item}</li>)}</ul></aside>
    </div>
    <section className="loan-guidelines" aria-labelledby="loan-guidelines-title"><div className="loan-guidelines__heading"><div><span className="eyebrow">Program Guidelines</span><h2 id="loan-guidelines-title">Equity First Loan Guidelines</h2><p>Review the current program details and eligibility requirements before submitting your financing request.</p></div><a className="button button--outline-dark" href={business.guidelinesUrl} target="_blank" rel="noreferrer">Open PDF <ArrowRight size={17} /></a></div><iframe src={business.guidelinesUrl} title="Equity First loan program guidelines" loading="lazy" /></section>
    <div className="application-help"><div><h2>Have a Question Before You Apply?</h2><p>Speak with a BFO financing specialist about your request or the application process.</p></div><a className="button button--outline-dark" href={business.phoneHref}><Phone size={17} /> Call {business.phone}</a></div>
    </div></section>
  </>;
}
