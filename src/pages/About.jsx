import { Check, Compass, Eye, HeartHandshake } from 'lucide-react';
import Seo from '../components/common/Seo';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/common/CTASection';
import { images } from '../data/loanPrograms';
import { business } from '../data/business';

export default function About() {
  return <><Seo title="About Us" description="Learn about Business Financial One and our personalized approach to real estate and business financing." /><PageHero eyebrow="About BFO" title="Financing Relationships Built on Clarity" text="Business Financial One helps real estate investors, property developers and businesses explore capital solutions with responsive, personalized service." image={images.about} />
    <section className="section"><div className="container split-feature split-feature--reverse"><div className="split-feature__content"><SectionHeading eyebrow="Who We Are" title="A Practical Partner for Your Next Opportunity" text="BFO connects financing needs with available solutions across real estate investment and business funding. We focus on understanding the transaction, communicating clearly and helping each client navigate the next step." /><div className="benefit-list">{['Investor-focused service', 'Personalized financing strategies', 'Clear and responsive communication', 'A relationship-driven approach'].map(x => <div key={x}><span><Check /></span>{x}</div>)}</div></div><div className="split-feature__visual"><img src={images.commercial} alt="Modern commercial real estate property" /></div></div></section>
    <section className="section section--soft"><div className="container"><SectionHeading eyebrow="Our Approach" title="Focused on Fit, Not a One-Size-Fits-All Answer" align="center" /><div className="values-grid"><div><Compass /><h3>Our Mission</h3><p>To help investors and businesses pursue well-defined opportunities through clear access to flexible financing solutions.</p></div><div><Eye /><h3>Our Vision</h3><p>To be a trusted financing resource known for responsiveness, transparency and thoughtful transaction support.</p></div><div><HeartHandshake /><h3>Our Commitment</h3><p>To listen carefully, communicate honestly and keep clients informed throughout the financing process.</p></div></div></div></section>
    <section className="section"><div className="container program-intro"><div><span className="eyebrow">Based in Coral Springs</span><h2>Business Financial One</h2></div><div><p>{business.address[0]}<br />{business.address[1]}</p><p><a href={business.phoneHref}>{business.phone}</a><br /><a href={business.emailHref}>{business.email}</a></p></div></div></section><CTASection />
  </>;
}
