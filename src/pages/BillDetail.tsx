import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, FileText, Download, MessageSquare, Share2, Printer, CheckCircle2 } from 'lucide-react';
export function BillDetail() {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  // For this example, we're hardcoding a bill with issues
  const bill = {
    id: id,
    provider: 'Memorial Hospital',
    service: 'Emergency Room Visit',
    patient: 'Art Johnson',
    date: 'June 28, 2026',
    amount: 1245.75,
    status: 'issue_detected',
    dueDate: 'July 30, 2026',
    issueType: 'Potential duplicate charge',
    insurance: {
      name: 'Blue Cross Blue Shield',
      plan: 'PPO Family Plan',
      memberId: 'XYZ123456789',
      covered: 875.5,
      adjustment: 125.0
    },
    lineItems: [{
      id: 1,
      code: '99285',
      description: 'Emergency Department Visit, High Complexity',
      amount: 950.0,
      issue: false
    }, {
      id: 2,
      code: '71045',
      description: 'X-Ray, Chest, Single View',
      amount: 175.75,
      issue: false
    }, {
      id: 3,
      code: '71045',
      description: 'X-Ray, Chest, Single View',
      amount: 175.75,
      issue: true,
      issueType: 'Potential duplicate charge'
    }, {
      id: 4,
      code: '96374',
      description: 'IV Push, Single or Initial Substance/Drug',
      amount: 120.0,
      issue: false
    }],
    history: [{
      date: 'June 28, 2026',
      event: 'Service provided at Memorial Hospital'
    }, {
      date: 'July 5, 2026',
      event: 'Claim submitted to Blue Cross Blue Shield'
    }, {
      date: 'July 12, 2026',
      event: 'Claim processed by insurance'
    }, {
      date: 'July 15, 2026',
      event: 'Bill received from Memorial Hospital'
    }, {
      date: 'July 16, 2026',
      event: 'Bill uploaded to CHA'
    }]
  };
  return <div className="max-w-4xl mx-auto">
      <div>
        <Link to="/bills" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-4">
          <ArrowLeft size={16} className="mr-1" />
          Back to Bills
        </Link>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Medical Bill #{id}
              </h1>
              <p className="text-gray-600 mt-1">
                Dr. Sarah Johnson - Annual Checkup
              </p>
            </div>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              Payment Due
            </span>
          </div>
          <div className="flex gap-3 mt-6">
            <button onClick={() => navigate(`/bills/${id}/dispute`)} className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Dispute Bill
            </button>
            <button className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Pay Now
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Bill Summary
              </h2>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                  <Download size={18} />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                  <Printer size={18} />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Patient:</span>
                <span className="font-medium">{bill.patient}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Insurance:</span>
                <span className="font-medium">
                  {bill.insurance.name} - {bill.insurance.plan}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Member ID:</span>
                <span className="font-medium">{bill.insurance.memberId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Due Date:</span>
                <span className="font-medium">{bill.dueDate}</span>
              </div>
            </div>
            <div className="mb-6">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <AlertTriangle className="text-amber-600 mr-3 mt-0.5" size={20} />
                  <div>
                    <h3 className="font-medium text-amber-800">
                      Issue Detected
                    </h3>
                    <p className="text-sm text-amber-700 mt-1">
                      We found a potential duplicate charge for the chest X-ray.
                      This could save you $175.75 if corrected.
                    </p>
                    <button className="mt-2 text-sm font-medium text-amber-800 hover:text-amber-900">
                      Learn how to dispute this charge
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="font-medium text-gray-800 mb-3">Charges</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Code
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {bill.lineItems.map(item => <tr key={item.id} className={item.issue ? 'bg-amber-50' : ''}>
                        <td className="px-4 py-3 text-sm text-gray-500">
                          {item.code}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {item.description}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 text-right">
                          ${item.amount.toFixed(2)}
                        </td>
                        <td className="px-4 py-3 text-center">
                          {item.issue ? <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                              <AlertTriangle size={12} className="mr-1" />
                              Issue
                            </span> : <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <CheckCircle2 size={12} className="mr-1" />
                              Verified
                            </span>}
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Total Charges:</span>
                  <span className="font-medium">
                    $
                    {bill.lineItems.reduce((sum, item) => sum + item.amount, 0).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Insurance Adjustment:</span>
                  <span className="font-medium">
                    -${bill.insurance.adjustment.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Insurance Paid:</span>
                  <span className="font-medium">
                    -${bill.insurance.covered.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="text-gray-800 font-medium">
                    Your Responsibility:
                  </span>
                  <span className="text-xl font-semibold text-gray-900">
                    $
                    {(bill.lineItems.reduce((sum, item) => sum + item.amount, 0) - bill.insurance.covered - bill.insurance.adjustment).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between mt-1 text-sm">
                  <span className="text-amber-600 font-medium">
                    Potential Savings:
                  </span>
                  <span className="text-amber-600 font-medium">$175.75</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Explanation of Benefits
            </h2>
            <div className="flex items-center justify-center border border-gray-200 rounded-lg p-12 bg-gray-50">
              <div className="text-center">
                <FileText size={36} className="mx-auto text-gray-400 mb-2" />
                <p className="text-gray-600 mb-4">
                  View the complete Explanation of Benefits from your insurance
                </p>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                  View EOB Document
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Actions
            </h2>
            <div className="space-y-3">
              <button className="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center">
                <MessageSquare size={16} className="mr-2" />
                Contact Provider
              </button>
              <button className="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center">
                <MessageSquare size={16} className="mr-2" />
                Contact Insurance
              </button>
              <button className="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center">
                <Download size={16} className="mr-2" />
                Download PDF
              </button>
              <button className="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center">
                <Printer size={16} className="mr-2" />
                Print Bill
              </button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Timeline
            </h2>
            <div className="space-y-4">
              {bill.history.map((event, index) => <div key={index} className="relative pl-6 pb-4">
                  {index !== bill.history.length - 1 && <div className="absolute top-2.5 left-2 -bottom-2 w-0.5 bg-gray-200"></div>}
                  <div className="absolute top-2.5 left-0 w-4 h-4 rounded-full border-2 border-blue-600 bg-white"></div>
                  <p className="text-xs text-gray-500">{event.date}</p>
                  <p className="text-sm font-medium">{event.event}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
}