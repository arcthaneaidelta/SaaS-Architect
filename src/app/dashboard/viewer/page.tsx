import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Layers, BoxSelect, Maximize, MousePointer2 } from 'lucide-react';

export default function BIMViewerPage() {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-[--color-text-primary] tracking-tight">BIM Viewer</h1>
        <p className="text-[--color-text-secondary]">Nexus Tower - Structural Model v4.2</p>
      </div>
      
      <div className="flex-1 flex gap-4 overflow-hidden">
        {/* Left Toolbar */}
        <Card className="w-16 flex-shrink-0 flex flex-col items-center py-4 gap-4 bg-white/50 backdrop-blur-sm z-10">
          <button className="p-3 text-[--color-brand-600] bg-[--color-brand-50] rounded-lg relative group">
            <MousePointer2 className="w-5 h-5" />
            <span className="absolute left-full ml-2 px-2 py-1 bg-[--color-text-primary] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Select</span>
          </button>
          <button className="p-3 text-[--color-text-secondary] hover:text-[--color-text-primary] hover:bg-[--color-surface-100] rounded-lg transition-colors group relative">
            <Layers className="w-5 h-5" />
            <span className="absolute left-full ml-2 px-2 py-1 bg-[--color-text-primary] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Layers</span>
          </button>
          <button className="p-3 text-[--color-text-secondary] hover:text-[--color-text-primary] hover:bg-[--color-surface-100] rounded-lg transition-colors group relative">
            <BoxSelect className="w-5 h-5" />
            <span className="absolute left-full ml-2 px-2 py-1 bg-[--color-text-primary] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Section Box</span>
          </button>
          <div className="mt-auto">
            <button className="p-3 text-[--color-text-secondary] hover:text-[--color-text-primary] hover:bg-[--color-surface-100] rounded-lg transition-colors group relative">
              <Maximize className="w-5 h-5" />
              <span className="absolute left-full ml-2 px-2 py-1 bg-[--color-text-primary] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Fullscreen</span>
            </button>
          </div>
        </Card>
        
        {/* Main Canvas Area */}
        <Card className="flex-1 bg-[--color-surface-50] overflow-hidden relative">
          {/* Simulated 3D Model Environment */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-[--color-surface-200]" />
          
          {/* Wireframe/Abstract representation of a building */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[400px] md:h-[600px] border-2 border-[--color-brand-200] opacity-30 rounded-lg transform perspective-1000 rotateX-12 rotateY-12" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateZ(-45deg)'}}>
             <div className="absolute inset-0 border border-[--color-brand-400] transform translateZ-[100px]" />
             <div className="absolute inset-0 border border-[--color-brand-400] transform translateZ-[200px]" />
             <div className="absolute inset-0 border border-[--color-brand-400] transform translateZ-[300px]" />
             <div className="absolute inset-0 bg-[--color-brand-50] opacity-50 transform translateZ-[150px] flex items-center justify-center border border-[--color-brand-500]">
               <span className="text-[--color-brand-700] font-bold text-xl rotate-45 transform">Level 4 Selection</span>
             </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
             <div className="bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-lg border border-[--color-surface-200] pointer-events-auto max-w-sm">
               <h3 className="font-semibold text-[--color-text-primary] mb-1">Structural Slab L4</h3>
               <p className="text-sm text-[--color-text-secondary] mb-3">Volume: 345 m³ <br/> Material: Concrete C30/37</p>
               <Button size="sm" className="w-full">Create Issue from Selection</Button>
             </div>
             
             <div className="flex gap-2 pointer-events-auto">
               <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-lg border border-[--color-surface-200] text-xs font-mono font-medium text-[--color-text-secondary]">
                 X: 45.2, Y: 12.0, Z: 16.5
               </div>
             </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
