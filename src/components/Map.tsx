import React from 'react';
import { MapPin } from 'lucide-react';

export default function Map() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22063.078567893882!2d6.099089274316403!3d46.25772097901565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c631953aed6f7%3A0x408ab2ae4bfb580!2s01210%20Ferney-Voltaire%2C%20France!5e0!3m2!1sen!2sus!4v1709847754790!5m2!1sen!2sus"
          className="w-full h-full rounded-lg"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-4 flex items-start gap-2">
        <MapPin className="w-5 h-5 text-blue-600 mt-1" />
        <p className="text-gray-600">
          Ferney-Voltaire is strategically located between the Jura mountains and Lake Geneva, offering easy access to both Geneva's urban amenities and the natural beauty of the French-Swiss border region.
        </p>
      </div>
    </div>
  );
}