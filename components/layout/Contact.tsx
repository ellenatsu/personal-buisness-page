import React from "react";
import { SectionWrapper } from "../common/SectionWrapper";
import ContactForm from "../common/ContactForm";

const Contact = () => {
  return (
    <SectionWrapper id="contact" hasDivider>
      <div className="max-w-3xl mx-auto space-y-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>

        {/* Fast Contact */}
        <div className="space-y-4 p-6 border rounded-lg bg-white shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900">
            Need Quick Help?
          </h3>
          <p className="text-gray-600">
            Message me directly on WhatsApp for faster response.
          </p>

          {/* WhatsApp Button */}
          <a
            href="enterlinkhere"
            target="_blank"
            className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Detailed Quote Form Link */}
        <div className="space-y-4 p-6 border rounded-lg bg-white shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900">
            Need a Detailed Quote?
          </h3>
          <p className="text-gray-600">
            Fill out a full request form — I'll get back to you within 12 hours.
          </p>

          <a
            href="https://your-google-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Fill out the detailed request form
          </a>
        </div>

        {/* General Contact Form */}
        {/* General Contact Form */}
        <div className="space-y-6 p-6 border rounded-lg bg-white shadow-sm text-left">
          <h3 className="text-2xl font-semibold text-gray-900 text-center">
            Leave a General Inquiry
          </h3>

          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
