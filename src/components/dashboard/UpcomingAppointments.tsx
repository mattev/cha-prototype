import React from 'react';
import { CalendarIcon, MapPin, Clock, ChevronRight } from 'lucide-react';
export function UpcomingAppointments() {
  const appointments = [{
    id: 1,
    title: 'Dr. Robert Smith - Cardiology',
    patient: 'Art Johnson',
    date: 'Jul 28, 2026',
    time: '10:30 AM',
    location: 'Memorial Hospital'
  }, {
    id: 2,
    title: 'Dr. Emily Chen - Primary Care',
    patient: 'Sandra Johnson',
    date: 'Aug 3, 2026',
    time: '2:15 PM',
    location: 'City Medical Group'
  }];
  return <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Upcoming Appointments
        </h2>
        <button className="text-sm text-blue-600">View calendar</button>
      </div>
      <div className="space-y-4">
        {appointments.map(appointment => <div key={appointment.id} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {appointment.title}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  For: {appointment.patient}
                </p>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Confirmed
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-y-2">
              <div className="flex items-center text-xs text-gray-500 mr-4">
                <CalendarIcon size={14} className="mr-1.5" />
                {appointment.date}
              </div>
              <div className="flex items-center text-xs text-gray-500 mr-4">
                <Clock size={14} className="mr-1.5" />
                {appointment.time}
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <MapPin size={14} className="mr-1.5" />
                {appointment.location}
              </div>
            </div>
            <div className="mt-3 flex justify-between">
              <button className="text-xs text-blue-600">View details</button>
              <button className="text-xs text-gray-500">Add to calendar</button>
            </div>
          </div>)}
      </div>
      <button className="mt-4 w-full py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center">
        Schedule New Appointment
        <ChevronRight size={16} className="ml-1" />
      </button>
    </div>;
}