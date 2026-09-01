import { Navigate, Link, useParams } from 'react-router-dom';
import { Check, ArrowRight, Users, Target, Building2 } from 'lucide-react';
import Seo from '../components/common/Seo';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import FAQAccordion from '../components/common/FAQAccordion';
import CTASection from '../components/common/CTASection';
import ScrollReveal from '../components/common/ScrollReveal';
import { loanPrograms } from '../data/loanPrograms';
import { underwritingDisclaimer } from '../data/business';

export default function ProgramDetail() {
  const { slug } = useParams();
  const program = loanPrograms.find((item) => item.slug === slug);
  if (!program) return <Navigate to="/404" replace />;
  const faqs = [
    { question: `Who may be a fit for ${program.shortTitle} financing?`, answer: `Potential fit depends on the property, transaction, borrower experience, financial profile and exit strategy. BFO reviews each ${program.shortTitle.toLowerCase()} request individually.` },
    { question: 'How much financing may be available?', answer: `Indicative parameters are shown on this page, but final loan sizing depends on underwriting, valuation, property type, borrower qualifications and lender approval.` },
    { question: 'What documents should I prepare?', answer: 'Be ready to share transaction details, entity and borrower information, property documents, budget or rent information when applicable, and a clear exit strategy.' },
    { question: 'How do I request a quote?', answer: 'Complete the short BFO application with the known details of your opportunity. A financing specialist can then follow up to discuss next steps.' }
  ];
  return <><Seo title={`${program.title} Financing`} description={`${program.description} Explore indicative program highlights and request financing from Business Financial One.`} /><PageHero eyebrow={program.eyebrow} title={program.title} text={program.intro} image={program.image} />
    <section className="section"><div className="container program-intro"><ScrollReveal><span className="eyebrow">Program Overview</span><h2>Capital Structured Around the Opportunity</h2></ScrollReveal><ScrollReveal><p>{program.description} BFO helps you explore structures suited to the asset, scope, experience and planned path to repayment.</p><Link className="text-link" to="/apply">Discuss your project <ArrowRight /></Link></ScrollReveal></div></section>
    <section className="section section--soft"><div className="container"><div className="audience-grid"><ScrollReveal><div className="info-panel"><Users /><h2>Who It’s For</h2><ul>{program.audience.map(x => <li key={x}><Check />{x}</li>)}</ul></div></ScrollReveal><ScrollReveal><div className="info-panel"><Target /><h2>Common Use Cases</h2><ul>{program.uses.map(x => <li key={x}><Check />{x}</li>)}</ul></div></ScrollReveal></div></div></section>
    <section className="section"><div className="container program-details"><div><SectionHeading eyebrow="Indicative Highlights" title={`${program.shortTitle} Financing Details`} text="Use these figures as an initial guide. Actual terms depend on the complete transaction and underwriting review." /><div className="details-table" role="table" aria-label={`${program.title} indicative details`}>{program.details.map(([label, value]) => <div role="row" key={label}><span role="cell">{label}</span><strong role="cell">{value}</strong></div>)}</div><p className="fine-print">{underwritingDisclaimer}</p></div><div className="property-panel"><Building2 /><h3>Eligible Property Types</h3><p>Property eligibility varies by program and transaction.</p><ul>{program.properties.map(x => <li key={x}>{x}</li>)}</ul></div></div></section>
    <section className="section process-dark"><div className="container"><SectionHeading eyebrow="From Request to Closing" title="A Focused Financing Process" light align="center" /><div className="mini-process">{['Share the Opportunity', 'Initial Review', 'Discuss Options', 'Underwriting', 'Move Toward Closing'].map((x, i) => <div key={x}><span>{i + 1}</span><h3>{x}</h3></div>)}</div></div></section>
    <section className="section"><div className="container faq-narrow"><SectionHeading eyebrow="Program FAQ" title={`Questions About ${program.shortTitle}`} align="center" /><FAQAccordion items={faqs} /></div></section><CTASection title={`Explore ${program.shortTitle} Financing`} text="Share the details you know today. We’ll review the opportunity and discuss possible next steps." />
  </>;
}
