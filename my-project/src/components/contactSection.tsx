import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FaUpwork } from "react-icons/fa6";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = 'Full Name is required';
    if (!formData.email) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email Address is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const response = await fetch('https://formspree.io/f/mvoeywlo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });

        if (response.ok) {
          console.log('Form submitted successfully');
          setSubmitted(true);
        } else {
          console.error('Failed to submit form');
        }
      } catch (error) {
        console.error('Error submitting form', error);
      }
    }
  };

  return (
    <div id='contact' className="bg-black text-white py-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8 mx-2">
          <h1 className="text-4xl font-bold">Let's work together</h1>
          <p className="text-gray-400">
            I'm here to bring your vision to life with compelling video content. 
            Whether it's a specific project or general creative assistance, let's collaborate and create something amazing. Get in touch today!
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-xl text-gray-400" />
              <span className="text-lg text-gray-400">aharmuth33@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaUpwork className="text-xl text-gray-400" />
              <a href='https://www.upwork.com/freelancers/~01595a84b194afd93f?mp_source=share' className="text-lg text-gray-400">Profile</a>
            </div>
          </div>
        </div>
        <div>
          {submitted ? (
            <div className="text-white bg-gray-900 border border-green-500 p-4 rounded-lg">
            Thank you for your message!
          </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 mx-2">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 text-gray-200 py-2 focus:outline-none focus:border-green-500"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 text-gray-200 py-2 focus:outline-none focus:border-green-500"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 text-gray-200 py-2 focus:outline-none focus:border-green-500"
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-green-500 text-black font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300 ease-in-out"
                  disabled={!formData.name || !formData.email || !formData.message}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
