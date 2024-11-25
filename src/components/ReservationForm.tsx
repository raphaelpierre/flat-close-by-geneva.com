import React from 'react';
import { format } from 'date-fns';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
import { emailConfig } from '../config/emailjs';

interface ReservationFormProps {
  selectedStartDate: Date | null;
  selectedEndDate: Date | null;
  onSubmit: (formData: ReservationData) => void;
  translations: {
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    selectDate: string;
    selectedDate: string;
  };
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ReservationForm({ selectedStartDate, selectedEndDate, onSubmit, translations }: ReservationFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);
  const [formData, setFormData] = React.useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStartDate || !selectedEndDate || !formRef.current) return;

    setIsSubmitting(true);
    const loadingToast = toast.loading('Sending reservation request...');

    try {
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        formRef.current,
        emailConfig.publicKey
      );

      toast.success('Reservation request sent successfully!', { id: loadingToast });
      onSubmit(formData);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send reservation request. Please try again.', { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!selectedStartDate || !selectedEndDate) {
    return (
      <div className="p-4 bg-gray-50 rounded-lg text-center">
        <p className="text-gray-600">{translations.selectDate}</p>
      </div>
    );
  }

  return (
    <>
      <Toaster position="top-right" />
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="check_in_date" value={format(selectedStartDate, 'MMMM d, yyyy')} />
        <input type="hidden" name="check_out_date" value={format(selectedEndDate, 'MMMM d, yyyy')} />
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{translations.selectedDate}</label>
          <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700">
            {format(selectedStartDate, 'MMMM d, yyyy')} - {format(selectedEndDate, 'MMMM d, yyyy')}
          </div>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {translations.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            {translations.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            {translations.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            {translations.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : translations.submit}
        </button>
      </form>
    </>
  );
}