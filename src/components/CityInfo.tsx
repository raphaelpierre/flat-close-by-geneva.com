import React from 'react';
import { MapPin, History, Plane, Train, Bus } from 'lucide-react';

interface CityInfoProps {
  lang: 'en' | 'fr';
}

export default function CityInfo({ lang }: CityInfoProps) {
  const content = {
    en: {
      title: "About Ferney-Voltaire",
      description: "Ferney-Voltaire is a charming French commune in the Ain department, situated in the Auvergne-Rhône-Alpes region. Named after its most famous resident, philosopher Voltaire, this historic town combines French heritage with modern convenience.",
      location: "Strategic Location",
      locationText: "Located just 5km from Geneva International Airport and 7km from Geneva's city center, Ferney-Voltaire offers the perfect balance between French lifestyle and Swiss proximity.",
      transport: "Transportation",
      transportItems: [
        "5 minutes to Geneva Airport",
        "15 minutes to Geneva city center",
        "Direct bus lines to Geneva (60, 68)",
        "Easy access to CERN"
      ],
      attractions: "Local Attractions",
      attractionItems: [
        "Château de Voltaire",
        "Weekly Saturday Market",
        "Conservatoire de Musique",
        "Parc de la Tire"
      ]
    },
    fr: {
      title: "À propos de Ferney-Voltaire",
      description: "Ferney-Voltaire est une charmante commune française du département de l'Ain, située dans la région Auvergne-Rhône-Alpes. Nommée d'après son plus célèbre résident, le philosophe Voltaire, cette ville historique allie patrimoine français et modernité.",
      location: "Emplacement Stratégique",
      locationText: "Située à seulement 5km de l'Aéroport International de Genève et à 7km du centre-ville de Genève, Ferney-Voltaire offre l'équilibre parfait entre art de vivre français et proximité suisse.",
      transport: "Transports",
      transportItems: [
        "5 minutes de l'Aéroport de Genève",
        "15 minutes du centre de Genève",
        "Lignes directes de bus vers Genève (60, 68)",
        "Accès facile au CERN"
      ],
      attractions: "Attractions Locales",
      attractionItems: [
        "Château de Voltaire",
        "Marché du Samedi",
        "Conservatoire de Musique",
        "Parc de la Tire"
      ]
    }
  };

  const t = content[lang];

  const CITY_IMAGES = [
    {
      url: "https://www.seevisit.fr/uploads/compressed/seevisit_france_auvergne-rhone-alpes_ferney-voltaire_grand-rue_1_compressed.jpg",
      alt: "Street view"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Ferney-Voltaire_-_fontaine_-_rue_de_Meyrin.jpg/1200px-Ferney-Voltaire_-_fontaine_-_rue_de_Meyrin.jpg",
      alt: "Fountain view"
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <MapPin className="w-6 h-6 text-blue-600" />
        {t.title}
      </h2>
      
      <p className="text-gray-600 mb-8">{t.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {CITY_IMAGES.map((image, index) => (
          <div key={index} className="relative h-48 rounded-lg overflow-hidden">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <History className="w-5 h-5 text-blue-600" />
            {t.location}
          </h3>
          <p className="text-gray-600">{t.locationText}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.transport}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.transportItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-600">
                {index === 0 && <Plane className="w-5 h-5 text-blue-600" />}
                {index === 1 && <Train className="w-5 h-5 text-blue-600" />}
                {index === 2 && <Bus className="w-5 h-5 text-blue-600" />}
                {index === 3 && <MapPin className="w-5 h-5 text-blue-600" />}
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.attractions}</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {t.attractionItems.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <span className="w-5 h-5 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}