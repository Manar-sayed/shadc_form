import { useState, useCallback } from 'react';

const useTableDataUpdater = <TData,>(initialData: TData[]) => {
  const [tableData, setTableData] = useState<TData[]>(initialData);

  const updateTableData = useCallback(
    (callback: (prevData: TData[]) => TData[]) => {
      setTableData((prevData) => callback([...prevData]));
    },
    []
  );

  return { tableData, updateTableData };
};

export default useTableDataUpdater;
