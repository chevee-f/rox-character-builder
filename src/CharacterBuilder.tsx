import React, { useState, useEffect } from 'react';
import ClassSelector, { ClassOption } from './components/ClassSelector';
import GearSlot, { GearSlotValue } from './components/GearSlot';
import RefineSelector from './components/RefineSelector';
import BuildPreview from './components/BuildPreview';
import BuildSaveSlots from './components/BuildSaveSlots';
import MetaBuildsPanel, { MetaBuild } from './components/MetaBuildsPanel';
import BuildMetadata, { BuildMetadataValue } from './components/BuildMetadata';
// import ImageExportButton from './components/ImageExportButton'; // Optional
import { GiBroadsword, GiShield, GiArmorVest, GiBoots, GiCape, GiRing, GiAmulet, GiLaurelCrown, GiLipstick, GiEyelashes, GiTalisman } from 'react-icons/gi';

const EQUIPMENT_SLOTS = [
  { key: 'weapon', label: 'Weapon', icon: <GiBroadsword /> },
  { key: 'shield', label: 'Shield', icon: <GiShield /> },
  { key: 'armor', label: 'Armor', icon: <GiArmorVest /> },
  { key: 'shoes', label: 'Shoes', icon: <GiBoots /> },
  { key: 'garment', label: 'Garment', icon: <GiCape /> },
  { key: 'accessory1', label: 'Accessory 1', icon: <GiRing /> },
  { key: 'accessory2', label: 'Accessory 2', icon: <GiRing /> },
  { key: 'talisman', label: 'Talisman', icon: <GiTalisman /> },
  { key: 'head', label: 'Head', icon: <GiLaurelCrown /> },
  { key: 'mouth', label: 'Mouth', icon: <GiLipstick /> },
  { key: 'eyes', label: 'Eyes', icon: <GiEyelashes /> },
];

const defaultGear = Object.fromEntries(EQUIPMENT_SLOTS.map(slot => [slot.key, { itemId: '', refine: 0 }]));

const defaultBuild = {
  classId: 'sniper',
  gear: defaultGear,
  metadata: { title: '', price: '', tags: '' },
};

type BuildState = typeof defaultBuild;

const STORAGE_KEY = 'rox_builder_builds';
const MAX_SLOTS = 20;

function encodeBuild(build: BuildState) {
  return btoa(encodeURIComponent(JSON.stringify(build)));
}
function decodeBuild(str: string): BuildState | null {
  try {
    return JSON.parse(decodeURIComponent(atob(str)));
  } catch {
    return null;
  }
}

const CharacterBuilder: React.FC = () => {
  const [build, setBuild] = useState<BuildState>(defaultBuild);
  const [selectedSlot, setSelectedSlot] = useState(1);
  const [loadingMeta, setLoadingMeta] = useState(false);
  const [slotNames, setSlotNames] = useState<string[]>(Array(MAX_SLOTS).fill('').map((_, i) => `Slot ${i + 1}`));

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const slots = JSON.parse(saved);
      if (slots[selectedSlot - 1]) setBuild(slots[selectedSlot - 1]);
    }
  }, []);

  // Load from slot
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const slots = JSON.parse(saved);
      if (slots[selectedSlot - 1]) setBuild(slots[selectedSlot - 1]);
      else setBuild(defaultBuild);
    }
  }, [selectedSlot]);

  // Load from URL hash
  useEffect(() => {
    if (window.location.hash.startsWith('#build=')) {
      const encoded = window.location.hash.replace('#build=', '');
      const loaded = decodeBuild(encoded);
      if (loaded) setBuild(loaded);
    }
  }, []);

  // Handlers
  const handleClassChange = (classId: string) => setBuild(b => ({ ...b, classId }));
  const handleGearChange = (slot: string) => (value: GearSlotValue) => setBuild(b => ({ ...b, gear: { ...b.gear, [slot]: value } }));
  const handleMetadataChange = (metadata: BuildMetadataValue) => setBuild(b => ({ ...b, metadata }));

  const handleSave = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const slots = saved ? JSON.parse(saved) : Array(MAX_SLOTS).fill(null);
    slots[selectedSlot - 1] = build;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(slots));
    alert('Build saved to ' + (slotNames[selectedSlot - 1] || `Slot ${selectedSlot}`));
  };

  const handleCopyLink = () => {
    const encoded = encodeBuild(build);
    const url = window.location.origin + window.location.pathname + '#build=' + encoded;
    navigator.clipboard.writeText(url);
    alert('Shareable link copied!');
  };

  const handleReset = () => setBuild(defaultBuild);

  const handleSlotSelect = (slot: number) => setSelectedSlot(slot);

  const handleMetaSelect = (meta: MetaBuild) => {
    setLoadingMeta(true);
    setTimeout(() => {
      setBuild({
        classId: meta.classId,
        gear: {
          ...defaultGear,
          ...Object.fromEntries(Object.entries(meta.gear).map(([k, v]) => [k, { itemId: v, refine: 0 }]))
        },
        metadata: { title: meta.title, price: '', tags: meta.tags },
      });
      setLoadingMeta(false);
    }, 300);
  };

  // For custom slot names (optional, not editable yet)

  return (
    <div className="min-h-screen bg-white flex flex-col pb-24">
      {/* Ads Placeholder */}
      <div className="h-20 bg-gray-100 text-center flex items-center justify-center text-gray-500 text-lg">Ads Here</div>

      <div className="max-w-4xl w-full mx-auto px-2 flex-1">
        <h1 className="text-3xl font-bold text-center mt-6 mb-2">RoX Character Builder</h1>
        <p className="text-center text-gray-500 mb-6">Visualize. Optimize. Dominate.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="bg-white rounded-xl shadow p-4 mb-4">
              <ClassSelector value={build.classId} onChange={handleClassChange} />
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {EQUIPMENT_SLOTS.map(slot => (
                  <div key={slot.key} className="flex items-center space-x-2">
                    <span title={slot.label} className="text-xl">{slot.icon}</span>
                    <GearSlot slot={slot.key as any} value={build.gear[slot.key]} onChange={handleGearChange(slot.key)} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl shadow p-4 mb-4">
              <BuildPreview classId={build.classId} gear={Object.fromEntries(EQUIPMENT_SLOTS.map(slot => [slot.key, build.gear[slot.key]?.itemId]))} />
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <BuildMetadata value={build.metadata} onChange={handleMetadataChange} />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <MetaBuildsPanel onSelect={handleMetaSelect} />
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t z-50 flex flex-col md:flex-row md:justify-center py-3 px-2 space-y-2 md:space-y-0 md:space-x-4 shadow-lg">
        <div className="mb-2 md:mb-0">
          <select
            className="border rounded-lg px-3 py-2 text-xs font-semibold focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedSlot}
            onChange={e => handleSlotSelect(Number(e.target.value))}
          >
            {Array(MAX_SLOTS).fill(0).map((_, i) => (
              <option key={i + 1} value={i + 1}>{slotNames[i]}</option>
            ))}
          </select>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition" onClick={handleSave}>Save Build</button>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition" onClick={handleCopyLink}>Copy Link</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition" onClick={handleReset}>Reset</button>
        {/* <ImageExportButton /> */}
      </div>
    </div>
  );
};

export default CharacterBuilder; 