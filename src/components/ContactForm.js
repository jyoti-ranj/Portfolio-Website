import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
    };
    console.log("Form Data: ", formData); // Logs the form data
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log("Response status: ", response.status); // Logs the response status

      const data = await response.json();
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        console.log("Response data: ", data); // Logs the response data for more details
        alert('Failed to send message: ' + data);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while sending the message');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
