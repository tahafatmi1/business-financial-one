import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, Building, Clock3, Layers3, Handshake, Gauge, SlidersHorizontal, UserRound, Check, Home as HomeIcon, Warehouse, Map, BriefcaseBusiness, KeyRound } from 'lucide-react';
import Seo from '../components/common/Seo';
import ScrollReveal from '../components/common/ScrollReveal';
import SectionHeading from '../components/common/SectionHeading';
import LoanCard from '../components/loan-programs/LoanCard';
import FAQAccordion from '../components/common/FAQAccordion';
import CTASection from '../components/common/CTASection';
import { allPrograms, images } from '../data/loanPrograms';
import { underwritingDisclaimer } from '../data/business';
import { faqItems } from './FAQ';

const trustItems = [
  [Clock3, 'Fast Financing Process', 'A streamlined path from request to available options.'],
  [SlidersHorizontal, 'Flexible Structures', 'Financing shaped around the asset and transaction.'],
  [Building, 'Investor Focus', 'Programs for acquisition, renovation and long-term holds.'],
  [BriefcaseBusiness, 'Business Funding', 'Capital options designed to support business growth.']
];

function Counter({ value, suffix = '' }) {
  const [shown, setShown] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setShown(value); return; }
      const start = performance.now();
      const run = (time) => { const p = Math.min((time - start) / 900, 1); setShown(Math.round(value * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(run); };
      requestAnimationFrame(run); observer.unobserve(node);
    }, { threshold: .5 });
    observer.observe(node); return () => observer.disconnect();
  }, [value]);
  return <span ref={ref}>{shown}{suffix}</span>;
}

