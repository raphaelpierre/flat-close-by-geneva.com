import React from 'react';
import { BedDouble, Bath, Maximize, Heart } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  title: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  location: string;
}

export default function PropertyCard({ image, title, price, beds, baths, sqft, location }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] cursor-pointer">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white">
          <Heart className="w-5 h-5 text-gray-700" />
        </button>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
            <p className="text-gray-600">{location}</p>
          </div>
          <p className="text-xl font-bold text-blue-600">${price}/mo</p>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1">
            <BedDouble className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">{beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">{baths} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">{sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}