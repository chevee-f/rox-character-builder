import React, { useState, useEffect } from 'react';
import ClassSelector, { ClassOption } from './components/ClassSelector';
import GearSlot, { GearSlotValue } from './components/GearSlot';
import RefineSelector from './components/RefineSelector';
import BuildPreview from './components/BuildPreview';
import BuildSaveSlots from './components/BuildSaveSlots';
import MetaBuildsPanel, { MetaBuild } from './components/MetaBuildsPanel';
import BuildMetadata, { BuildMetadataValue } from './components/BuildMetadata';
// import ImageExportButton from './components/ImageExportButton'; // Optional

const defaultBuild = {
  classId: 'sniper',
  gear: {
    weapon: { itemId: '', refine: 0 },
    armor: { itemId: '', refine: 0 },
    accessory: { itemId: '', refine: 0 },
    headgear: { itemId: '', refine: 0 },
  },
  metadata: { title: '', price: '', tags: '' },
};

type BuildState = typeof defaultBuild;

const STORAGE_KEY = 'rox_builder_builds';

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
  const handleGearChange = (slot: keyof BuildState['gear']) => (value: GearSlotValue) => setBuild(b => ({ ...b, gear: { ...b.gear, [slot]: value } }));
  const handleMetadataChange = (metadata: BuildMetadataValue) => setBuild(b => ({ ...b, metadata }));

  const handleSave = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const slots = saved ? JSON.parse(saved) : [null, null, null];
    slots[selectedSlot - 1] = build;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(slots));
    alert('Build saved to slot ' + selectedSlot);
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
          weapon: { itemId: meta.gear.weapon, refine: 0 },
          armor: { itemId: meta.gear.armor, refine: 0 },
          accessory: { itemId: meta.gear.accessory, refine: 0 },
          headgear: { itemId: meta.gear.headgear, refine: 0 },
        },
        metadata: { title: meta.title, price: '', tags: meta.tags },
      });
      setLoadingMeta(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col pb-24">
      {/* Ads Placeholder */}
      <div className="h-20 bg-gray-100 text-center flex items-center justify-center text-gray-500 text-lg">Ads Here</div>

      <div className="max-w-3xl w-full mx-auto px-2 flex-1">
        <h1 className="text-3xl font-bold text-center mt-6 mb-2">RoX Character Builder</h1>
        <p className="text-center text-gray-500 mb-6">Visualize. Optimize. Dominate.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <ClassSelector value={build.classId} onChange={handleClassChange} />
            <div className="mt-4 space-y-4">
              <GearSlot slot="weapon" value={build.gear.weapon} onChange={handleGearChange('weapon')} />
              <GearSlot slot="armor" value={build.gear.armor} onChange={handleGearChange('armor')} />
              <GearSlot slot="accessory" value={build.gear.accessory} onChange={handleGearChange('accessory')} />
              <GearSlot slot="headgear" value={build.gear.headgear} onChange={handleGearChange('headgear')} />
            </div>
          </div>
          <div>
            <BuildPreview classId={build.classId} gear={{
              weapon: build.gear.weapon.itemId,
              armor: build.gear.armor.itemId,
              accessory: build.gear.accessory.itemId,
              headgear: build.gear.headgear.itemId,
            }} />
            <BuildMetadata value={build.metadata} onChange={handleMetadataChange} />
          </div>
        </div>

        <div className="mt-8">
          <MetaBuildsPanel onSelect={handleMetaSelect} />
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t z-50 flex justify-center py-3 space-x-4 shadow-lg">
        <BuildSaveSlots selectedSlot={selectedSlot} onSelect={handleSlotSelect} />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition" onClick={handleSave}>Save Build</button>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition" onClick={handleCopyLink}>Copy Link</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition" onClick={handleReset}>Reset</button>
        {/* <ImageExportButton /> */}
      </div>
    </div>
  );
};

export default CharacterBuilder; 