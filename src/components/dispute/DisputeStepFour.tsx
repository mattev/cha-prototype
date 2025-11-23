import React from 'react';
import { FileText, AlertCircle } from 'lucide-react';
interface DisputeStepFourProps {
  onBack: () => void;
  onSubmit: () => void;
  disputeData: {
    reason: string;
    description: string;
    documents: File[];
    contactMethod: string;
  };
}
export function DisputeStepFour({
  onBack,
  onSubmit,
  disputeData
}: DisputeStepFourProps) {
  const reasonLabels: Record<string, string> = {
    incorrect_charges: 'Incorrect Charges',
    service_not_received: 'Service Not Received',
    insurance_issue: 'Insurance Coverage Issue',
    duplicate_billing: 'Duplicate Billing',
    other: 'Other Issue'
  };
  return <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Review Your Dispute
      </h2>
      <p className="text-gray-600 mb-6">
        Please review the information before submitting
      </p>
      <div className="space-y-6 mb-8">
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-2">Dispute Reason</h3>
          <p className="text-gray-700">
            {reasonLabels[disputeData.reason] || disputeData.reason}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-2">Description</h3>
          <p className="text-gray-700 whitespace-pre-wrap">
            {disputeData.description}
          </p>
        </div>
        {disputeData.documents.length > 0 && <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="font-medium text-gray-900 mb-3">
              Supporting Documents ({disputeData.documents.length})
            </h3>
            <div className="space-y-2">
              {disputeData.documents.map((file, index) => <div key={index} className="flex items-center text-sm text-gray-700">
                  <FileText size={16} className="text-gray-400 mr-2" />
                  {file.name}
                </div>)}
            </div>
          </div>}
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 flex items-start">
          <AlertCircle size={20} className="text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-1">
              What happens next?
            </h3>
            <p className="text-sm text-blue-800">
              Our team will review your dispute within 5-7 business days. We'll
              contact you via email with updates and may request additional
              information if needed.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={onBack} className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
          Back
        </button>
        <button onClick={onSubmit} className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Submit Dispute
        </button>
      </div>
    </div>;
}