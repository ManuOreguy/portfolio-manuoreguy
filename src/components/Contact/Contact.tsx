import { useState } from 'react';

interface FormData {
  subject: string;
  email: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    subject: '',
    email: '',
    message: ''
  });

  const handleChange = () => {
    setFormData({ ...formData });
  };

  const handleSubmit = () => {
    console.log('Enviado');
  };

  return (
    <div className="pb-20">
      <h2 className="text-center text-lg font-bold text-violet-500 pb-5">Get in touch</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 border rounded-md">
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-600">
          Subject:
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>
        <br />
        <label htmlFor="message" className="block text-sm font-semibold text-gray-600">
          Message:
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>
        <br />
        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contact;
