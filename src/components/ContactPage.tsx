import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiPhone, FiMessageSquare, FiClock, FiCheck, FiSend } from 'react-icons/fi';
import SEO from './SEO';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    isCustomer: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        isCustomer: false
      });
    }, 3000);
  };

  return (
    <>
      <SEO 
        title="Contact Kandu - Get Support & Reach Our Team | AI Job Search Platform"
        description="Contact Kandu for support, questions, or feedback. Get help with our AI job search platform or reach our customer success team."
        keywords="contact kandu, kandu support, kandu customer service, AI job search help, kandu contact form"
        url="https://kandujobs.com/contact"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Kandu",
          "description": "Contact Kandu for support and assistance with our AI job search platform",
          "url": "https://kandujobs.com/contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "Kandu",
            "contactType": "customer service"
          }
        }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Header Navigation */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <a href="/" className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">K</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Kandu
                  </span>
                </a>
              </div>
              <nav className="flex items-center space-x-6">
                <a href="/" className="text-gray-600 hover:text-purple-600 transition-colors">Home</a>
                <a href="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">Blog</a>
                <a href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">About</a>
                <a href="/contact" className="text-purple-600 font-semibold">Contact</a>
                <a href="https://app.kandujobs.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
                  Try Kandu Free
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Get in{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Have questions about our AI job search platform? Need support with your account? 
                We're here to help you succeed in your career journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center"
                  >
                    <div className="text-green-600 mb-4">
                      <FiCheck className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
                    <p className="text-green-700">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="feature">Feature Request</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="isCustomer"
                        name="isCustomer"
                        checked={formData.isCustomer}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                      />
                      <label htmlFor="isCustomer" className="ml-2 text-sm text-gray-700">
                        I am a current Kandu customer
                      </label>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FiSend className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Choose the best way to reach us based on your needs.
                </p>

                <div className="space-y-6">
                  {/* Customer Hotline */}
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-200">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-600 p-3 rounded-full">
                        <FiPhone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Hotline</h3>
                        <p className="text-gray-600 mb-3">
                          Priority support for current Kandu customers
                        </p>
                        <div className="text-2xl font-bold text-purple-600 mb-2">
                          +1 (555) 123-4567
                        </div>
                        <div className="text-sm text-gray-500">
                          Available Mon-Fri, 9AM-6PM EST
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* General Support */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-600 p-3 rounded-full">
                        <FiMail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">General Support</h3>
                        <p className="text-gray-600 mb-3">
                          For general inquiries and non-urgent support
                        </p>
                        <div className="text-lg font-semibold text-blue-600">
                          support@kandujobs.com
                        </div>
                        <div className="text-sm text-gray-500">
                          Response within 24 hours
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Live Chat */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-600 p-3 rounded-full">
                        <FiMessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
                        <p className="text-gray-600 mb-3">
                          Get instant help from our support team
                        </p>
                        <div className="text-lg font-semibold text-green-600">
                          Available 24/7
                        </div>
                        <div className="text-sm text-gray-500">
                          Chat with us anytime
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="mt-8 bg-gray-50 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-600 p-3 rounded-full">
                      <FiClock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Office Hours</h3>
                      <div className="space-y-1 text-gray-600">
                        <div>Monday - Friday: 9:00 AM - 6:00 PM EST</div>
                        <div>Saturday: 10:00 AM - 4:00 PM EST</div>
                        <div>Sunday: Closed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "How quickly will I get a response?",
                  answer: "We typically respond to all inquiries within 24 hours. Customer hotline calls are answered immediately during business hours."
                },
                {
                  question: "What information should I include in my message?",
                  answer: "Please include your name, email, specific question or issue, and if you're a current customer, mention your account details."
                },
                {
                  question: "Can I get technical support over the phone?",
                  answer: "Yes! Current Kandu customers can call our hotline for immediate technical support during business hours."
                },
                {
                  question: "Do you offer support in languages other than English?",
                  answer: "Currently, we provide support in English only. We're working on expanding our language support in the future."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Join thousands of job seekers who are already using Kandu to land their dream jobs.
              </p>
              <motion.a
                href="https://app.kandujobs.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200"
              >
                <span>Try Kandu Free</span>
                <FiArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Kandu
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Your AI-powered job search assistant
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <a href="/blog" className="hover:text-white transition-colors">Blog</a>
              <a href="/about" className="hover:text-white transition-colors">About</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-gray-500 mt-6">
              © 2025 Kandu. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactPage;
