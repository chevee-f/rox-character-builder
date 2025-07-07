import React from 'react';
import RefineSelector from './RefineSelector';

interface GearOption {
  id: string;
  name: string;
  image: string;
}

const GEAR_OPTIONS: { [key: string]: GearOption[] } = {
  weapon: [
    { id: 'longbow', name: 'Longbow', image: '/assets/equip/weapons/longbow.png' },
    { id: 'dagger', name: 'Dagger', image: '/assets/equip/weapons/dagger.png' },
  ],
  shield: [
    { id: 'buckler', name: 'Buckler', image: '/assets/equip/shield/buckler.png' },
    { id: 'guard', name: 'Guard', image: '/assets/equip/shield/guard.png' },
  ],
  armor: [
    { id: 'leather', name: 'Leather Armor', image: '/assets/equip/armor/leather.png' },
    { id: 'chain', name: 'Chain Mail', image: '/assets/equip/armor/chain.png' },
  ],
  shoes: [
    { id: 'boots', name: 'Boots', image: '/assets/equip/shoes/boots.png' },
    { id: 'sandals', name: 'Sandals', image: '/assets/equip/shoes/sandals.png' },
  ],
  garment: [
    { id: 'muffler', name: 'Muffler', image: '/assets/equip/garment/muffler.png' },
    { id: 'cloak', name: 'Cloak', image: '/assets/equip/garment/cloak.png' },
  ],
  accessory1: [
    { id: 'ring', name: 'Ring', image: '/assets/equip/accessory/ring.png' },
    { id: 'brooch', name: 'Brooch', image: '/assets/equip/accessory/brooch.png' },
  ],
  accessory2: [
    { id: 'amulet', name: 'Amulet', image: '/assets/equip/accessory/amulet.png' },
    { id: 'glove', name: 'Glove', image: '/assets/equip/accessory/glove.png' },
  ],
  talisman: [
    { id: 'talisman', name: 'Talisman', image: '/assets/equip/talisman/talisman.png' },
    { id: 'lucky', name: 'Lucky Charm', image: '/assets/equip/talisman/lucky.png' },
  ],
  head: [
    { id: 'cap', name: 'Cap', image: '/assets/equip/head/cap.png' },
    { id: 'circlet', name: 'Circlet', image: '/assets/equip/head/circlet.png' },
  ],
  mouth: [
    { id: 'mask', name: 'Mask', image: '/assets/equip/mouth/mask.png' },
    { id: 'pipe', name: 'Pipe', image: '/assets/equip/mouth/pipe.png' },
  ],
  eyes: [
    { id: 'glasses', name: 'Glasses', image: '/assets/equip/eyes/glasses.png' },
    { id: 'monocle', name: 'Monocle', image: '/assets/equip/eyes/monocle.png' },
  ],
};

export interface GearSlotValue {
  itemId: string;
  refine: number;
}

interface GearSlotProps {
  slot: string;
  value?: GearSlotValue;
  onChange?: (value: GearSlotValue) => void;
}

const GearSlot: React.FC<GearSlotProps> = ({ slot, value, onChange }) => {
  const options: GearOption[] = GEAR_OPTIONS[slot] || [];
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
          {options.map((opt: GearOption) => (
            <option key={opt.id} value={opt.id}>{opt.name}</option>
          ))}
        </select>
        {value?.itemId && (
          <>
            <img src={options.find((o: GearOption) => o.id === value.itemId)?.image} alt="" className="w-8 h-8" onError={e => (e.currentTarget.style.display = 'none')} />
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