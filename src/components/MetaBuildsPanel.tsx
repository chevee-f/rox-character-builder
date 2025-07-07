import React from 'react';

export interface MetaBuild {
  id: string;
  classId: string;
  gear: {
    weapon: string;
    armor: string;
    accessory: string;
    headgear: string;
  };
  title: string;
  tags: string;
  image: string;
}

const META_BUILDS: MetaBuild[] = [
  {
    id: 'meta1',
    classId: 'sniper',
    gear: { weapon: 'longbow', armor: 'leather', accessory: 'ring', headgear: 'cap' },
    title: 'PvE DPS Beast',
    tags: 'PvE, DPS, MVP',
    image: '/assets/meta/sniper_pve.png',
  },
  {
    id: 'meta2',
    classId: 'assassin',
    gear: { weapon: 'dagger', armor: 'chain', accessory: 'amulet', headgear: 'circlet' },
    title: 'PvP Burst King',
    tags: 'PvP, Burst, Arena',
    image: '/assets/meta/assassin_pvp.png',
  },
  {
    id: 'meta3',
    classId: 'highpriest',
    gear: { weapon: 'longbow', armor: 'leather', accessory: 'ring', headgear: 'cap' },
    title: 'Support Master',
    tags: 'Support, Healing, Guild',
    image: '/assets/meta/priest_support.png',
  },
];

interface MetaBuildsPanelProps {
  onSelect?: (build: MetaBuild) => void;
}

const MetaBuildsPanel: React.FC<MetaBuildsPanelProps> = ({ onSelect }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Meta Builds (Read-only)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {META_BUILDS.map(build => (
          <div
            key={build.id}
            className="bg-gray-50 rounded-lg p-3 flex items-center space-x-3 cursor-pointer hover:bg-indigo-50 border border-transparent hover:border-indigo-200 transition"
            onClick={() => onSelect && onSelect(build)}
          >
            <img src={build.image} alt={build.title} className="w-16 h-16 rounded object-cover" />
            <div>
              <div className="font-bold text-gray-800">{build.title}</div>
              <div className="text-xs text-gray-500">{build.tags}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetaBuildsPanel; 