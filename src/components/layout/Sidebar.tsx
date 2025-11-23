import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Receipt, Users, Calendar as CalendarIcon, Pill, FileText, Settings as SettingsIcon, ChevronLeft, ChevronRight, HeartPulse } from 'lucide-react';
export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navItems = [{
    icon: <LayoutDashboard size={20} />,
    label: 'Dashboard',
    to: '/'
  }, {
    icon: <Receipt size={20} />,
    label: 'Bills & Claims',
    to: '/bills'
  }, {
    icon: <Users size={20} />,
    label: 'Family',
    to: '/family'
  }, {
    icon: <CalendarIcon size={20} />,
    label: 'Calendar',
    to: '/calendar'
  }, {
    icon: <Pill size={20} />,
    label: 'Pharmacy',
    to: '/pharmacy'
  }, {
    icon: <FileText size={20} />,
    label: 'Health Records',
    to: '/records'
  }, {
    icon: <SettingsIcon size={20} />,
    label: 'Settings',
    to: '/settings'
  }];
  return <aside className={`bg-white border-r border-gray-200 transition-all duration-300 flex flex-col ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex items-center h-16 px-4 border-b border-gray-200">
        {!collapsed && <div className="flex items-center">
            <HeartPulse className="text-blue-600 mr-2" size={24} />
            <span className="font-semibold text-lg">CHA</span>
          </div>}
        {collapsed && <HeartPulse className="text-blue-600 mx-auto" size={24} />}
      </div>
      <nav className="flex-1 pt-4">
        <ul className="space-y-1">
          {navItems.map((item, index) => <li key={index}>
              <NavLink to={item.to} className={({
            isActive
          }) => `flex items-center px-4 py-2.5 text-sm font-medium rounded-lg ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'} ${collapsed ? 'justify-center' : ''}`}>
                <span className="flex-shrink-0">{item.icon}</span>
                {!collapsed && <span className="ml-3">{item.label}</span>}
              </NavLink>
            </li>)}
        </ul>
      </nav>
      <button onClick={() => setCollapsed(!collapsed)} className="flex items-center justify-center h-10 w-10 mx-auto mb-4 rounded-full hover:bg-gray-100" aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
        {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>
    </aside>;
}