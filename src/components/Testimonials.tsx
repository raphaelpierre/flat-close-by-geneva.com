import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  lang: 'en' | 'fr';
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const testimonials = {
    en: [
      {
        name: "Sarah M.",
        date: "February 2024",
        rating: 5,
        text: "Perfect location for our CERN visit! The apartment was spotless and had everything we needed. The proximity to Geneva while enjoying French village life was ideal.",
        location: "United Kingdom"
      },
      {
        name: "Jean-Pierre L.",
        date: "January 2024",
        rating: 5,
        text: "Excellent séjour! The combination of modern amenities and easy access to both Geneva and the French countryside made our stay exceptional. The Saturday market is a must-visit!",
        location: "Belgium"
      },
      {
        name: "Maria S.",
        date: "December 2023",
        rating: 5,
        text: "We loved our winter stay here! The apartment was warm and cozy, and the bus to Geneva was just a few steps away. The host's recommendations for local restaurants were spot-on.",
        location: "Spain"
      }
    ],
    fr: [
      {
        name: "Sarah M.",
        date: "Février 2024",
        rating: 5,
        text: "Emplacement parfait pour notre visite au CERN ! L'appartement était impeccable et avait tout ce dont nous avions besoin. La proximité avec Genève tout en profitant de la vie de village française était idéale.",
        location: "Royaume-Uni"
      },
      {
        name: "Jean-Pierre L.",
        date: "Janvier 2024",
        rating: 5,
        text: "Excellent séjour ! La combinaison des commodités modernes et de l'accès facile à Genève et à la campagne française a rendu notre séjour exceptionnel. Le marché du samedi est à ne pas manquer !",
        location: "Belgique"
      },
      {
        name: "Maria S.",
        date: "Décembre 2023",
        rating: 5,
        text: "Nous avons adoré notre séjour hivernal ici ! L'appartement était chaleureux et confortable, et le bus pour Genève était à quelques pas. Les recommandations de l'hôte pour les restaurants locaux étaient parfaites.",
        location: "Espagne"
      }
    ]
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Quote className="w-6 h-6 text-blue-600" />
        {lang === 'en' ? 'Guest Reviews' : 'Avis des Voyageurs'}
      </h2>

      <div className="grid gap-6">
        {testimonials[lang].map((testimonial, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 italic mb-2">"{testimonial.text}"</p>
            <p className="text-sm text-gray-500">{testimonial.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}