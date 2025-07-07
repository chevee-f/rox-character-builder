import React from 'react';

interface RefineSelectorProps {
  value?: number;
  onChange?: (value: number) => void;
}

const RefineSelector: React.FC<RefineSelectorProps> = ({ value = 0, onChange }) => {
  return (
    <select
      className="border rounded-lg px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
      value={value}
      onChange={e => onChange && onChange(Number(e.target.value))}
    >
      {Array.from({ length: 16 }, (_, i) => (
        <option key={i} value={i}>+{i}</option>
      ))}
    </select>
  );
};

export default RefineSelector; 