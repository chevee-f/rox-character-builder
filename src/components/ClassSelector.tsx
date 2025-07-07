import React from 'react';

export type ClassOption = {
  id: string;
  name: string;
  image: string;
};

const CLASSES: ClassOption[] = [
  { id: 'sniper', name: 'Sniper', image: '/assets/classes/sniper.png' },
  { id: 'assassin', name: 'Assassin', image: '/assets/classes/assassin.png' },
  { id: 'highpriest', name: 'High Priest', image: '/assets/classes/highpriest.png' },
  { id: 'lordknight', name: 'Lord Knight', image: '/assets/classes/lordknight.png' },
];

interface ClassSelectorProps {
  value?: string;
  onChange?: (classId: string) => void;
}

const ClassSelector: React.FC<ClassSelectorProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
      <div className="grid grid-cols-2 gap-3">
        {CLASSES.map(cls => (
          <button
            key={cls.id}
            type="button"
            className={`flex items-center space-x-2 p-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-indigo-500 ${value === cls.id ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 bg-white'}`}
            onClick={() => onChange && onChange(cls.id)}
          >
            <img src={cls.image} alt={cls.name} className="w-8 h-8 rounded" />
            <span className="font-semibold text-gray-800">{cls.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClassSelector; 