export default function Home() {
  return (
    <>
      <Seo title="Real Estate & Business Financing" description="Flexible financing for real estate investors, developers, landlords and business owners from Business Financial One in Coral Springs, Florida." />
      <section className="home-hero" style={{ '--hero-image': `url(${images.hero})` }}>
        <div className="container home-hero__content">
          <span className="eyebrow eyebrow--light hero-enter">Real Estate & Business Financing</span>
          <h1 className="hero-enter hero-enter--2">Flexible Capital for <em>Serious</em> Real Estate Investors</h1>
          <p className="hero-enter hero-enter--3">From fix-and-flip and ground-up construction to rental, multifamily, commercial and business financing, BFO helps you pursue the opportunity in front of you.</p>
          <div className="button-row hero-enter hero-enter--4"><Link to="/apply" className="button button--red">Get Started <ArrowRight size={17} /></Link><Link to="/loan-programs" className="button button--outline-light">Explore Loan Programs</Link></div>
          <div className="hero-trust hero-enter hero-enter--4"><span><BadgeCheck /> Fast Decisions</span><span><BadgeCheck /> Flexible Financing</span><span><BadgeCheck /> Investor-Focused Solutions</span></div>
        </div>
        <a href="#programs" className="scroll-cue" aria-label="Scroll to loan programs"><span /></a>
      </section>

      <section className="trust-bar"><div className="container trust-grid">{trustItems.map(([Icon, title, text], index) => <ScrollReveal key={title} delay={index * 80}><div className="trust-card"><Icon /><div><h3>{title}</h3><p>{text}</p></div></div></ScrollReveal>)}</div></section>

      <section className="section" id="programs"><div className="container">
        <ScrollReveal><SectionHeading eyebrow="Financing Solutions" title="Financing Built Around Your Investment Strategy" text="Explore focused capital solutions for acquisitions, construction, rentals, commercial assets and business growth." align="center" /></ScrollReveal>
        <div className="loan-grid">{allPrograms.map((program, index) => <ScrollReveal key={program.slug} delay={(index % 3) * 70}><LoanCard program={program} /></ScrollReveal>)}</div>
      </div></section>

      <section className="section section--soft"><div className="container split-feature">
        <ScrollReveal className="split-feature__visual"><img src={images.about} alt="Business professionals discussing a real estate financing opportunity" /><div className="image-note"><strong>Opportunity first.</strong><span>Financing structured around the deal.</span></div></ScrollReveal>
        <ScrollReveal className="split-feature__content"><SectionHeading eyebrow="Why Business Financial One" title="Financing Designed for Opportunities Traditional Lending May Miss" text="We take a practical, transaction-focused approach to helping investors and business owners understand available paths forward." />
          <div className="benefit-list">{['Flexible financing structures', 'Streamlined evaluation', 'Investor-focused solutions', 'Personalized support'].map((item) => <div key={item}><span><Check /></span>{item}</div>)}</div>
          <Link className="text-link" to="/about">Learn about BFO <ArrowRight /></Link>
        </ScrollReveal>
      </div></section>

      <section className="section stats-section"><div className="container">
        <ScrollReveal><SectionHeading eyebrow="Program Snapshot" title="Financing Parameters at a Glance" text="Indicative ranges across select BFO programs." align="center" light /></ScrollReveal>
        <div className="stats-grid"><div><strong>Up to $<Counter value={20} />M</strong><span>Select financing programs</span></div><div><strong>Up to <Counter value={75} suffix="%" /></strong><span>LTV on select programs</span></div><div><strong><Counter value={12} />–24 Months</strong><span>Typical short-term structures</span></div><div><strong>Up to <Counter value={30} /> Years</strong><span>Long-term options on select programs</span></div></div>
        <p className="stats-disclaimer">{underwritingDisclaimer}</p>
      </div></section>

      <section className="section"><div className="container"><ScrollReveal><SectionHeading eyebrow="A Clearer Path Forward" title="How Financing with BFO Works" text="A focused process to help you move from an initial request toward an appropriate financing solution." align="center" /></ScrollReveal>
        <div className="process-line">{['Tell Us About Your Deal', 'We Review Your Financing Needs', 'Receive Available Financing Options', 'Move Toward Closing'].map((step, index) => <ScrollReveal key={step} delay={index * 90}><div className="process-step"><span>0{index + 1}</span><h3>{step}</h3><p>{['Share your property or business opportunity.', 'We evaluate the request and key details.', 'Discuss structures that may fit your goals.', 'Complete documentation and underwriting.'][index]}</p></div></ScrollReveal>)}</div>
        <div className="center"><Link className="button button--primary" to="/apply">Start Your Application <ArrowRight size={17} /></Link></div>
      </div></section>

      <section className="section section--soft"><div className="container"><ScrollReveal><SectionHeading eyebrow="Property Types" title="Capital Across a Range of Real Estate Assets" text="From residential investments to select commercial and development opportunities." /></ScrollReveal>
        <div className="property-grid">{[[HomeIcon, 'Residential Investment'], [KeyIcon, '1–4 Unit Rentals'], [Building, 'Multifamily'], [StoreIcon, 'Commercial'], [Layers3, 'Mixed-Use'], [Warehouse, 'Light Industrial'], [Map, 'Land / Development']].map(([Icon, label]) => <div className="property-item" key={label}><Icon /><span>{label}</span><ArrowRight /></div>)}</div>
      </div></section>

      <section className="business-banner"><div className="container"><div><span className="eyebrow eyebrow--light">Beyond Real Estate</span><h2>Need Capital for Your Business?</h2><p>Explore funding for working capital, expansion, equipment, inventory, payroll, marketing and the next stage of business growth.</p></div><div className="button-row"><Link className="button button--white" to="/business-funding">Explore Business Funding</Link><Link className="button button--outline-light" to="/apply">Request Funding <ArrowRight size={17} /></Link></div></div></section>

      <section className="section"><div className="container"><ScrollReveal><SectionHeading eyebrow="The BFO Difference" title="Why Investors Choose BFO" align="center" /></ScrollReveal><div className="why-grid">{[[Gauge, 'Speed', 'A responsive process built for real-world deal timelines.'], [SlidersHorizontal, 'Flexibility', 'Multiple structures for a range of transaction profiles.'], [UserRound, 'Personal Service', 'Clear communication with a financing specialist.'], [Handshake, 'Multiple Options', 'Real estate and business financing under one roof.']].map(([Icon, title, text]) => <div key={title}><Icon /><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

      <section className="section section--soft"><div className="container faq-preview"><ScrollReveal><SectionHeading eyebrow="Common Questions" title="Straight Answers About Financing" text="Get a quick overview, then speak with BFO about the specifics of your request." /><Link className="text-link" to="/faq">View all FAQs <ArrowRight /></Link></ScrollReveal><ScrollReveal><FAQAccordion items={faqItems.slice(0, 5)} /></ScrollReveal></div></section>
      <CTASection />
    </>
  );
}

function KeyIcon(props) { return <KeyRound {...props} />; }
function StoreIcon(props) { return <Building {...props} />; }
