interface Translations {
  [key: string]: {
    title: string;
    description: string;
    amenities: {
      title: string;
      items: string[];
    };
    pricePerNight: string;
    size: string;
    checkAvailability: string;
    makeReservation: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      selectDate: string;
      selectedDate: string;
    };
  };
}

export const translations: Translations = {
  en: {
    title: "Charming Flat in Ferney-Voltaire",
    description: "Experience the perfect blend of French charm and Swiss proximity in our beautifully furnished apartment in Ferney-Voltaire. Just minutes from Geneva and CERN, this modern flat offers an ideal location for professionals and travelers. Enjoy easy access to both the French countryside and Swiss city life.",
    amenities: {
      title: "Amenities",
      items: [
        "Full Kitchen",
        "High-Speed WiFi",
        "Smart TV",
        "Air Conditioning",
        "Washer/Dryer",
        "Free Parking"
      ]
    },
    pricePerNight: "Price per night",
    size: "Size",
    checkAvailability: "Check Availability",
    makeReservation: "Make a Reservation",
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message (Optional)",
      submit: "Request Reservation",
      selectDate: "Please select a date to make a reservation",
      selectedDate: "Selected Date"
    }
  },
  fr: {
    title: "Charmant Appartement à Ferney-Voltaire",
    description: "Découvrez le parfait mélange entre le charme français et la proximité suisse dans notre appartement meublé à Ferney-Voltaire. À quelques minutes de Genève et du CERN, ce logement moderne offre un emplacement idéal pour les professionnels et les voyageurs. Profitez d'un accès facile à la campagne française et à la vie citadine suisse.",
    amenities: {
      title: "Équipements",
      items: [
        "Cuisine Équipée",
        "WiFi Haut Débit",
        "Smart TV",
        "Climatisation",
        "Lave-linge/Sèche-linge",
        "Parking Gratuit"
      ]
    },
    pricePerNight: "Prix par nuit",
    size: "Surface",
    checkAvailability: "Vérifier la Disponibilité",
    makeReservation: "Faire une Réservation",
    form: {
      name: "Nom",
      email: "Email",
      phone: "Téléphone",
      message: "Message (Optionnel)",
      submit: "Demander une Réservation",
      selectDate: "Veuillez sélectionner une date pour faire une réservation",
      selectedDate: "Date Sélectionnée"
    }
  }
};