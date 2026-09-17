import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

export default function CreateBorrower() {
  const [borrowerType, setBorrowerType] = useState('entity');
  const [submitted, setSubmitted] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return <>
    <Seo title="Create Borrower | Fix & Flip" description="Create a borrower profile for Fix & Flip financing with Business Financial One." />
    <section className="borrower-page">
      <form className="borrower-form" onSubmit={submit}>
        <h1>Create Borrower</h1>
        <div className={`borrower-form__notice${submitted ? ' borrower-form__notice--success' : ''}`} role="status"><span aria-hidden="true">ⓘ</span>{submitted ? 'Borrower details are ready for review.' : 'Please add the borrower’s details below'}</div>

        <fieldset className="borrower-form__type">
          <legend className="sr-only">Borrower type</legend>
          <label><input type="radio" name="borrowerType" value="entity" checked={borrowerType === 'entity'} onChange={() => setBorrowerType('entity')} /><span aria-hidden="true" />Entity</label>
          <label><input type="radio" name="borrowerType" value="person" checked={borrowerType === 'person'} onChange={() => setBorrowerType('person')} /><span aria-hidden="true" />Person</label>
        </fieldset>

        <div className="borrower-form__fields">
          <label>{borrowerType === 'entity' ? 'Company Name' : 'Full Name'} <span aria-hidden="true">*</span><input name="borrowerName" required /></label>
          <label>Type<select name="entityType" defaultValue=""><option value="">(blank)</option><option>LLC</option><option>Corporation</option><option>Partnership</option><option>Sole Proprietorship</option><option>Trust</option></select></label>
          <label>Phone<input type="tel" name="phone" placeholder="(000) 000-0000" autoComplete="tel" /></label>
          <label>{borrowerType === 'entity' ? 'EIN Number' : 'SSN Number'} <span aria-hidden="true">*</span><input name="taxId" placeholder={borrowerType === 'entity' ? 'XX-XXXXXXX' : 'XXX-XX-XXXX'} required /></label>

          <h2>Business Address</h2>
          <label>Street Address 1<input name="street1" placeholder="Enter an address" autoComplete="address-line1" /></label>
          <label>Street Address 2<input name="street2" placeholder="Additional street name" autoComplete="address-line2" /></label>
          <div className="borrower-form__row">
            <label>City<input name="city" placeholder="City" autoComplete="address-level2" /></label>
            <label>Province/State<select name="state" defaultValue="" autoComplete="address-level1"><option value="">Select...</option>{states.map((state) => <option key={state}>{state}</option>)}</select></label>
          </div>
          <div className="borrower-form__row">
            <label>Postal Code/Zip<input name="postalCode" placeholder="Postal Code/Zip" autoComplete="postal-code" /></label>
            <label>Country<select name="country" defaultValue="United States" autoComplete="country-name"><option>United States</option></select></label>
          </div>
        </div>

        <div className="borrower-form__actions"><Link to="/loan-programs/fix-flip">Cancel</Link><button type="submit">Create Borrower</button></div>
      </form>
    </section>
  </>;
}
