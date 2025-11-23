import React from 'react';
import { ArrowUpRight, AlertCircle, CheckCircle2, Calendar as CalendarIcon, Receipt, Users, ChevronRight } from 'lucide-react';
import { FinancialSummary } from '../components/dashboard/FinancialSummary';
import { TaskList } from '../components/dashboard/TaskList';
import { UpcomingAppointments } from '../components/dashboard/UpcomingAppointments';
import { FamilyOverview } from '../components/dashboard/FamilyOverview';
export function Dashboard() {
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome back, Sandra
          </h1>
          <p className="text-gray-600 mt-1">
            Here's what's happening with your family's healthcare
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Upload a Bill
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Bills Requiring Attention
              </p>
              <p className="text-2xl font-semibold mt-1">3</p>
            </div>
            <span className="p-2 bg-amber-100 rounded-lg">
              <AlertCircle size={20} className="text-amber-600" />
            </span>
          </div>
          <div className="mt-4 flex items-center text-sm text-blue-600">
            <span className="font-medium">Review now</span>
            <ChevronRight size={16} className="ml-1" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Potential Savings Found
              </p>
              <p className="text-2xl font-semibold mt-1">$247.50</p>
            </div>
            <span className="p-2 bg-green-100 rounded-lg">
              <CheckCircle2 size={20} className="text-green-600" />
            </span>
          </div>
          <div className="mt-4 flex items-center text-sm text-blue-600">
            <span className="font-medium">View details</span>
            <ChevronRight size={16} className="ml-1" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Upcoming Appointments
              </p>
              <p className="text-2xl font-semibold mt-1">2</p>
            </div>
            <span className="p-2 bg-blue-100 rounded-lg">
              <CalendarIcon size={20} className="text-blue-600" />
            </span>
          </div>
          <div className="mt-4 flex items-center text-sm text-blue-600">
            <span className="font-medium">View calendar</span>
            <ChevronRight size={16} className="ml-1" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <FinancialSummary />
          <div className="mt-6">
            <TaskList />
          </div>
        </div>
        <div>
          <UpcomingAppointments />
          <div className="mt-6">
            <FamilyOverview />
          </div>
        </div>
      </div>
    </div>;
}