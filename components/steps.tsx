import React from 'react';

function Steps({ currentStep, steps }: any) {
  return (
    <nav aria-label="Progress" className="">
      <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
        {steps.map((step: any, index: any) => (
          <li key={index} className="md:flex-1">
            {currentStep > index ? (
              <div className="group flex w-full flex-col border-l-4 border-green-500 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-green-500 transition-colors ">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            ) : currentStep === index ? (
              <div
                className="flex w-full flex-col border-l-4 border-green-500 py-2 pl-4 md:border-l-0 md:border-b-4 md:pt-0 md:pl-0 md:pb-4"
                aria-current="step"
              >
                <span className="text-sm font-medium text-green-500">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            ) : (
              <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-b-4 md:pt-0 md:pl-0 md:pb-4">
                <span className="text-sm font-medium text-gray-500 transition-colors">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Steps;
