import { Check, FileText, TrendingUp } from 'lucide-react';
import Seo from '../components/common/Seo';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/common/CTASection';
import { businessFunding } from '../data/loanPrograms';

export default function BusinessFunding() {
  const uses = ['Working capital', 'Business expansion', 'Inventory', 'Equipment', 'Payroll', 'Marketing and growth'];
  const docs = ['Basic business application', 'Recent business bank statements', 'Requested financing amount', 'Annual and monthly sales', 'Intended use of funds'];
  return <><Seo title="Business Funding" description="Explore working capital and business growth funding solutions from Business Financial One." /><PageHero eyebrow={businessFunding.eyebrow} title="Business Funding That Moves With Your Goals" text="Explore capital options for working capital, expansion, inventory, equipment, payroll, marketing and other qualified business needs." image={businessFunding.image} />
    <section className="section"><div className="container"><SectionHeading eyebrow="Built for Business" title="Turn the Next Step Into a Real Plan" text="When timing matters, access to the right capital can help a business respond to demand, strengthen operations and invest in sustainable growth." align="center" /><div className="audience-grid funding-grid"><div className="info-panel"><TrendingUp /><h2>Common Uses</h2><ul>{uses.map(x => <li key={x}><Check />{x}</li>)}</ul></div><div className="info-panel"><FileText /><h2>What to Prepare</h2><ul>{docs.map(x => <li key={x}><Check />{x}</li>)}</ul></div></div></div></section>
    <section className="section section--soft"><div className="container centered-copy"><span className="eyebrow">Individual Evaluation</span><h2>Funding Based on Your Business Profile</h2><p>Available amounts, pricing and repayment structures depend on business performance, time in business, bank activity, intended use and provider approval. Submitting a request does not guarantee an offer or funding.</p></div></section><CTASection title="Ready to Explore Business Funding?" text="Tell us about your business, the amount requested and how you plan to use the funds." />
  </>;
}
