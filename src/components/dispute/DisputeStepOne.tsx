import React, { useState } from 'react';
import { AlertCircle, DollarSign, FileX, Shield, HelpCircle } from 'lucide-react';
interface DisputeStepOneProps {
  onNext: (data: {
    reason: string;
  }) => void;
  initialData: {
    reason: string;
  };
}
export function DisputeStepOne({
  onNext,
  initialData
}: DisputeStepOneProps) {
  const [selectedReason, setSelectedReason] = useState(initialData.reason);
  const reasons = [{
    id: 'incorrect_charges',
    icon: <DollarSign size={24} />,
    title: 'Incorrect Charges',
    description: 'The amount billed does not match services received'
  }, {
    id: 'service_not_received',
    icon: <FileX size={24} />,
    title: 'Service Not Received',
    description: 'Billed for services that were not provided'
  }, {
    id: 'insurance_issue',
    icon: <Shield size={24} />,
    title: 'Insurance Coverage Issue',
    description: 'Insurance should have covered more of the cost'
  }, {
    id: 'duplicate_billing',
    icon: <AlertCircle size={24} />,
    title: 'Duplicate Billing',
    description: 'Charged multiple times for the same service'
  }, {
    id: 'other',
    icon: <HelpCircle size={24} />,
    title: 'Other Issue',
    description: 'A different concern not listed above'
  }];
  const handleContinue = () => {
    if (selectedReason) {
      onNext({
        reason: selectedReason
      });
    }
  };
  return <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        What's the reason for your dispute?
      </h2>
      <p className="text-gray-600 mb-6">
        Select the option that best describes your concern
      </p>
      <div className="space-y-3 mb-8">
        {reasons.map(reason => <button key={reason.id} onClick={() => setSelectedReason(reason.id)} className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${selectedReason === reason.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300 bg-white'}`}>
            <div className="flex items-start">
              <div className={`flex-shrink-0 ${selectedReason === reason.id ? 'text-blue-600' : 'text-gray-400'}`}>
                {reason.icon}
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-gray-900">{reason.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {reason.description}
                </p>
              </div>
              <div className={`flex-shrink-0 w-5 h-5 rounded-full border-2 ml-4 transition-all ${selectedReason === reason.id ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`}>
                {selectedReason === reason.id && <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>}
              </div>
            </div>
          </button>)}
      </div>
      <div className="flex justify-end">
        <button onClick={handleContinue} disabled={!selectedReason} className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors">
          Continue
        </button>
      </div>
    </div>;
}