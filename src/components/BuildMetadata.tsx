import React from 'react';

export interface BuildMetadataValue {
  title: string;
  price: string;
  tags: string;
}

interface BuildMetadataProps {
  value?: BuildMetadataValue;
  onChange?: (value: BuildMetadataValue) => void;
}

const BuildMetadata: React.FC<BuildMetadataProps> = ({ value = { title: '', price: '', tags: '' }, onChange }) => {
  return (
    <div className="space-y-2 mt-4">
      <input
        className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Build Title"
        value={value.title}
        onChange={e => onChange && onChange({ ...value, title: e.target.value })}
      />
      <input
        className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Price in zeny (optional)"
        value={value.price}
        onChange={e => onChange && onChange({ ...value, price: e.target.value })}
        type="number"
        min="0"
      />
      <input
        className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Tags (PvP, MVP, PvE, etc.)"
        value={value.tags}
        onChange={e => onChange && onChange({ ...value, tags: e.target.value })}
      />
    </div>
  );
};

export default BuildMetadata; 