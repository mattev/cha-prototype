import React from 'react';
import { UserCircle, PlusCircle, Settings, FileText, Calendar as CalendarIcon, Receipt, Pill, ChevronRight, Share2 } from 'lucide-react';
export function Family() {
  const familyMembers = [{
    id: 1,
    name: 'Sandra Johnson',
    role: 'Family Admin',
    tasks: 3,
    appointments: 1,
    bills: 2
  }, {
    id: 2,
    name: 'Art Johnson',
    role: 'Father',
    tasks: 5,
    appointments: 2,
    bills: 3
  }, {
    id: 3,
    name: 'Emma Johnson',
    role: 'Daughter',
    tasks: 1,
    appointments: 0,
    bills: 0
  }, {
    id: 4,
    name: 'Michael Johnson',
    role: 'Son',
    tasks: 0,
    appointments: 0,
    bills: 0
  }];
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Family Members
          </h1>
          <p className="text-gray-600 mt-1">
            Manage healthcare for your entire family
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <PlusCircle size={18} className="mr-1.5" />
            Add Family Member
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {familyMembers.map(member => <div key={member.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <UserCircle size={48} className="text-gray-400" />
                <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                  <Settings size={16} />
                </button>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Tasks</span>
                  <span className="font-medium">{member.tasks}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Appointments</span>
                  <span className="font-medium">{member.appointments}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Bills</span>
                  <span className="font-medium">{member.bills}</span>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 grid grid-cols-3 divide-x divide-gray-200">
              <button className="p-3 text-gray-700 hover:bg-gray-50 flex items-center justify-center">
                <FileText size={16} className="mr-1.5" />
                <span className="text-xs">Records</span>
              </button>
              <button className="p-3 text-gray-700 hover:bg-gray-50 flex items-center justify-center">
                <CalendarIcon size={16} className="mr-1.5" />
                <span className="text-xs">Calendar</span>
              </button>
              <button className="p-3 text-gray-700 hover:bg-gray-50 flex items-center justify-center">
                <Receipt size={16} className="mr-1.5" />
                <span className="text-xs">Bills</span>
              </button>
            </div>
          </div>)}
      </div>
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Permissions & Access
          </h2>
          <button className="text-sm text-blue-600 hover:text-blue-700">
            Edit Permissions
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Family Member
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Medical Records
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bills & Insurance
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Appointments
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Medications
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {familyMembers.map(member => <tr key={member.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    {member.name}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    {member.role}
                  </td>
                  <td className="px-4 py-4">
                    {member.id === 1 ? <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Full Access
                      </span> : <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Limited
                      </span>}
                  </td>
                  <td className="px-4 py-4">
                    {member.id === 1 ? <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Full Access
                      </span> : <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        View Only
                      </span>}
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Full Access
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    {member.id <= 2 ? <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Full Access
                      </span> : <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        No Access
                      </span>}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex justify-center space-x-2">
                      <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                        <Settings size={16} />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <Share2 className="h-5 w-5 text-blue-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                Invite a caregiver
              </h3>
              <p className="mt-2 text-sm text-blue-700">
                You can invite other caregivers to help manage healthcare for
                your family members. They'll receive an email invitation to
                create an account.
              </p>
              <div className="mt-3">
                <button className="inline-flex items-center px-3 py-1.5 border border-blue-300 text-xs font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
                  Send Invitation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}