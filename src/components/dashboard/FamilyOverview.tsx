import React from 'react';
import { Users, UserCircle, PlusCircle, ChevronRight } from 'lucide-react';
export function FamilyOverview() {
  const familyMembers = [{
    id: 1,
    name: 'Sandra Johnson',
    role: 'Family Admin',
    status: '3 upcoming tasks'
  }, {
    id: 2,
    name: 'Art Johnson',
    role: 'Father',
    status: '5 upcoming tasks'
  }, {
    id: 3,
    name: 'Emma Johnson',
    role: 'Daughter',
    status: '1 upcoming task'
  }, {
    id: 4,
    name: 'Michael Johnson',
    role: 'Son',
    status: 'No tasks'
  }];
  return <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Family Members</h2>
        <button className="text-sm text-blue-600">Manage</button>
      </div>
      <div className="space-y-4">
        {familyMembers.map(member => <div key={member.id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
            <div className="mr-3">
              <UserCircle size={32} className="text-gray-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{member.name}</p>
              <p className="text-xs text-gray-500">
                {member.role} • {member.status}
              </p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <ChevronRight size={18} />
            </button>
          </div>)}
      </div>
      <button className="mt-4 w-full py-2 border border-dashed border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 flex items-center justify-center">
        <PlusCircle size={16} className="mr-1.5" />
        Add Family Member
      </button>
    </div>;
}