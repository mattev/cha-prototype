import React from 'react';
import { Search, Pill, AlertCircle, CheckCircle2, Clock, ChevronRight, ArrowUpRight, CalendarClock, RefreshCw } from 'lucide-react';
export function Pharmacy() {
  const medications = [{
    id: 1,
    name: 'Metformin 500mg',
    patient: 'Art Johnson',
    schedule: 'Twice daily',
    refills: 2,
    nextRefill: 'July 30, 2026',
    pharmacy: 'Central Pharmacy',
    price: {
      insurance: 12.5,
      cash: 9.99,
      savings: 2.51
    },
    status: 'active'
  }, {
    id: 2,
    name: 'Lisinopril 10mg',
    patient: 'Art Johnson',
    schedule: 'Once daily',
    refills: 5,
    nextRefill: 'August 15, 2026',
    pharmacy: 'Central Pharmacy',
    price: {
      insurance: 8.0,
      cash: 6.5,
      savings: 1.5
    },
    status: 'active'
  }, {
    id: 3,
    name: 'Eliquis 5mg',
    patient: 'Art Johnson',
    schedule: 'Twice daily',
    refills: 1,
    nextRefill: 'July 25, 2026',
    pharmacy: 'Memorial Hospital Pharmacy',
    price: {
      insurance: 45.0,
      cash: 120.0,
      savings: 0
    },
    status: 'active'
  }, {
    id: 4,
    name: 'Amoxicillin 500mg',
    patient: 'Emma Johnson',
    schedule: 'Three times daily',
    refills: 0,
    nextRefill: null,
    pharmacy: 'Central Pharmacy',
    price: {
      insurance: 5.0,
      cash: 12.0,
      savings: 0
    },
    status: 'completed',
    endDate: 'July 10, 2026'
  }];
  const pharmacies = [{
    id: 1,
    name: 'Central Pharmacy',
    address: '123 Main St, Anytown, USA',
    phone: '(555) 123-4567',
    hours: 'Mon-Fri: 8am-9pm, Sat-Sun: 9am-6pm'
  }, {
    id: 2,
    name: 'Memorial Hospital Pharmacy',
    address: '456 Hospital Way, Anytown, USA',
    phone: '(555) 987-6543',
    hours: 'Mon-Sun: 24 hours'
  }, {
    id: 3,
    name: 'Cost Plus Drugs',
    address: 'Online',
    phone: '(800) 555-1234',
    hours: 'Online: 24/7'
  }];
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Pharmacy</h1>
          <p className="text-gray-600 mt-1">
            Manage medications and save on prescriptions
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Add Medication
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Current Medications
          </h2>
          <div className="relative max-w-xs w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input type="search" placeholder="Search medications..." className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>
        <div className="space-y-4">
          {medications.filter(med => med.status === 'active').map(medication => <div key={medication.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      <Pill size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium">
                        {medication.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {medication.schedule} • {medication.patient}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                    {medication.price.cash < medication.price.insurance ? <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircle2 size={12} className="mr-1" />
                        Save ${medication.price.savings.toFixed(2)} with cash
                        price
                      </span> : null}
                    {medication.refills <= 1 && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        <AlertCircle size={12} className="mr-1" />
                        {medication.refills === 0 ? 'No refills left' : 'Last refill'}
                      </span>}
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      <div>
                        <p className="text-xs text-gray-500">Next Refill</p>
                        <p className="text-sm font-medium flex items-center">
                          <CalendarClock size={14} className="mr-1 text-gray-400" />
                          {medication.nextRefill}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">
                          Refills Remaining
                        </p>
                        <p className="text-sm font-medium flex items-center">
                          <RefreshCw size={14} className="mr-1 text-gray-400" />
                          {medication.refills}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Pharmacy</p>
                        <p className="text-sm font-medium">
                          {medication.pharmacy}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Your Cost</p>
                        <p className="text-sm font-medium">
                          $
                          {Math.min(medication.price.insurance, medication.price.cash).toFixed(2)}
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        Refill Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>)}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Medication History
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medication
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fill Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pharmacy
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cost
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    Metformin 500mg
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    Art Johnson
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    June 30, 2026
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    Central Pharmacy
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">$9.99</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Filled
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    Lisinopril 10mg
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    Art Johnson
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    June 15, 2026
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    Central Pharmacy
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">$6.50</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Filled
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    Eliquis 5mg
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    Art Johnson
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    June 25, 2026
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    Memorial Hospital Pharmacy
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">$45.00</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Filled
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    Amoxicillin 500mg
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    Emma Johnson
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    July 3, 2026
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    Central Pharmacy
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">$5.00</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Completed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-center">
            <button className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800">
              View Full History
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Savings Summary
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">Monthly Savings</span>
                  <span className="text-sm font-medium text-green-600">
                    $4.01
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{
                  width: '15%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">Annual Savings</span>
                  <span className="text-sm font-medium text-green-600">
                    $48.12
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{
                  width: '35%'
                }}></div>
                </div>
              </div>
              <div className="pt-3 mt-3 border-t border-gray-100">
                <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  Find more savings
                  <ArrowUpRight size={14} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Pharmacies
            </h2>
            <div className="space-y-3">
              {pharmacies.map(pharmacy => <div key={pharmacy.id} className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                  <div className="flex justify-between">
                    <h3 className="text-sm font-medium">{pharmacy.name}</h3>
                    <button className="text-gray-400 hover:text-gray-600">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {pharmacy.address}
                  </p>
                  <p className="text-xs text-gray-500">{pharmacy.phone}</p>
                </div>)}
              <button className="w-full py-2 border border-dashed border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 mt-2">
                + Add Pharmacy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
}