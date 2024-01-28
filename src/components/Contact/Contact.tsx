import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulación de envío de datos al servidor
    try {
      const response = await fetch('URL_DEL_BACKEND', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Datos enviados exitosamente');
        // Puedes agregar lógica adicional después de enviar los datos
      } else {
        console.error('Error al enviar los datos');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 border rounded-md">
      <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>
      <br />
      <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
        Email:
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
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
  );
}

export default Contact;
