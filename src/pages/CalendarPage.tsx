import React, { useState, useEffect } from 'react';
import { format, startOfWeek, addDays, isSameDay } from 'date-fns';
import { GoogleLogin } from '@react-oauth/google';

interface Event {
  id: string;
  summary: string;
  start: { dateTime: string };
  end: { dateTime: string };
}

const CalendarPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // TODO: Implement actual Google Calendar API integration
    const mockEvents = generateMockEvents(currentDate);
    setEvents(mockEvents);
  }, [currentDate]);

  const generateMockEvents = (date: Date): Event[] => {
    const mockEvents: Event[] = [];
    for (let i = 0; i < 5; i++) {
      const eventDate = addDays(date, Math.floor(Math.random() * 7));
      mockEvents.push({
        id: `event-${i}`,
        summary: `Mock Event ${i + 1}`,
        start: { dateTime: format(eventDate, "yyyy-MM-dd'T'HH:mm:ss") },
        end: { dateTime: format(addDays(eventDate, 1), "yyyy-MM-dd'T'HH:mm:ss") },
      });
    }
    return mockEvents;
  };

  const renderWeekView = () => {
    const startDate = startOfWeek(currentDate);
    const weekDays = [...Array(7)].map((_, i) => addDays(startDate, i));

    return (
      <div className="grid grid-cols-7 gap-4">
        {weekDays.map((day) => (
          <div key={day.toISOString()} className="border p-2">
            <div className="font-semibold mb-2">{format(day, 'EEE d')}</div>
            {events
              .filter((event) => isSameDay(new Date(event.start.dateTime), day))
              .map((event) => (
                <div key={event.id} className="bg-blue-100 p-1 mb-1 rounded text-sm">
                  {event.summary}
                </div>
              ))}
          </div>
        ))}
      </div>
    );
  };

  const handleGoogleLogin = (credentialResponse: any) => {
    console.log('Google login successful:', credentialResponse);
    // TODO: Implement actual Google Calendar integration using the received credentials
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Study Calendar</h1>
      <div className="mb-4">
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => console.log('Login Failed')}
        />
      </div>
      {renderWeekView()}
    </div>
  );
};

export default CalendarPage;