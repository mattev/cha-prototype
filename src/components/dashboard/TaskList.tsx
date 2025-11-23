import React from 'react';
import { Check, AlertCircle, Receipt, CalendarClock, Pill } from 'lucide-react';
export function TaskList() {
  const tasks = [{
    id: 1,
    title: 'Review hospital bill for possible errors',
    description: 'Memorial Hospital ER visit on June 28',
    icon: <Receipt size={16} />,
    priority: 'high',
    for: 'Art Johnson',
    dueDate: 'Today'
  }, {
    id: 2,
    title: 'Schedule follow-up appointment',
    description: 'Cardiology follow-up for Art',
    icon: <CalendarClock size={16} />,
    priority: 'medium',
    for: 'Art Johnson',
    dueDate: 'This week'
  }, {
    id: 3,
    title: 'Refill prescription',
    description: 'Metformin - 2 refills remaining',
    icon: <Pill size={16} />,
    priority: 'medium',
    for: 'Art Johnson',
    dueDate: 'Next week'
  }, {
    id: 4,
    title: 'Submit insurance claim form',
    description: 'Out-of-network specialist visit',
    icon: <Receipt size={16} />,
    priority: 'low',
    for: 'Sandra Johnson',
    dueDate: 'Next week'
  }];
  const getPriorityStyles = priority => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-amber-100 text-amber-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Tasks</h2>
        <button className="text-sm text-blue-600">View all</button>
      </div>
      <div className="space-y-4">
        {tasks.map(task => <div key={task.id} className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
            <div className="mr-3">
              <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {task.title}
              </p>
              <p className="text-xs text-gray-500 mt-0.5 truncate">
                {task.description}
              </p>
            </div>
            <div className="flex items-center">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mr-2">
                {task.for}
              </span>
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getPriorityStyles(task.priority)}`}>
                {task.dueDate}
              </span>
            </div>
          </div>)}
      </div>
    </div>;
}