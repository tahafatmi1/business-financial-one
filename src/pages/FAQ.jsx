import Seo from '../components/common/Seo';
import PageHero from '../components/common/PageHero';
import FAQAccordion from '../components/common/FAQAccordion';
import CTASection from '../components/common/CTASection';
import { images } from '../data/loanPrograms';

export const faqItems = [
  { question: 'What types of financing does Business Financial One offer?', answer: 'BFO works with requests for fix-and-flip, bridge, construction, rental and DSCR, multifamily, commercial real estate, cash-out and business funding solutions.' },
  { question: 'How quickly can a financing request be reviewed?', answer: 'Review time depends on the completeness and complexity of the request. Providing clear property, borrower, budget and exit-strategy details can help the initial evaluation move efficiently.' },
  { question: 'Do I need tax returns?', answer: 'Documentation varies by program. Some property-focused or DSCR scenarios may rely more heavily on the asset and its income, while other programs may require tax returns or additional financial records.' },
  { question: 'Can borrowers with challenging credit situations apply?', answer: 'Yes, you may submit a request. Credit is one part of the overall evaluation, and eligibility remains subject to the complete borrower, property and transaction profile.' },
  { question: 'Do you finance commercial properties?', answer: 'BFO reviews financing requests for select shopping centers, mixed-use, light-industrial and other commercial investment properties, subject to program and underwriting requirements.' },
  { question: 'Do you work with real estate investors?', answer: 'Yes. BFO financing programs are designed around the needs of real estate investors, developers, landlords, multifamily sponsors and commercial property investors.' },
  { question: 'What property types may qualify?', answer: 'Potentially eligible properties include 1–4 unit residential investments, condos, townhomes, multifamily, mixed-use, light industrial, select commercial assets and certain land or development opportunities.' },
  { question: 'Can I finance a fix-and-flip project?', answer: 'Fix-and-flip and bridge options may support acquisition and renovation costs for qualified projects. Leverage, loan size and terms depend on underwriting and the project details.' },
  { question: 'Do you offer ground-up construction financing?', answer: 'BFO reviews ground-up construction requests from qualified builders, developers and investors with a defined budget, plans, experience and exit strategy.' },
  { question: 'Do you provide rental / DSCR financing?', answer: 'Yes. Bridge and longer-term options may be available for qualified 1–4 unit rental acquisitions and refinances, including programs evaluated around property cash flow.' },
  { question: 'Do you finance multifamily properties?', answer: 'BFO considers multifamily acquisition, refinance and value-add requests, including bridge and select long-term structures.' },
  { question: 'Can I refinance an existing investment property?', answer: 'Yes. Rate-and-term or cash-out refinance options may be available depending on equity, property performance, transaction purpose and borrower qualifications.' },
  { question: 'Does BFO provide business funding?', answer: 'Yes. Businesses can request funding for qualified uses such as working capital, inventory, equipment, expansion, payroll and marketing.' },
  { question: 'What documents should I prepare?', answer: 'For real estate, prepare property and transaction details, budget and scope when applicable, income or rent information, borrower/entity information and an exit strategy. Businesses may need an application, bank statements and sales information.' },
  { question: 'How do I get started?', answer: 'Complete the online request form or contact BFO by phone or email. Submitting a request does not obligate you or guarantee approval.' }
];

export default function FAQ() {
  return <><Seo title="Frequently Asked Questions" description="Answers to common questions about BFO real estate financing and business funding." /><PageHero eyebrow="Financing Answers" title="Frequently Asked Questions" text="Clear, practical answers to help you prepare your financing request and understand what may come next." image={images.rental} cta={false} /><section className="section"><div className="container faq-narrow"><FAQAccordion items={faqItems} /></div></section><CTASection title="Still Have a Question?" text="Speak with a BFO financing specialist about your property, project or business need." /></>;
}
