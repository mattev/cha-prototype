import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Filter, User, MapPin, Clock, AlertCircle, CheckCircle2, FileText } from 'lucide-react';
export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [view, setView] = useState('month');
  const [filter, setFilter] = useState('all');
  // Sample appointments data
  const appointments = [{
    id: 1,
    title: 'Dr. Robert Smith - Cardiology',
    patient: 'Art Johnson',
    date: new Date(2026, 6, 28),
    time: '10:30 AM',
    location: 'Memorial Hospital',
    status: 'confirmed',
    type: 'specialist'
  }, {
    id: 2,
    title: 'Dr. Emily Chen - Primary Care',
    patient: 'Sandra Johnson',
    date: new Date(2026, 7, 3),
    time: '2:15 PM',
    location: 'City Medical Group',
    status: 'confirmed',
    type: 'primary'
  }, {
    id: 3,
    title: 'Lab Work - Comprehensive Panel',
    patient: 'Art Johnson',
    date: new Date(2026, 7, 5),
    time: '9:00 AM',
    location: 'Memorial Hospital Lab',
    status: 'pending',
    type: 'lab'
  }, {
    id: 4,
    title: 'Dr. James Wilson - Endocrinology',
    patient: 'Art Johnson',
    date: new Date(2026, 7, 12),
    time: '11:45 AM',
    location: 'Diabetes Care Center',
    status: 'confirmed',
    type: 'specialist'
  }, {
    id: 5,
    title: 'Pediatric Check-up',
    patient: 'Emma Johnson',
    date: new Date(2026, 7, 15),
    time: '3:30 PM',
    location: 'Pediatric Associates',
    status: 'confirmed',
    type: 'primary'
  }];
  // Get days in month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  // Create calendar grid
  const days = [];
  // Add empty cells for days before first day of month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="border border-gray-100 p-2 h-28"></div>);
  }
  // Add cells for days in month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dayAppointments = appointments.filter(appointment => appointment.date.getDate() === day && appointment.date.getMonth() === month && appointment.date.getFullYear() === year);
    days.push(<div key={day} className="border border-gray-100 p-2 h-28 overflow-hidden">
        <div className="flex justify-between items-center mb-1">
          <span className={`text-sm font-medium ${new Date().toDateString() === date.toDateString() ? 'bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center' : ''}`}>
            {day}
          </span>
          {dayAppointments.length > 0 && <span className="text-xs text-gray-500">
              {dayAppointments.length} appt
              {dayAppointments.length > 1 ? 's' : ''}
            </span>}
        </div>
        <div className="space-y-1">
          {dayAppointments.map(appointment => <div key={appointment.id} className={`text-xs p-1 rounded truncate ${appointment.type === 'specialist' ? 'bg-blue-100 text-blue-800' : appointment.type === 'primary' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
              {appointment.time} - {appointment.title.split(' - ')[0]}
            </div>)}
        </div>
      </div>);
  }
  // Format month name
  const monthName = currentMonth.toLocaleString('default', {
    month: 'long'
  });
  const previousMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Calendar</h1>
          <p className="text-gray-600 mt-1">
            Track and manage healthcare appointments
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Plus size={18} className="mr-1.5" />
            New Appointment
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex items-center">
            <button onClick={previousMonth} className="p-1 rounded-full hover:bg-gray-100" aria-label="Previous month">
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <h2 className="text-xl font-semibold mx-4">
              {monthName} {year}
            </h2>
            <button onClick={nextMonth} className="p-1 rounded-full hover:bg-gray-100" aria-label="Next month">
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="border border-gray-300 rounded-lg overflow-hidden flex">
              <button className={`px-4 py-2 text-sm font-medium ${view === 'month' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setView('month')}>
                Month
              </button>
              <button className={`px-4 py-2 text-sm font-medium ${view === 'week' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setView('week')}>
                Week
              </button>
              <button className={`px-4 py-2 text-sm font-medium ${view === 'day' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setView('day')}>
                Day
              </button>
            </div>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter size={18} className="text-gray-500" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-0">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => <div key={index} className="p-2 text-center text-sm font-medium text-gray-500 border-b border-gray-200">
                {day}
              </div>)}
          {days}
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Upcoming Appointments
        </h2>
        <div className="space-y-4">
          {appointments.slice(0, 3).map(appointment => <div key={appointment.id} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {appointment.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    For: {appointment.patient}
                  </p>
                </div>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                  {appointment.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-y-2">
                <div className="flex items-center text-xs text-gray-500 mr-4">
                  <Clock size={14} className="mr-1.5" />
                  {appointment.date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
              })}
                  , {appointment.time}
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <MapPin size={14} className="mr-1.5" />
                  {appointment.location}
                </div>
              </div>
              <div className="mt-3 flex justify-between">
                <button className="text-xs text-blue-600">View details</button>
                <div className="flex space-x-2">
                  <button className="text-xs text-gray-500">Reschedule</button>
                  <button className="text-xs text-gray-500">Cancel</button>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-4 flex justify-center">
          <button className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800">
            View All Appointments
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-base font-semibold text-gray-800 mb-4">
            Appointment Tasks
          </h3>
          <div className="space-y-3">
            <div className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
              <div className="mr-3">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  Complete pre-visit questionnaire
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  For Art's cardiology appointment
                </p>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">
                Due Tomorrow
              </span>
            </div>
            <div className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
              <div className="mr-3">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  Bring recent lab results
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  For your primary care visit
                </p>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                Aug 3
              </span>
            </div>
            <div className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
              <div className="mr-3">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  Fast for 12 hours before appointment
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  For Art's lab work
                </p>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                Aug 5
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-base font-semibold text-gray-800 mb-4">
            Appointment Costs
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">
                  Primary Care Visit
                </span>
                <span className="text-sm font-medium">$25.00</span>
              </div>
              <p className="text-xs text-gray-500">
                Copay for in-network provider
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Specialist Visit</span>
                <span className="text-sm font-medium">$45.00</span>
              </div>
              <p className="text-xs text-gray-500">
                Copay for in-network provider
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Lab Work</span>
                <span className="text-sm font-medium">$0.00 - $75.00</span>
              </div>
              <p className="text-xs text-gray-500">
                Depends on tests and deductible status
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-gray-100">
              <button className="text-sm text-blue-600 hover:text-blue-800">
                Get detailed cost estimate
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-base font-semibold text-gray-800 mb-4">
            Health Reminders
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="p-1.5 bg-amber-100 rounded-full text-amber-600 mr-3">
                <AlertCircle size={16} />
              </div>
              <div>
                <p className="text-sm font-medium">Annual Physical Due</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Art's annual physical is due in September
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-1.5 bg-green-100 rounded-full text-green-600 mr-3">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <p className="text-sm font-medium">Flu Shot Available</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Seasonal flu shots now available
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-1.5 bg-blue-100 rounded-full text-blue-600 mr-3">
                <FileText size={16} />
              </div>
              <div>
                <p className="text-sm font-medium">Referral Needed</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Get referral for Art's endocrinologist visit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}