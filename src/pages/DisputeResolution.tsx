import React, { useState, Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { DisputeStepOne } from '../components/dispute/DisputeStepOne';
import { DisputeStepTwo } from '../components/dispute/DisputeStepTwo';
import { DisputeStepThree } from '../components/dispute/DisputeStepThree';
import { DisputeStepFour } from '../components/dispute/DisputeStepFour';
import { DisputeConfirmation } from '../components/dispute/DisputeConfirmation';
export function DisputeResolution() {
  const navigate = useNavigate();
  const {
    id
  } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [disputeData, setDisputeData] = useState({
    reason: '',
    description: '',
    documents: [] as File[],
    contactMethod: 'email'
  });
  const [submitted, setSubmitted] = useState(false);
  const steps = [{
    number: 1,
    label: 'Reason'
  }, {
    number: 2,
    label: 'Details'
  }, {
    number: 3,
    label: 'Documents'
  }, {
    number: 4,
    label: 'Review'
  }];
  const handleNext = (data: Partial<typeof disputeData>) => {
    setDisputeData({
      ...disputeData,
      ...data
    });
    setCurrentStep(currentStep + 1);
  };
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleSubmit = () => {
    setSubmitted(true);
  };
  if (submitted) {
    return <DisputeConfirmation billId={id || ''} />;
  }
  return <div className="max-w-4xl mx-auto">
      <button onClick={() => navigate(`/bills/${id}`)} className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors">
        <ArrowLeft size={20} className="mr-2" />
        Back to Bill
      </button>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Dispute Resolution
        </h1>
        <p className="text-gray-600 mb-8">
          We'll help you resolve any issues with your bill
        </p>
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => <Fragment key={step.number}>
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${currentStep > step.number ? 'bg-green-500 text-white' : currentStep === step.number ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {currentStep > step.number ? <Check size={20} /> : step.number}
                  </div>
                  <span className={`text-sm mt-2 font-medium ${currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'}`}>
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && <div className={`h-1 flex-1 mx-2 transition-all duration-300 ${currentStep > step.number ? 'bg-green-500' : 'bg-gray-200'}`} />}
              </Fragment>)}
          </div>
        </div>
        {/* Step Content */}
        <div className="mt-8">
          {currentStep === 1 && <DisputeStepOne onNext={handleNext} initialData={disputeData} />}
          {currentStep === 2 && <DisputeStepTwo onNext={handleNext} onBack={handleBack} initialData={disputeData} />}
          {currentStep === 3 && <DisputeStepThree onNext={handleNext} onBack={handleBack} initialData={disputeData} />}
          {currentStep === 4 && <DisputeStepFour onBack={handleBack} onSubmit={handleSubmit} disputeData={disputeData} />}
        </div>
      </div>
    </div>;
}