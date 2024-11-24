import React from 'react';
import { Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import Calendar from './components/Calendar';
import ReservationForm, { ReservationData } from './components/ReservationForm';
import LanguageToggle from './components/LanguageToggle';
import { translations } from './locales/translations';

const BOOKED_DATES = [
  new Date(2024, 2, 15),
  new Date(2024, 2, 16),
  new Date(2024, 2, 17),
  new Date(2024, 2, 25),
  new Date(2024, 2, 26),
];

const APARTMENT_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern living room with large windows"
  },
  {
    url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary bedroom with city views"
  },
  {
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    alt: "Fully equipped modern kitchen"
  }
];

function App() {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  const [lang, setLang] = React.useState<'en' | 'fr'>('en');
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const t = translations[lang];

  const handleReservation = (formData: ReservationData) => {
    console.log('Reservation submitted:', formData);
    alert(lang === 'en' ? 'Reservation request submitted! We will contact you soon.' : 'Demande de réservation envoyée ! Nous vous contacterons bientôt.');
    setSelectedDate(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % APARTMENT_IMAGES.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + APARTMENT_IMAGES.length) % APARTMENT_IMAGES.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">{t.title}</span>
            </div>
            <LanguageToggle currentLang={lang} onToggle={setLang} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="relative mb-8 group">
              <img
                src={APARTMENT_IMAGES[currentImageIndex].url}
                alt={APARTMENT_IMAGES[currentImageIndex].alt}
                className="w-full h-[500px] object-cover rounded-xl"
              />
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {APARTMENT_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">{t.title}</h1>
              <p className="text-gray-600 mb-6">{t.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">{t.pricePerNight}</p>
                  <p className="text-xl font-bold text-gray-900">€95</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">{t.size}</p>
                  <p className="text-xl font-bold text-gray-900">70 m²</p>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{t.amenities.title}</h2>
              <ul className="grid grid-cols-2 gap-2 text-gray-600">
                {t.amenities.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-5 h-5 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.checkAvailability}</h2>
              <Calendar
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
                bookedDates={BOOKED_DATES}
                currentMonth={currentMonth}
                onMonthChange={setCurrentMonth}
              />
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.makeReservation}</h2>
              <ReservationForm
                selectedDate={selectedDate}
                onSubmit={handleReservation}
                translations={t.form}
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-300 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-blue-500" />
              <span className="text-lg font-bold text-white">{t.title}</span>
            </div>
            <p className="text-sm">&copy; 2024 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;