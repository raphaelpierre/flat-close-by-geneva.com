import React, { useState } from 'react';
import { useReservations } from '../hooks/useReservations';
import { format, parseISO } from 'date-fns';
import { Trash2, Lock, Calendar, Mail, Phone, MessageSquare } from 'lucide-react';

export default function AdminPanel() {
  const { reservations, clearReservations } = useReservations();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMM d, yyyy');
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid date';
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <Lock className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold">Admin Authentication</h2>
        </div>
        <form onSubmit={handleAuth} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Reservation Management</h2>
        <button
          onClick={clearReservations}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          <Trash2 className="w-5 h-5" />
          Clear All Reservations
        </button>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium mb-4">Current Reservations:</h3>
        {reservations.length === 0 ? (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No reservations found.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {reservations.map((reservation, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:border-blue-200 transition-colors bg-white"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Stay Period</p>
                        <p className="text-gray-600">
                          {formatDate(reservation.startDate || '')} - {formatDate(reservation.endDate || '')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">{reservation.name}</p>
                        <p className="text-gray-600">{reservation.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {reservation.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-blue-600" />
                        <p className="text-gray-600">{reservation.phone}</p>
                      </div>
                    )}
                    {reservation.message && (
                      <div className="flex items-start gap-2">
                        <MessageSquare className="w-5 h-5 text-blue-600 mt-1" />
                        <p className="text-gray-600 italic">"{reservation.message}"</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}