import { useState, useEffect } from 'react';
import { eachDayOfInterval, parseISO } from 'date-fns';
import { ReservationData } from '../types/reservation';

export function useReservations() {
  const [reservations, setReservations] = useState<ReservationData[]>([]);

  useEffect(() => {
    const loadReservations = () => {
      const stored = localStorage.getItem('reservations');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setReservations(parsed);
        } catch (error) {
          console.error('Error parsing stored reservations:', error);
          setReservations([]);
        }
      }
    };

    loadReservations();
    // Add event listener for storage changes
    window.addEventListener('storage', loadReservations);
    return () => window.removeEventListener('storage', loadReservations);
  }, []);

  const addReservation = (reservation: ReservationData) => {
    const newReservations = [...reservations, reservation];
    setReservations(newReservations);
    localStorage.setItem('reservations', JSON.stringify(newReservations));
    // Trigger storage event for other tabs
    window.dispatchEvent(new Event('storage'));
  };

  const clearReservations = () => {
    if (window.confirm('Are you sure you want to clear all reservations? This action cannot be undone.')) {
      setReservations([]);
      localStorage.removeItem('reservations');
      // Trigger storage event for other tabs
      window.dispatchEvent(new Event('storage'));
    }
  };

  const getBookedDates = (): Date[] => {
    return reservations.flatMap(reservation => {
      if (!reservation.startDate || !reservation.endDate) return [];
      try {
        const start = parseISO(reservation.startDate);
        const end = parseISO(reservation.endDate);
        return eachDayOfInterval({ start, end });
      } catch (error) {
        console.error('Error parsing reservation dates:', error);
        return [];
      }
    });
  };

  const isDateRangeAvailable = (startDate: Date, endDate: Date): boolean => {
    const bookedDates = getBookedDates();
    const requestedDates = eachDayOfInterval({ start: startDate, end: endDate });
    
    return !requestedDates.some(date => 
      bookedDates.some(bookedDate => 
        date.getTime() === bookedDate.getTime()
      )
    );
  };

  return {
    reservations,
    addReservation,
    clearReservations,
    getBookedDates,
    isDateRangeAvailable,
  };
}