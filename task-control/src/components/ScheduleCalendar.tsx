import React from 'react';
import './ScheduleCalendar.css';

interface CalendarEvent {
  title: string;
  date: string; // formato YYYY-MM-DD
  time: string;
  color: string;
}

const events: CalendarEvent[] = [
  {
    title: 'Flora Website Design Meeting',
    date: '2020-03-02',
    time: '09:00 AM - 10:00 AM',
    color: '#C3E5FF',
  },
  {
    title: 'Apply for Lease Applications',
    date: '2020-03-05',
    time: '11:00 AM - 12:00 PM',
    color: '#FFD6D6',
  },
  {
    title: 'Final Submission Meeting of REA Tech Project',
    date: '2020-03-11',
    time: '10:00 AM - 11:00 AM',
    color: '#D6FFE1',
  },
  {
    title: 'Monthly Jira Ticket Meeting',
    date: '2020-03-16',
    time: '10:00 AM - 11:00 AM',
    color: '#D6D6FF',
  },
  {
    title: 'Design & Dev Team Meeting',
    date: '2020-03-18',
    time: '03:00 PM - 04:00 PM',
    color: '#FFD6D6',
  },
  {
    title: 'New Project Design Brief Call',
    date: '2020-03-19',
    time: '02:00 PM - 03:00 PM',
    color: '#FFF3D6',
  },
  {
    title: 'UNO Bank App Client Call',
    date: '2020-03-23',
    time: '01:00 PM - 02:00 PM',
    color: '#D6D6FF',
  },
];

const getEventsForDate = (date: string) => {
  return events.filter(event => event.date === date);
};

const ScheduleCalendar: React.FC = () => {
  const daysInMonth = 31;
  const year = 2020;
  const month = 2; // Março (0-based index)

  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <h2>Schedule Task</h2>
        <div className="calendar-controls">
          <span className="month-label">March, 2020</span>
          <button className="view-toggle">Month</button>
        </div>
      </div>

      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="calendar-day-header">{day}</div>
        ))}

        {/* Empty slots for days before March 1st */}
        {[...Array(6)].map((_, i) => (
          <div key={`empty-${i}`} className="calendar-cell empty"></div>
        ))}

        {/* Render each day */}
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const dayEvents = getEventsForDate(dateStr);

          return (
            <div key={dateStr} className="calendar-cell">
              <div className="calendar-date">{day}</div>
              {dayEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="calendar-event"
                  style={{ backgroundColor: event.color }}
                >
                  <p className="event-title">{event.title}</p>
                  <p className="event-time">{event.time}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScheduleCalendar;
