import React from 'react';

interface BuildSaveSlotsProps {
  selectedSlot?: number;
  onSelect?: (slot: number) => void;
}

const BuildSaveSlots: React.FC<BuildSaveSlotsProps> = ({ selectedSlot = 0, onSelect }) => {
  return (
    <div className="flex space-x-2">
      {[1, 2, 3].map(slot => (
        <button
          key={slot}
          className={`px-3 py-2 rounded-lg font-semibold border transition text-xs ${selectedSlot === slot ? 'bg-indigo-600 text-white border-indigo-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
          onClick={() => onSelect && onSelect(slot)}
        >
          Slot {slot}
        </button>
      ))}
    </div>
  );
};

export default BuildSaveSlots; 