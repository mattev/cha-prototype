import React from 'react';
import { InfoIcon, ArrowUpRight } from 'lucide-react';
export function FinancialSummary() {
  return <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Financial Summary
        </h2>
        <button className="text-sm text-blue-600 flex items-center">
          <span>View all</span>
          <ArrowUpRight size={16} className="ml-1" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center mb-2">
            <p className="text-sm font-medium text-gray-500">
              Family Deductible
            </p>
            <button className="ml-1.5 text-gray-400 hover:text-gray-600">
              <InfoIcon size={14} />
            </button>
          </div>
          <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full" style={{
            width: '65%'
          }}></div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <p className="font-medium">$2,600 spent</p>
            <p className="text-gray-500">$4,000 total</p>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <p className="text-sm font-medium text-gray-500">
              Out-of-Pocket Max
            </p>
            <button className="ml-1.5 text-gray-400 hover:text-gray-600">
              <InfoIcon size={14} />
            </button>
          </div>
          <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full" style={{
            width: '40%'
          }}></div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <p className="font-medium">$3,200 spent</p>
            <p className="text-gray-500">$8,000 total</p>
          </div>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-100">
        <h3 className="text-sm font-medium text-gray-800 mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium">
                Primary Care Visit - Dr. Smith
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Art Johnson • July 15, 2026
              </p>
            </div>
            <p className="text-sm font-medium">$45.00</p>
          </div>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium">Prescription - Metformin</p>
              <p className="text-xs text-gray-500 mt-1">
                Art Johnson • July 12, 2026
              </p>
            </div>
            <p className="text-sm font-medium">$12.50</p>
          </div>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium">
                Lab Work - Comprehensive Panel
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Sandra Johnson • July 8, 2026
              </p>
            </div>
            <p className="text-sm font-medium">$78.25</p>
          </div>
        </div>
      </div>
    </div>;
}