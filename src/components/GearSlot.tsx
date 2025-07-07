import React from 'react';
import RefineSelector from './RefineSelector';

const GEAR_OPTIONS = {
  weapon: [
    { id: 'longbow', name: 'Longbow', image: '/assets/equip/weapons/longbow.png' },
    { id: 'dagger', name: 'Dagger', image: '/assets/equip/weapons/dagger.png' },
  ],
  armor: [
    { id: 'leather', name: 'Leather Armor', image: '/assets/equip/armor/leather.png' },
    { id: 'chain', name: 'Chain Mail', image: '/assets/equip/armor/chain.png' },
  ],
  accessory: [
    { id: 'ring', name: 'Ring', image: '/assets/equip/accessory/ring.png' },
    { id: 'amulet', name: 'Amulet', image: '/assets/equip/accessory/amulet.png' },
  ],
  headgear: [
    { id: 'cap', name: 'Cap', image: '/assets/equip/headgear/cap.png' },
    { id: 'circlet', name: 'Circlet', image: '/assets/equip/headgear/circlet.png' },
  ],
};

export interface GearSlotValue {
  itemId: string;
  refine: number;
}

interface GearSlotProps {
  slot: keyof typeof GEAR_OPTIONS;
  value?: GearSlotValue;
  onChange?: (value: GearSlotValue) => void;
}

const GearSlot: React.FC<GearSlotProps> = ({ slot, value, onChange }) => {
  const options = GEAR_OPTIONS[slot];
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">{slot}</label>
      <div className="flex items-center space-x-2">
        <select
          className="border rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={value?.itemId || ''}
          onChange={e => onChange && onChange({ ...value, itemId: e.target.value, refine: value?.refine || 0 })}
        >
          <option value="">Select {slot}</option>
          {options.map(opt => (
            <option key={opt.id} value={opt.id}>{opt.name}</option>
          ))}
        </select>
        {value?.itemId && (
          <>
            <img src={options.find(o => o.id === value.itemId)?.image} alt="" className="w-8 h-8" />
            <RefineSelector
              value={value.refine}
              onChange={refine => onChange && onChange({ ...value, refine })}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default GearSlot; 