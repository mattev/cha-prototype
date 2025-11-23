import React from 'react';
import { User, Bell, Shield, CreditCard, HelpCircle, Building, FileText, ChevronRight } from 'lucide-react';
export function Settings() {
  const categories = [{
    id: 'account',
    icon: <User size={20} />,
    title: 'Account',
    description: 'Manage your personal information',
    items: [{
      id: 'profile',
      name: 'Profile Information'
    }, {
      id: 'password',
      name: 'Password & Security'
    }, {
      id: 'email',
      name: 'Email Preferences'
    }]
  }, {
    id: 'notifications',
    icon: <Bell size={20} />,
    title: 'Notifications',
    description: 'Configure how we contact you',
    items: [{
      id: 'app',
      name: 'App Notifications'
    }, {
      id: 'email_notif',
      name: 'Email Notifications'
    }, {
      id: 'sms',
      name: 'SMS Alerts'
    }]
  }, {
    id: 'privacy',
    icon: <Shield size={20} />,
    title: 'Privacy & Data',
    description: 'Control your data and privacy settings',
    items: [{
      id: 'sharing',
      name: 'Data Sharing Preferences'
    }, {
      id: 'export',
      name: 'Export Your Data'
    }, {
      id: 'delete',
      name: 'Delete Account'
    }]
  }, {
    id: 'billing',
    icon: <CreditCard size={20} />,
    title: 'Billing',
    description: 'Manage your subscription and payments',
    items: [{
      id: 'subscription',
      name: 'Subscription Plan'
    }, {
      id: 'payment',
      name: 'Payment Methods'
    }, {
      id: 'history',
      name: 'Billing History'
    }]
  }, {
    id: 'integrations',
    icon: <Building size={20} />,
    title: 'Provider Connections',
    description: 'Manage your healthcare provider connections',
    items: [{
      id: 'providers',
      name: 'Healthcare Providers'
    }, {
      id: 'insurance',
      name: 'Insurance Plans'
    }, {
      id: 'pharmacies',
      name: 'Pharmacies'
    }]
  }, {
    id: 'help',
    icon: <HelpCircle size={20} />,
    title: 'Help & Support',
    description: 'Get help with using CHA',
    items: [{
      id: 'faq',
      name: 'Frequently Asked Questions'
    }, {
      id: 'contact',
      name: 'Contact Support'
    }, {
      id: 'feedback',
      name: 'Submit Feedback'
    }]
  }];
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
          <p className="text-gray-600 mt-1">
            Manage your account and preferences
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map(category => <div key={category.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-start mb-4">
              <div className="p-2 bg-blue-100 rounded-lg mr-3">
                <span className="text-blue-600">{category.icon}</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {category.title}
                </h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  {category.description}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              {category.items.map(item => <div key={item.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <span className="text-sm text-gray-700">{item.name}</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>)}
            </div>
          </div>)}
      </div>
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Legal & Compliance
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center">
              <FileText size={18} className="text-gray-400 mr-3" />
              <span className="text-sm text-gray-700">Terms of Service</span>
            </div>
          </div>
          <div className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center">
              <FileText size={18} className="text-gray-400 mr-3" />
              <span className="text-sm text-gray-700">Privacy Policy</span>
            </div>
          </div>
          <div className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center">
              <FileText size={18} className="text-gray-400 mr-3" />
              <span className="text-sm text-gray-700">HIPAA Notice</span>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            CHA Version 1.0.0 • © 2026 CHA Health, Inc. • All Rights Reserved
          </p>
        </div>
      </div>
    </div>;
}