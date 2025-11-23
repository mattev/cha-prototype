import React, { useState } from 'react';
interface DisputeStepTwoProps {
  onNext: (data: {
    description: string;
  }) => void;
  onBack: () => void;
  initialData: {
    description: string;
  };
}
export function DisputeStepTwo({
  onNext,
  onBack,
  initialData
}: DisputeStepTwoProps) {
  const [description, setDescription] = useState(initialData.description);
  const handleContinue = () => {
    if (description.trim()) {
      onNext({
        description
      });
    }
  };
  return <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Provide Details
      </h2>
      <p className="text-gray-600 mb-6">
        Please describe the issue in detail. Include any relevant dates,
        amounts, or other information.
      </p>
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} rows={8} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" placeholder="Explain the issue with your bill..." />
        <p className="text-sm text-gray-500 mt-2">
          {description.length} characters
        </p>
      </div>
      <div className="flex justify-between">
        <button onClick={onBack} className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
          Back
        </button>
        <button onClick={handleContinue} disabled={!description.trim()} className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors">
          Continue
        </button>
      </div>
    </div>;
}