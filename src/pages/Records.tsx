import React, { useState } from 'react';
import { Search, Filter, ArrowUpDown, FileText, Download, Share2, ChevronRight, User } from 'lucide-react';
export function Records() {
  const [filter, setFilter] = useState('all');
  const [selectedMember, setSelectedMember] = useState('all');
  const records = [{
    id: 1,
    title: 'Annual Physical Examination',
    provider: 'Dr. Emily Chen - City Medical Group',
    patient: 'Sandra Johnson',
    date: 'June 15, 2026',
    type: 'visit_note',
    tags: ['preventive', 'primary_care']
  }, {
    id: 2,
    title: 'Comprehensive Metabolic Panel',
    provider: 'Memorial Hospital Lab',
    patient: 'Art Johnson',
    date: 'June 5, 2026',
    type: 'lab_result',
    tags: ['lab', 'blood_work']
  }, {
    id: 3,
    title: 'Cardiology Consultation',
    provider: 'Dr. Robert Smith - Memorial Hospital',
    patient: 'Art Johnson',
    date: 'May 22, 2026',
    type: 'visit_note',
    tags: ['cardiology', 'specialist']
  }, {
    id: 4,
    title: 'Chest X-Ray',
    provider: 'Eastside Imaging',
    patient: 'Art Johnson',
    date: 'May 22, 2026',
    type: 'imaging',
    tags: ['radiology', 'chest']
  }, {
    id: 5,
    title: 'Well Child Visit - 14 Years',
    provider: 'Dr. Maria Lopez - Pediatric Associates',
    patient: 'Emma Johnson',
    date: 'April 30, 2026',
    type: 'visit_note',
    tags: ['preventive', 'pediatric']
  }, {
    id: 6,
    title: 'Immunization Record',
    provider: 'Pediatric Associates',
    patient: 'Michael Johnson',
    date: 'March 15, 2026',
    type: 'immunization',
    tags: ['preventive', 'pediatric']
  }, {
    id: 7,
    title: 'Lipid Panel',
    provider: 'Memorial Hospital Lab',
    patient: 'Art Johnson',
    date: 'May 5, 2026',
    type: 'lab_result',
    tags: ['lab', 'blood_work', 'cardiology']
  }];
  const filteredRecords = records.filter(record => {
    if (filter !== 'all' && record.type !== filter) return false;
    if (selectedMember !== 'all' && record.patient !== selectedMember) return false;
    return true;
  });
  const getTypeLabel = type => {
    switch (type) {
      case 'visit_note':
        return 'Visit Note';
      case 'lab_result':
        return 'Lab Result';
      case 'imaging':
        return 'Imaging';
      case 'immunization':
        return 'Immunization';
      default:
        return type;
    }
  };
  const getTypeStyles = type => {
    switch (type) {
      case 'visit_note':
        return 'bg-blue-100 text-blue-800';
      case 'lab_result':
        return 'bg-green-100 text-green-800';
      case 'imaging':
        return 'bg-purple-100 text-purple-800';
      case 'immunization':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Health Records
          </h1>
          <p className="text-gray-600 mt-1">
            View and manage your family's medical records
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Import Records
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="relative max-w-xs w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input type="search" placeholder="Search records..." className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="flex items-center space-x-2">
            <select value={selectedMember} onChange={e => setSelectedMember(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="all">All Members</option>
              <option value="Sandra Johnson">Sandra Johnson</option>
              <option value="Art Johnson">Art Johnson</option>
              <option value="Emma Johnson">Emma Johnson</option>
              <option value="Michael Johnson">Michael Johnson</option>
            </select>
            <div className="border border-gray-300 rounded-lg overflow-hidden flex">
              <button className={`px-4 py-2 text-sm font-medium ${filter === 'all' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setFilter('all')}>
                All
              </button>
              <button className={`px-4 py-2 text-sm font-medium ${filter === 'visit_note' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setFilter('visit_note')}>
                Visit Notes
              </button>
              <button className={`px-4 py-2 text-sm font-medium ${filter === 'lab_result' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setFilter('lab_result')}>
                Lab Results
              </button>
            </div>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter size={18} className="text-gray-500" />
            </button>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <ArrowUpDown size={18} className="text-gray-500" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Record
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Provider
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRecords.map(record => <tr key={record.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <FileText size={18} className="mr-3 text-gray-400" />
                      <span className="text-sm font-medium text-gray-900">
                        {record.title}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <User size={16} className="mr-2 text-gray-400" />
                      <span className="text-sm text-gray-500">
                        {record.patient}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    {record.provider}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    {record.date}
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeStyles(record.type)}`}>
                      {getTypeLabel(record.type)}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                        <Download size={16} />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                        <Share2 size={16} />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing {filteredRecords.length} of {records.length} records
          </p>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-500 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-50 border border-blue-200 rounded text-sm text-blue-600">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Health Summary
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-800">Conditions</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Hypertension
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Type 2 Diabetes
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Atrial Fibrillation
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-800">Medications</h3>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Metformin 500mg</span>
                  <span className="text-xs text-gray-500">Twice daily</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Lisinopril 10mg</span>
                  <span className="text-xs text-gray-500">Once daily</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Eliquis 5mg</span>
                  <span className="text-xs text-gray-500">Twice daily</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-800">Allergies</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Penicillin
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Sulfa Drugs
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100">
            <button className="text-sm text-blue-600 hover:text-blue-800">
              View full health profile
            </button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Connected Providers
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
              <div>
                <p className="text-sm font-medium">Memorial Hospital System</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Last synced: July 15, 2026
                </p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Connected
              </span>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
              <div>
                <p className="text-sm font-medium">City Medical Group</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Last synced: July 10, 2026
                </p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Connected
              </span>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
              <div>
                <p className="text-sm font-medium">Pediatric Associates</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Last synced: June 30, 2026
                </p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Connected
              </span>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg border-dashed">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Connect a new provider
                </p>
              </div>
              <button className="text-sm text-blue-600">Connect</button>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100">
            <button className="text-sm text-blue-600 hover:text-blue-800">
              Manage provider connections
            </button>
          </div>
        </div>
      </div>
    </div>;
}