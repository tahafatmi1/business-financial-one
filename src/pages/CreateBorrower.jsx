import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import { business } from '../data/business';
import { submitWeb3Form } from '../utils/submitWeb3Form';

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

export default function CreateBorrower({ programName, cancelTo }) {
  const [borrowerType, setBorrowerType] = useState('entity');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('submitting');
    setError('');

    try {
      await submitWeb3Form(form, `New BFO ${programName} Request`);
      form.reset();
      setBorrowerType('entity');
      setStatus('success');
    } catch (submissionError) {
      setError(submissionError.message);
      setStatus('error');
    }
  };

  const notice = status === 'success'
    ? 'Your borrower information was sent to Business Financial One. A financing specialist will follow up.'
    : status === 'error'
      ? `${error} Please try again or email ${business.email}.`
      : 'Please add the borrower’s details below. Do not include SSNs, bank credentials or account numbers.';

  return <>
    <Seo title={`Create Borrower | ${programName}`} description={`Create a borrower profile for ${programName} financing with Business Financial One.`} />
    <section className="borrower-page">
      <form className="borrower-form" onSubmit={submit}>
        <h1>Create Borrower</h1>
        <p className="borrower-form__program">{programName}</p>
        <input type="hidden" name="program" value={programName} />
        <input className="form-honeypot" type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" aria-hidden="true" />
        <div className={`borrower-form__notice${status === 'success' ? ' borrower-form__notice--success' : ''}${status === 'error' ? ' borrower-form__notice--error' : ''}`} role={status === 'error' ? 'alert' : 'status'} aria-live="polite">
          <span aria-hidden="true">ⓘ</span>{notice}
        </div>

        <fieldset className="borrower-form__type">
          <legend className="sr-only">Borrower type</legend>
          <label><input type="radio" name="borrowerType" value="entity" checked={borrowerType === 'entity'} onChange={() => setBorrowerType('entity')} /><span aria-hidden="true" />Entity</label>
          <label><input type="radio" name="borrowerType" value="person" checked={borrowerType === 'person'} onChange={() => setBorrowerType('person')} /><span aria-hidden="true" />Person</label>
        </fieldset>

        <div className="borrower-form__fields">
          <label>{borrowerType === 'entity' ? 'Company Name' : 'Full Name'} <span aria-hidden="true">*</span><input name="borrowerName" required autoComplete={borrowerType === 'entity' ? 'organization' : 'name'} /></label>
          {borrowerType === 'entity' && <label>Entity Type<select name="entityType" defaultValue=""><option value="">Select...</option><option>LLC</option><option>Corporation</option><option>Partnership</option><option>Sole Proprietorship</option><option>Trust</option></select></label>}
          <div className="borrower-form__row">
            <label>Phone <span aria-hidden="true">*</span><input type="tel" name="phone" placeholder="(000) 000-0000" autoComplete="tel" required /></label>
            <label>Email <span aria-hidden="true">*</span><input type="email" name="email" placeholder="name@example.com" autoComplete="email" required /></label>
          </div>

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
          <label>Requested Financing Amount<input name="requestedAmount" inputMode="decimal" placeholder="$" /></label>
          <label>Financing Details<textarea name="financingDetails" rows="4" placeholder="Tell us briefly about the property, business or financing request." /></label>
          <label className="form-consent"><input type="checkbox" name="contactConsent" value="Agreed" required /><span>I agree to be contacted regarding this financing request.</span></label>
        </div>

        <div className="borrower-form__actions">
          <Link to={cancelTo}>Cancel</Link>
          <button type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Submit Request'}</button>
        </div>
      </form>
    </section>
  </>;
}
