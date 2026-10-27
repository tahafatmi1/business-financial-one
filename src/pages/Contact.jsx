import { useState } from 'react';
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react';
import Seo from '../components/common/Seo';
import PageHero from '../components/common/PageHero';
import { business } from '../data/business';
import { images } from '../data/loanPrograms';
import { submitWeb3Form } from '../utils/submitWeb3Form';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('submitting');
    setError('');

    try {
      await submitWeb3Form(form, 'New BFO Contact Inquiry');
      form.reset();
      setStatus('success');
    } catch (submissionError) {
      setError(submissionError.message);
      setStatus('error');
    }
  };

  return <>
    <Seo title="Contact" description="Contact Business Financial One in Coral Springs, Florida to discuss real estate or business financing." />
    <PageHero eyebrow="Connect With BFO" title="Let’s Talk About Your Financing Needs" text="Reach out with a question or tell us about the opportunity you are working on." image={images.commercial} cta={false} />
    <section className="section">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="eyebrow">Contact Information</span>
          <h2>Business Financial One</h2>
          <p>Speak with a financing specialist about your property, transaction or business capital needs.</p>
          <a href={business.phoneHref}><Phone /> <span><small>Call us</small>{business.phone}</span></a>
          <a href={business.emailHref}><Mail /> <span><small>Email us</small>{business.email}</span></a>
          <div className="contact-address"><MapPin /><span><small>Visit us</small>{business.address[0]}<br />{business.address[1]}</span></div>
          <div className="contact-social">
            <a href={business.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
            <a href={business.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">▶</a>
            <a href={business.social.x} target="_blank" rel="noreferrer" aria-label="X / Twitter">X</a>
            <a href={business.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
            <a href={business.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
          </div>
        </div>
        <div className="contact-form-wrap">
          {status === 'success' ? (
            <div className="form-success" role="status">
              <CheckCircle2 />
              <h2>Message Sent</h2>
              <p>Thank you for contacting BFO. Your message was delivered to our financing team, and we’ll follow up using the information you provided.</p>
              <button className="button button--primary" onClick={() => setStatus('idle')}>Send Another Message</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit}>
              <h2>Send a Message</h2>
              <input className="form-honeypot" type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" aria-hidden="true" />
              <div className="form-grid">
                <label>Full Name<input name="name" required autoComplete="name" /></label>
                <label>Email Address<input type="email" name="email" required autoComplete="email" /></label>
                <label>Phone Number<input type="tel" name="phone" required autoComplete="tel" /></label>
                <label>Company<input name="company" autoComplete="organization" /></label>
                <label className="field-full">Subject
                  <select name="inquiryType" required defaultValue="">
                    <option value="" disabled>Select a subject</option>
                    <option>Real Estate Financing</option>
                    <option>Business Funding</option>
                    <option>Broker / Correspondent Inquiry</option>
                    <option>General Question</option>
                  </select>
                </label>
                <label className="field-full">Message<textarea name="message" rows="5" required /></label>
                <label className="field-full form-consent"><input type="checkbox" name="contactConsent" value="Agreed" required /><span>I agree to be contacted regarding this inquiry.</span></label>
              </div>
              {status === 'error' && <p className="form-error" role="alert">{error} You can also email <a href={business.emailHref}>{business.email}</a>.</p>}
              <button className="button button--primary" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : <>Send Message <Send size={17} /></>}
              </button>
              <p className="form-note">Do not include Social Security numbers, banking credentials or other highly sensitive information.</p>
            </form>
          )}
        </div>
      </div>
    </section>
    <section className="map-placeholder">
      <div><MapPin /><strong>Coral Springs, Florida</strong><span>7401 Wiles Road · Coral Springs, FL 33067</span><a href="https://www.google.com/maps/search/?api=1&query=7401+Wiles+Road+Coral+Springs+FL+33067" target="_blank" rel="noreferrer">Open in Google Maps</a></div>
    </section>
  </>;
}
