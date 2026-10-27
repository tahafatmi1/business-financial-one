export const business = {
  name: 'Business Financial One',
  shortName: 'BFO',
  logoUrl: `${import.meta.env.BASE_URL}assets/bfo-logo.jpeg`,
  phone: '954-840-0497',
  phoneHref: 'tel:+19548400497',
  email: 'ed@busfinancialone.com',
  emailHref: 'mailto:ed@busfinancialone.com',
  forms: {
    endpoint: 'https://api.web3forms.com/submit',
    web3FormsAccessKey: '110ef4ac-4dae-498f-8df0-ea73944b3629'
  },
  applicationUrl: 'https://99966274.my1003app.com/2522574/register',
  guidelinesUrl: 'https://21505619.fs1.hubspotusercontent-na1.net/hubfs/21505619/Website%20-%20Guidelines%20%282025%29/Equity%20First.pdf',
  address: ['7401 Wiles Road', 'Coral Springs, FL 33067'],
  social: {
    facebook: 'https://www.facebook.com/share/1Dca6g3CE6/?mibextid=wwXIfr',
    youtube: 'https://www.youtube.com/@edwardmoise6791',
    x: 'https://twitter.com/edmoise1',
    instagram: 'https://instagram.com/emoney_loans',
    linkedin: 'https://www.linkedin.com/in/ed-moise-2180a819/'
  }
};

export const borrowerFormRoutes = {
  commercial: '/loan-programs/commercial/borrower',
  businessFunding: '/business-funding/borrower'
};

export const underwritingDisclaimer = 'Program terms, eligibility, leverage, rates and closing timelines are subject to underwriting, property type, borrower qualifications and lender approval.';
