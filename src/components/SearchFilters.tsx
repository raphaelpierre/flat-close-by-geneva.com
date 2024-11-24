import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function SearchFilters() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by location or property name"
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex gap-4">
        <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Price Range</option>
          <option>$500 - $1000</option>
          <option>$1000 - $2000</option>
          <option>$2000+</option>
        </select>
        <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Bedrooms</option>
          <option>Studio</option>
          <option>1+</option>
          <option>2+</option>
          <option>3+</option>
        </select>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5" />
          <span className="hidden md:inline">More Filters</span>
        </button>
      </div>
    </div>
  );
}