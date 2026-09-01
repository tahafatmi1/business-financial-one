import { Home, BriefcaseBusiness, Check } from 'lucide-react';
import Seo from '../components/common/Seo';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/common/CTASection';
import { images } from '../data/loanPrograms';

export default function HowItWorks() {
  const steps = [['01', 'Submit Financing Request', 'Tell us about the property, project or business and the capital you are seeking.'], ['02', 'Initial Review', 'We review the request, transaction profile and details provided.'], ['03', 'Discuss Available Options', 'A financing specialist discusses potential structures and next steps.'], ['04', 'Documentation & Underwriting', 'Submit applicable property, borrower, entity or business documents for full review.'], ['05', 'Closing / Funding', 'Once approved and final conditions are met, the transaction can move toward closing or funding.']];
  const realEstate = ['Property address and type', 'Purchase or refinance', 'Requested amount and estimated value', 'Purchase price, if applicable', 'Rehab budget and ARV, if applicable', 'Exit strategy and credit information', 'Rental income and expenses, if applicable'];
  const business = ['Business and entity information', 'Requested funding amount', 'Annual and monthly sales', 'Recent business bank statements', 'Purpose and planned use of funds'];
  return <><Seo title="How It Works" description="Understand the BFO financing process, from initial request through documentation, underwriting and closing." /><PageHero eyebrow="The Financing Journey" title="A Clear Path From Request to Closing" text="Know what to expect and what to prepare at every stage of the BFO financing process." image={images.fixFlip} />
    <section className="section"><div className="container"><SectionHeading eyebrow="Five Focused Steps" title="How the Process Works" align="center" /><div className="journey">{steps.map(([num, title, text]) => <div key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div><p className="fine-print center-text">Timing varies by program, documentation, appraisal, title, underwriting and other third-party requirements.</p></div></section>
    <section className="section section--soft"><div className="container"><SectionHeading eyebrow="Prepare With Confidence" title="What We’ll Ask For" text="You do not need every detail to begin, but sharing complete, accurate information helps the review." align="center" /><div className="audience-grid"><div className="info-panel"><Home /><h2>Real Estate Requests</h2><ul>{realEstate.map(x => <li key={x}><Check />{x}</li>)}</ul></div><div className="info-panel"><BriefcaseBusiness /><h2>Business Requests</h2><ul>{business.map(x => <li key={x}><Check />{x}</li>)}</ul></div></div></div></section><CTASection title="Start With What You Know" text="Complete the financing request in a few focused steps. You can discuss additional details with a BFO specialist." />
  </>;
}
