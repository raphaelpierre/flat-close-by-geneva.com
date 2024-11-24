import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isBefore, isAfter, addMonths, subMonths } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  bookedDates: Date[];
  currentMonth: Date;
  onMonthChange: (date: Date) => void;
}

export default function Calendar({ selectedDate, onDateSelect, bookedDates, currentMonth, onMonthChange }: CalendarProps) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const today = new Date();

  const isDateBooked = (date: Date) => {
    return bookedDates.some(bookedDate => 
      format(bookedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );
  };

  const isDateSelectable = (date: Date) => {
    return !isDateBooked(date) && !isBefore(date, today);
  };

  const getDayClasses = (date: Date) => {
    const baseClasses = "h-10 w-10 rounded-full flex items-center justify-center text-sm relative";
    
    if (!isSameMonth(date, currentMonth)) {
      return `${baseClasses} text-gray-300`;
    }
    
    if (isDateBooked(date)) {
      return `${baseClasses} bg-red-100 text-red-600 cursor-not-allowed`;
    }
    
    if (isBefore(date, today)) {
      return `${baseClasses} text-gray-300 cursor-not-allowed`;
    }
    
    if (selectedDate && format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')) {
      return `${baseClasses} bg-blue-600 text-white`;
    }
    
    if (isToday(date)) {
      return `${baseClasses} border-2 border-blue-600 text-blue-600`;
    }
    
    return `${baseClasses} hover:bg-blue-50 cursor-pointer`;
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => onMonthChange(subMonths(currentMonth, 1))}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <button
          onClick={() => onMonthChange(addMonths(currentMonth, 1))}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="h-10 flex items-center justify-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {daysInMonth.map(date => (
          <button
            key={date.toISOString()}
            onClick={() => isDateSelectable(date) && onDateSelect(date)}
            className={getDayClasses(date)}
            disabled={!isDateSelectable(date)}
          >
            {format(date, 'd')}
          </button>
        ))}
      </div>
      <div className="mt-4 flex gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-100"></div>
          <span className="text-gray-600">Booked</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full border-2 border-blue-600"></div>
          <span className="text-gray-600">Today</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
          <span className="text-gray-600">Selected</span>
        </div>
      </div>
    </div>
  );
}