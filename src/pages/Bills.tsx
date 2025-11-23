import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowUpDown, AlertTriangle, CheckCircle2, Clock, ArrowUpRight } from 'lucide-react';
export function Bills() {
  const [filter, setFilter] = useState('all');
  const bills = [{
    id: 'bill-1',
    provider: 'Memorial Hospital',
    service: 'Emergency Room Visit',
    patient: 'Art Johnson',
    date: 'June 28, 2026',
    amount: 1245.75,
    status: 'issue_detected',
    dueDate: 'July 30, 2026',
    issueType: 'Potential duplicate charge'
  }, {
    id: 'bill-2',
    provider: 'City Medical Group',
    service: 'Annual Physical',
    patient: 'Sandra Johnson',
    date: 'June 15, 2026',
    amount: 120.0,
    status: 'verified',
    dueDate: 'July 15, 2026',
    issueType: null
  }, {
    id: 'bill-3',
    provider: 'Central Pharmacy',
    service: 'Prescription - Metformin',
    patient: 'Art Johnson',
    date: 'July 12, 2026',
    amount: 45.5,
    status: 'pending_review',
    dueDate: 'August 12, 2026',
    issueType: null
  }, {
    id: 'bill-4',
    provider: 'Eastside Imaging',
    service: 'X-Ray - Chest',
    patient: 'Art Johnson',
    date: 'June 30, 2026',
    amount: 385.25,
    status: 'issue_detected',
    dueDate: 'July 30, 2026',
    issueType: 'Out-of-network charge'
  }, {
    id: 'bill-5',
    provider: 'Pediatric Associates',
    service: 'Well Child Visit',
    patient: 'Emma Johnson',
    date: 'July 5, 2026',
    amount: 95.0,
    status: 'verified',
    dueDate: 'August 5, 2026',
    issueType: null
  }];
  const filteredBills = filter === 'all' ? bills : bills.filter(bill => bill.status === filter);
  const getStatusBadge = status => {
    switch (status) {
      case 'issue_detected':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <AlertTriangle size={12} className="mr-1" />
            Issue Detected
          </span>;
      case 'verified':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle2 size={12} className="mr-1" />
            Verified
          </span>;
      case 'pending_review':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
            <Clock size={12} className="mr-1" />
            Pending Review
          </span>;
      default:
        return null;
    }
  };
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Bills & Claims
          </h1>
          <p className="text-gray-600 mt-1">
            Review and manage healthcare expenses
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Upload a Bill
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="relative max-w-xs w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input type="search" placeholder="Search bills..." className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="flex items-center space-x-2">
            <div className="border border-gray-300 rounded-lg overflow-hidden flex">
              <button className={`px-4 py-2 text-sm font-medium ${filter === 'all' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setFilter('all')}>
                All
              </button>
              <button className={`px-4 py-2 text-sm font-medium ${filter === 'issue_detected' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setFilter('issue_detected')}>
                Issues
              </button>
              <button className={`px-4 py-2 text-sm font-medium ${filter === 'verified' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setFilter('verified')}>
                Verified
              </button>
              <button className={`px-4 py-2 text-sm font-medium ${filter === 'pending_review' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setFilter('pending_review')}>
                Pending
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
                  Provider & Service
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBills.map(bill => <tr key={bill.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <Link to={`/bills/${bill.id}`} className="text-sm font-medium text-gray-900 hover:text-blue-600">
                        {bill.provider}
                      </Link>
                      <p className="text-xs text-gray-500">{bill.service}</p>
                      {bill.issueType && <p className="text-xs text-red-600 mt-1">
                          {bill.issueType}
                        </p>}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    {bill.patient}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    {bill.date}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    ${bill.amount.toFixed(2)}
                  </td>
                  <td className="px-4 py-4">{getStatusBadge(bill.status)}</td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    {bill.dueDate}
                  </td>
                  <td className="px-4 py-4 text-right">
                    <Link to={`/bills/${bill.id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center">
                      Review
                      <ArrowUpRight size={14} className="ml-1" />
                    </Link>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing {filteredBills.length} of {bills.length} bills
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
    </div>;
}