import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '' });
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus({ loading: false, success: false, error: t('contact_error') });
    }
  };

  return (
    <section id="contact">
      <div className="ContactPage py-16 bg-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0A2647] mb-1">
            {t('contact_title')}
          </h1>
          <div className="w-10 h-0.5 bg-[#0A2647] mx-auto mb-6"></div>

          <p className="text-[#0A2647] font-semibold mb-8">
            {t('contact_subtitle')}
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto"
          >
            <input
              type="text"
              name="name"
              placeholder={t('contact_name_placeholder')}
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full sm:w-auto flex-1 px-4 py-3 rounded-full border border-gray-300 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <input
              type="email"
              name="email"
              placeholder={t('contact_email_placeholder')}
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full sm:w-auto flex-1 px-4 py-3 rounded-full border border-gray-300 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <button
              type="submit"
              disabled={status.loading}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#0A2647] text-white text-sm font-semibold hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status.loading ? t('contact_sending') : t('contact_submit')}
            </button>
          </form>

          {status.success && (
            <p className="text-green-600 font-medium mt-4">
              {t('contact_success')}
            </p>
          )}
          {status.error && (
            <p className="text-red-600 font-medium mt-4">
              {status.error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;