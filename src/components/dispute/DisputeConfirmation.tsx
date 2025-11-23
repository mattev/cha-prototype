import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, FileText, Mail } from 'lucide-react';
interface DisputeConfirmationProps {
  billId: string;
}
export function DisputeConfirmation({
  billId
}: DisputeConfirmationProps) {
  const navigate = useNavigate();
  const caseNumber = `DSP-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  return <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Dispute Submitted Successfully
        </h1>
        <p className="text-gray-600 mb-8">
          Your dispute has been received and is being reviewed
        </p>
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center mb-4">
            <FileText size={24} className="text-blue-600 mr-2" />
            <span className="text-sm text-gray-600">Case Number</span>
          </div>
          <p className="text-2xl font-mono font-bold text-gray-900">
            {caseNumber}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Save this number for your records
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 mb-8 flex items-start text-left">
          <Mail size={20} className="text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-1">
              Confirmation Email Sent
            </h3>
            <p className="text-sm text-blue-800">
              We've sent a confirmation email with your case details and next
              steps. Our team will review your dispute within 5-7 business days.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => navigate(`/bills/${billId}`)} className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Back to Bill
          </button>
          <button onClick={() => navigate('/bills')} className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            View All Bills
          </button>
        </div>
      </div>
    </div>;
}