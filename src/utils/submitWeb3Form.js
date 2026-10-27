import { business } from '../data/business';

export async function submitWeb3Form(form, subject) {
  const formData = new FormData(form);
  formData.set('access_key', business.forms.web3FormsAccessKey);
  formData.set('subject', subject);
  formData.set('from_name', `${business.name} Website`);

  const response = await fetch(business.forms.endpoint, {
    method: 'POST',
    body: formData
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || 'We could not send your information. Please try again.');
  }

  return result;
}
