import React from 'react';
import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  currentLang: 'en' | 'fr';
  onToggle: (lang: 'en' | 'fr') => void;
}

export default function LanguageToggle({ currentLang, onToggle }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <Languages className="w-5 h-5 text-gray-500" />
      <select
        value={currentLang}
        onChange={(e) => onToggle(e.target.value as 'en' | 'fr')}
        className="bg-transparent border-none focus:ring-0 text-sm font-medium cursor-pointer"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}