import React from 'react';
import { MapPin, Trash2, Package, FileCheck, Calendar, CreditCard } from 'lucide-react';

interface BreadcrumbStep {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  isCompleted: boolean;
}

const Breadcrumbs: React.FC = () => {
  const steps: BreadcrumbStep[] = [
    {
      id: 'postcode',
      label: 'Postcode',
      icon: <MapPin size={18} />,
      isActive: false,
      isCompleted: true
    },
    {
      id: 'waste-type',
      label: 'Waste Type',
      icon: <Trash2 size={18} />,
      isActive: false,
      isCompleted: true
    },
    {
      id: 'select-skip',
      label: 'Select Skip',
      icon: <Package size={18} />,
      isActive: true,
      isCompleted: false
    },
    {
      id: 'permit-check',
      label: 'Permit Check',
      icon: <FileCheck size={18} />,
      isActive: false,
      isCompleted: false
    },
    {
      id: 'choose-date',
      label: 'Choose Date',
      icon: <Calendar size={18} />,
      isActive: false,
      isCompleted: false
    },
    {
      id: 'payment',
      label: 'Payment',
      icon: <CreditCard size={18} />,
      isActive: false,
      isCompleted: false
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Step with icon and label */}
            <div className="flex flex-col items-center">
              <div 
                className={`
                  flex items-center justify-center w-10 h-10 rounded-full mb-1
                  ${step.isActive ? 'bg-blue-600 text-white' : 
                    step.isCompleted ? 'bg-blue-600 text-white' : 
                    'bg-gray-400 dark:bg-gray-600 text-white dark:text-gray-300'}
                `}
              >
                {step.icon}
              </div>
              <span 
                className={`
                  text-xs font-medium hidden sm:block
                  ${step.isActive ? 'text-blue-600 dark:text-blue-400' : 
                    step.isCompleted ? 'text-blue-600 dark:text-blue-400' : 
                    'text-gray-500 dark:text-gray-400'}
                `}
              >
                {step.label}
              </span>
            </div>
            
            {/* Connector line between steps */}
            {index < steps.length - 1 && (
              <div 
                className={`
                  flex-1 h-0.5 mx-2
                  ${index < steps.findIndex(s => s.isActive) ? 
                    'bg-blue-600 dark:bg-blue-500' : 
                    'bg-gray-300 dark:bg-gray-600'}
                `}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;