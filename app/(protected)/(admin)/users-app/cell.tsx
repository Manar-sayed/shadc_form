'use client';

import { useState } from 'react';
interface CellProps {
  row: {
    getValue: (key: string) => string;
    original: {
      id: string;
    };
  };
}

export default function Cell({ row }: CellProps) {
  const [selectedRole, setSelectedRole] = useState(row.getValue('role'));

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
    // handleRoleUpdate(row.original.id, event.target.value); // Update data accordingly
  };

  return (
    <div className="text-left font-medium">
      <select
        name="role"
        id="role-select"
        value={selectedRole}
        onChange={handleRoleChange}
        className="h-[35px]"
      >
        <option value="ADMIN">Admin</option>
        <option value="USER">User</option>
      </select>
    </div>
  );
}
