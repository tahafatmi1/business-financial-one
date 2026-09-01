import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '../components/common/Seo';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import LoanCard from '../components/loan-programs/LoanCard';
import CTASection from '../components/common/CTASection';
import ScrollReveal from '../components/common/ScrollReveal';
import { allPrograms, images } from '../data/loanPrograms';
import { underwritingDisclaimer } from '../data/business';

export default function LoanPrograms() {
  return <><Seo title="Loan Programs" description="Explore fix-and-flip, construction, DSCR, multifamily, commercial, bridge and business financing programs from BFO." /><PageHero eyebrow="Explore Your Options" title="Loan Programs" text="Financing solutions for investors, developers, landlords and businesses—built to help you move on promising opportunities." image={images.commercial} />
    <section className="section"><div className="container"><SectionHeading eyebrow="Real Estate & Business Capital" title="Find a Program That Fits Your Strategy" text="Every request is evaluated individually. Start with the program closest to your goal and tell us about your transaction." align="center" /><div className="loan-grid loan-grid--overview">{allPrograms.map((program, index) => <ScrollReveal key={program.slug} delay={(index % 3) * 70}><LoanCard program={program} /></ScrollReveal>)}</div><div className="program-disclaimer"><strong>Important:</strong> {underwritingDisclaimer}</div></div></section>
    <section className="section section--soft"><div className="container centered-copy"><span className="eyebrow">Not Sure Where to Start?</span><h2>Tell Us About the Opportunity</h2><p>A BFO financing specialist can help identify which available program may align with your property, business plan and timing.</p><Link to="/contact" className="button button--primary">Speak With a Specialist <ArrowRight size={17} /></Link></div></section><CTASection />
  </>;
}
