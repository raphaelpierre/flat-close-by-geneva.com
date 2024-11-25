# Flat Close By Geneva - Property Rental Website

A modern, responsive property rental website built with React, TypeScript, and Tailwind CSS. This application allows users to view property details, check availability, and make reservations for a flat located in Ferney-Voltaire, close to Geneva.

## Features

- 🏠 Modern, responsive property showcase
- 📅 Interactive availability calendar
- 🌍 Multilingual support (English/French)
- ✉️ EmailJS integration for reservation requests
- 💾 Local storage for managing reservations
- 🎨 Tailwind CSS for styling
- 📱 Mobile-first design approach

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/flat-close-by-geneva.git
cd flat-close-by-geneva
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

## Environment Variables

The following environment variables are required:

- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- EmailJS
- date-fns
- Lucide React icons
- React Hot Toast

## Project Structure

```
src/
├── components/         # React components
├── hooks/             # Custom React hooks
├── locales/           # Translation files
├── config/            # Configuration files
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Images provided by [Unsplash](https://unsplash.com)
- Icons by [Lucide](https://lucide.dev)