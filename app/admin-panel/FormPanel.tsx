import { Button } from '@/components/ui/button';
import React from 'react';

function FormPanel({ handleSubmit, handleInputChange, formData }: any) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-3 mt-5 w-[80%] mx-auto">
        <div>
          <label htmlFor="fromDate" className="block mb-2 text-black">
            From Date:
          </label>
          <input
            type="date"
            name="fromDate"
            id="fromDate"
            placeholder="YYYY-MM-DD"
            value={formData.fromDate}
            onChange={handleInputChange}
            className="border border-sky-500 px-3  rounded py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="toDate" className="block mb-2 text-black">
            To Date:
          </label>
          <input
            type="date"
            name="toDate"
            id="toDate"
            placeholder="YYYY-MM-DD"
            value={formData.toDate}
            onChange={handleInputChange}
            className="border border-sky-500 px-3  rounded py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="appNum" className="block mb-2 text-black">
            Application Number:
          </label>
          <input
            type="number"
            name="appNum"
            id="appNum"
            min={0}
            value={formData.appNum}
            onChange={handleInputChange}
            className="border border-sky-500 px-3  rounded py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="stuNaID" className="block mb-2 text-black">
            Student National ID:
          </label>
          <input
            type="number"
            name="stuNaID"
            id="stuNaID"
            min={0}
            value={formData.stuNaID}
            onChange={handleInputChange}
            className="border border-sky-500 px-3  rounded py-1 w-full"
          />
        </div>
      </div>
      <div className="mt-5 text-end w-[80%] mx-auto">
        <button
          type="submit"
          className="bg-primary-color text-white px-5 py-1 rounded shadow-sm"
        >
          GO
        </button>
      </div>
    </form>
  );
}

export default FormPanel;
