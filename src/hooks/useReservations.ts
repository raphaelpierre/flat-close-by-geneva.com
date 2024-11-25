import { useState, useEffect } from 'react';
import { eachDayOfInterval } from 'date-fns';

interface Reservation {
  startDate: string;
  endDate: string;
  name: string;
  email: string;
}

export function useReservations() {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('reservations');
    if (stored) {
      setReservations(JSON.parse(stored));
    }
  }, []);

  const addReservation = (reservation: Reservation) => {
    const newReservations = [...reservations, reservation];
    setReservations(newReservations);
    localStorage.setItem('reservations', JSON.stringify(newReservations));
  };

  const getBookedDates = (): Date[] => {
    return reservations.flatMap(reservation => {
      const start = new Date(reservation.startDate);
      const end = new Date(reservation.endDate);
      return eachDayOfInterval({ start, end });
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
    getBookedDates,
    isDateRangeAvailable,
  };
}