import React from 'react';

interface BuildPreviewProps {
  classId?: string;
  gear?: {
    weapon?: string;
    armor?: string;
    accessory?: string;
    headgear?: string;
  };
}

const getImage = (type: string, id?: string) => {
  if (!id) return undefined;
  switch (type) {
    case 'class': return `/assets/classes/${id}.png`;
    case 'weapon': return `/assets/equip/weapons/${id}.png`;
    case 'armor': return `/assets/equip/armor/${id}.png`;
    case 'accessory': return `/assets/equip/accessory/${id}.png`;
    case 'headgear': return `/assets/equip/headgear/${id}.png`;
    default: return undefined;
  }
};

const BuildPreview: React.FC<BuildPreviewProps> = ({ classId = 'sniper', gear = {} }) => {
  return (
    <div className="relative w-48 h-64 mx-auto mb-4">
      {/* Base class image */}
      {classId && (
        <img src={getImage('class', classId)} alt="Class" className="absolute w-full h-full object-contain z-10" />
      )}
      {/* Gear overlays */}
      {gear.weapon && (
        <img src={getImage('weapon', gear.weapon)} alt="Weapon" className="absolute w-full h-full object-contain z-20" />
      )}
      {gear.armor && (
        <img src={getImage('armor', gear.armor)} alt="Armor" className="absolute w-full h-full object-contain z-30" />
      )}
      {gear.accessory && (
        <img src={getImage('accessory', gear.accessory)} alt="Accessory" className="absolute w-full h-full object-contain z-40" />
      )}
      {gear.headgear && (
        <img src={getImage('headgear', gear.headgear)} alt="Headgear" className="absolute w-full h-full object-contain z-50" />
      )}
      {/* Frame */}
      <div className="absolute inset-0 border-4 border-indigo-200 rounded-xl z-60 pointer-events-none" />
    </div>
  );
};

export default BuildPreview; 