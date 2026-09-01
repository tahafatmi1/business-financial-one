import { ArrowRight, Check, FileText, Phone, ShieldCheck } from 'lucide-react';
import Seo from '../components/common/Seo';
import { business } from '../data/business';

export default function Apply() {
  const prepare = ['Contact and borrower information', 'Property or business details', 'Requested financing amount', 'Transaction purpose and use of funds', 'Supporting documents, when requested'];
  return <><Seo title="Apply for Financing" description="Start a secure real estate or business financing application with Business Financial One." />
    <section className="apply-hero"><div className="container"><span className="eyebrow eyebrow--light">Get Started</span><h1>Tell Us About Your Opportunity</h1><p>Continue to BFO’s hosted application portal to securely begin your financing request.</p></div></section>
    <section className="apply-section"><div className="container"><div className="secure-application">
      <div className="secure-application__main"><span className="secure-application__icon"><ShieldCheck /></span><span className="eyebrow">Secure Application Portal</span><h2>Start Your Financing Application</h2><p>The application opens on the secure portal provided by Business Financial One. You may be asked to create an applicant login before entering your financing details.</p><a className="button button--primary" href={business.applicationUrl} target="_blank" rel="noreferrer">Continue to Secure Application <ArrowRight size={17} /></a><small>You’ll leave busfinancialone.com and continue on the hosted application website.</small></div>
      <aside className="secure-application__aside"><FileText /><h3>What to Have Ready</h3><ul>{prepare.map(item => <li key={item}><Check />{item}</li>)}</ul></aside>
    </div>
    <div className="application-help"><div><h2>Have a Question Before You Apply?</h2><p>Speak with a BFO financing specialist about your request or the application process.</p></div><a className="button button--outline-dark" href={business.phoneHref}><Phone size={17} /> Call {business.phone}</a></div>
    </div></section>
  </>;
}
