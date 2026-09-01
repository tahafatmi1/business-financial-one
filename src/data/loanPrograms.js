import { Hammer, Building2, KeyRound, Landmark, Store, Banknote, BriefcaseBusiness } from 'lucide-react';

export const images = {
  hero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85',
  fixFlip: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
  construction: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  rental: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  multifamily: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
  commercial: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  bridge: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
  business: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
  about: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80'
};

export const loanPrograms = [
  {
    slug: 'fix-flip', title: 'Fix & Flip / Bridge', shortTitle: 'Fix & Flip', icon: Hammer, image: images.fixFlip,
    description: 'Short-term capital for acquiring, renovating and repositioning investment properties.',
    highlight: 'Loans up to $10M', eyebrow: 'Investor Bridge Financing',
    intro: 'Move from acquisition to renovation with an investor-focused financing structure designed around the property and your exit strategy.',
    audience: ['Fix-and-flip investors', 'Experienced and first-time investors', 'Real estate developers', 'Borrowers pursuing time-sensitive acquisitions'],
    uses: ['Property acquisition', 'Renovation and rehabilitation', 'Short-term bridge financing', 'Value-add investment projects'],
    details: [['Loan amount', 'Up to $10M'], ['Rehab costs', 'Up to 100% on select scenarios'], ['Leverage', 'Up to 75% LTV'], ['After-repair value', 'Up to 75% ARV'], ['Typical term', 'Approximately 12–24 months']],
    properties: ['Single-family investment', '2–4 unit residential', 'Townhomes', 'Condos', 'Select multifamily']
  },
  {
    slug: 'construction', title: 'Ground-Up Construction', shortTitle: 'Construction', icon: Building2, image: images.construction,
    description: 'Capital for residential development and new construction investment opportunities.',
    highlight: 'Loans up to $20M', eyebrow: 'Development Financing',
    intro: 'Financing for qualified builders and investors pursuing ground-up residential construction and development projects.',
    audience: ['Property developers', 'Experienced builders', 'Real estate investors', 'Sponsors with defined project plans'],
    uses: ['Land acquisition with development', 'Vertical construction', 'Residential development', 'New-build investment projects'],
    details: [['Loan amount', 'Up to $20M'], ['Hard costs', 'Up to 80%'], ['Leverage', 'Up to 75% LTV'], ['Completed value', 'Up to 75% ARV'], ['Typical term', 'Up to approximately 24 months']],
    properties: ['Single-family homes', 'Townhome projects', 'Residential developments', 'Select multifamily', 'Land with approved plans']
  },
  {
    slug: 'rental-dscr', title: 'Rental Property / DSCR', shortTitle: 'Rental / DSCR', icon: KeyRound, image: images.rental,
    description: 'Bridge and long-term options for buy-and-hold rental property investors.',
    highlight: 'Long-term options up to 30 years', eyebrow: 'Buy-and-Hold Financing',
    intro: 'Build or refinance your rental portfolio with financing evaluated around the property’s income potential and transaction profile.',
    audience: ['Buy-and-hold investors', 'Rental portfolio owners', 'Landlords', 'Investors refinancing stabilized properties'],
    uses: ['Rental acquisitions', 'Rate-and-term refinancing', 'Cash-out refinancing', 'Portfolio growth'],
    details: [['Loan amount', 'Up to $10M'], ['Leverage', 'Up to 75% LTV'], ['Units', '1–4 unit properties'], ['Structures', 'Bridge or long-term'], ['Long-term options', 'Up to 30 years']],
    properties: ['Single-family rentals', 'Duplexes', 'Triplexes', 'Four-unit properties', 'Select condos and townhomes']
  },
  {
    slug: 'multifamily', title: 'Multifamily Financing', shortTitle: 'Multifamily', icon: Landmark, image: images.multifamily,
    description: 'Acquisition, refinance and value-add financing for apartment properties.',
    highlight: 'Properties up to ~100 units', eyebrow: 'Apartment Financing',
    intro: 'Flexible bridge and longer-term structures for multifamily acquisitions, refinances and value-add business plans.',
    audience: ['Multifamily investors', 'Apartment operators', 'Value-add sponsors', 'Rental portfolio owners'],
    uses: ['Apartment acquisition', 'Value-add renovation', 'Portfolio refinance', 'Stabilization and bridge needs'],
    details: [['Loan amount', 'Up to $20M'], ['Property size', 'Up to approximately 100 units'], ['Leverage', 'Up to 75% LTV'], ['Transactions', 'Purchase and refinance'], ['Structures', 'Bridge and long-term options']],
    properties: ['Garden apartments', 'Mid-rise apartments', 'Mixed-use with residential', 'Small-balance multifamily', 'Rental communities']
  },
  {
    slug: 'commercial', title: 'Commercial Real Estate', shortTitle: 'Commercial', icon: Store, image: images.commercial,
    description: 'Purchase and refinance solutions for select income-producing commercial assets.',
    highlight: 'Loans up to $10M', eyebrow: 'Commercial Property Financing',
    intro: 'Capital solutions for investors acquiring, refinancing or repositioning select commercial real estate assets.',
    audience: ['Commercial investors', 'Business owners acquiring real estate', 'Property developers', 'Experienced sponsors'],
    uses: ['Commercial acquisition', 'Investment property refinance', 'Transitional bridge needs', 'Property repositioning'],
    details: [['Loan amount', 'Up to $10M'], ['Leverage', 'Up to 70% LTV'], ['Transactions', 'Purchase and refinance'], ['Structures', 'Bridge financing'], ['Additional options', 'Long-term financing available']],
    properties: ['Shopping centers', 'Mixed-use properties', 'Light industrial', 'Office assets', 'Select special-use properties']
  },
  {
    slug: 'bridge-cashout', title: 'Bridge / Cash-Out', shortTitle: 'Bridge / Cash-Out', icon: Banknote, image: images.bridge,
    description: 'Unlock investment-property equity or bridge a transition with short-term financing.',
    highlight: 'Flexible short-term structures', eyebrow: 'Transitional Capital',
    intro: 'Access equity or secure short-term liquidity for an acquisition, refinance or time-sensitive investment opportunity.',
    audience: ['Property investors', 'Portfolio owners', 'Sponsors in transition', 'Borrowers needing short-term liquidity'],
    uses: ['Cash-out refinance', 'Acquisition funding', 'Maturity payoff', 'Transitional financing'],
    details: [['Loan sizing', 'Based on transaction and collateral'], ['Transactions', 'Purchase or refinance'], ['Proceeds', 'Cash-out may be available'], ['Term', 'Short-term structures'], ['Evaluation', 'Property and borrower profile']],
    properties: ['Residential investment', 'Multifamily', 'Mixed-use', 'Commercial', 'Select land and development']
  }
];

export const businessFunding = {
  slug: 'business-funding', title: 'Business Funding', shortTitle: 'Business Funding', icon: BriefcaseBusiness, image: images.business,
  description: 'Capital options to support working capital, equipment, inventory and business growth.',
  highlight: 'Solutions built around business needs', eyebrow: 'Capital for Business Growth'
};

export const allPrograms = [...loanPrograms, businessFunding];
