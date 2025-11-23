import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartPulse, ArrowRight, Users, Receipt, Calendar as CalendarIcon, Shield } from 'lucide-react';
export function Onboarding() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const totalSteps = 4;
  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      navigate('/');
    }
  };
  return <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b border-gray-200 py-4 px-6">
        <div className="flex items-center">
          <HeartPulse className="text-blue-600 mr-2" size={28} />
          <span className="font-semibold text-xl">CHA</span>
        </div>
      </header>
      <div className="flex-1 flex">
        <div className="hidden lg:block lg:w-1/2 bg-blue-600 text-white p-12">
          <div className="max-w-md mx-auto h-full flex flex-col">
            <div>
              <h1 className="text-3xl font-bold">Welcome to CHA</h1>
              <p className="mt-4 text-blue-100">
                Your comprehensive health assistant where health, money, and
                family care come together.
              </p>
            </div>
            <div className="mt-12 space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-500 p-2 rounded-lg mr-4">
                  <Users size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Family Management</h3>
                  <p className="mt-1 text-sm text-blue-100">
                    Coordinate care across your entire family with role-based
                    access.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500 p-2 rounded-lg mr-4">
                  <Receipt size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Bill Auditing</h3>
                  <p className="mt-1 text-sm text-blue-100">
                    Automatically detect errors and overcharges in your medical
                    bills.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500 p-2 rounded-lg mr-4">
                  <CalendarIcon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Appointment Management</h3>
                  <p className="mt-1 text-sm text-blue-100">
                    Track and manage healthcare appointments in one place.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500 p-2 rounded-lg mr-4">
                  <Shield size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Insurance Tracking</h3>
                  <p className="mt-1 text-sm text-blue-100">
                    Monitor deductibles, out-of-pocket maximums, and benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-6 md:p-12">
          <div className="max-w-md mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {Array.from({
                length: totalSteps
              }).map((_, index) => <div key={index} className={`h-2 rounded-full flex-1 mx-1 ${index < step ? 'bg-blue-600' : 'bg-gray-200'}`}></div>)}
              </div>
              <p className="text-sm text-gray-500">
                Step {step} of {totalSteps}
              </p>
            </div>
            {step === 1 && <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Create your account</h2>
                <p className="text-gray-600">
                  Let's get started by setting up your account.
                </p>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input type="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Create a password" />
                  </div>
                </div>
              </div>}
            {step === 2 && <div className="space-y-6">
                <h2 className="text-2xl font-semibold">
                  Your health insurance
                </h2>
                <p className="text-gray-600">
                  Add your insurance details to help us track your benefits and
                  expenses.
                </p>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-1">
                      Insurance Provider
                    </label>
                    <select id="insurance" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Select provider</option>
                      <option value="bcbs">Blue Cross Blue Shield</option>
                      <option value="aetna">Aetna</option>
                      <option value="cigna">Cigna</option>
                      <option value="united">UnitedHealthcare</option>
                      <option value="kaiser">Kaiser Permanente</option>
                      <option value="medicare">Medicare</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">
                      Plan Type
                    </label>
                    <select id="plan" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Select plan type</option>
                      <option value="ppo">PPO</option>
                      <option value="hmo">HMO</option>
                      <option value="hdhp">HDHP</option>
                      <option value="epo">EPO</option>
                      <option value="pos">POS</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="member_id" className="block text-sm font-medium text-gray-700 mb-1">
                      Member ID
                    </label>
                    <input type="text" id="member_id" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Your member ID" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="deductible" className="block text-sm font-medium text-gray-700 mb-1">
                        Annual Deductible
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                          $
                        </span>
                        <input type="text" id="deductible" className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="0.00" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="oop_max" className="block text-sm font-medium text-gray-700 mb-1">
                        Out-of-Pocket Max
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                          $
                        </span>
                        <input type="text" id="oop_max" className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="0.00" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
            {step === 3 && <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Add family members</h2>
                <p className="text-gray-600">
                  Add people whose healthcare you help manage.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Your profile</p>
                        <p className="text-sm text-gray-500">
                          Sandra Johnson (You)
                        </p>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        Admin
                      </span>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <label htmlFor="name_1" className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input type="text" id="name_1" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Family member's name" />
                      </div>
                      <div>
                        <label htmlFor="relation_1" className="block text-sm font-medium text-gray-700 mb-1">
                          Relationship
                        </label>
                        <select id="relation_1" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option value="">Select</option>
                          <option value="spouse">Spouse/Partner</option>
                          <option value="child">Child</option>
                          <option value="parent">Parent</option>
                          <option value="sibling">Sibling</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full py-2 border border-dashed border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                  + Add another family member
                </button>
              </div>}
            {step === 4 && <div className="space-y-6">
                <h2 className="text-2xl font-semibold">
                  Connect your health providers
                </h2>
                <p className="text-gray-600">
                  Link your healthcare providers to import records and bills.
                </p>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input id="provider_1" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        <label htmlFor="provider_1" className="ml-2 block font-medium">
                          Memorial Hospital System
                        </label>
                      </div>
                      <span className="text-xs text-gray-500">via TEFCA</span>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input id="provider_2" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        <label htmlFor="provider_2" className="ml-2 block font-medium">
                          City Medical Group
                        </label>
                      </div>
                      <span className="text-xs text-gray-500">via TEFCA</span>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input id="provider_3" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        <label htmlFor="provider_3" className="ml-2 block font-medium">
                          Blue Cross Blue Shield
                        </label>
                      </div>
                      <span className="text-xs text-gray-500">
                        Patient Access API
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="w-full py-2 border border-dashed border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                    + Add another provider
                  </button>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    You can add more providers later in Settings
                  </p>
                </div>
              </div>}
            <div className="mt-8">
              <button onClick={handleNext} className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                {step < totalSteps ? 'Continue' : 'Get Started'}
                <ArrowRight size={18} className="ml-2" />
              </button>
              {step > 1 && <button onClick={() => setStep(step - 1)} className="w-full mt-3 bg-white text-gray-700 px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                  Back
                </button>}
            </div>
          </div>
        </div>
      </div>
    </div>;
}