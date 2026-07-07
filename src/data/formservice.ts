import type { ContactFormData } from '../types';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

interface SubmitResult {
  success: boolean;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<SubmitResult> {
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `New Inquiry from ${data.name} - ${data.company || 'N/A'}`,
        from_name: data.name,
        ...data,
      }),
    });

    const result = await res.json();

    if (res.ok && result.success) {
      return { success: true, message: 'Message sent successfully!' };
    }

    return { success: false, message: result.message || 'Something went wrong.' };
  } catch {
    return { success: false, message: 'Network error. Please try again.' };
  }
}
