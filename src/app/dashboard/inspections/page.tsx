import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Search, Plus, Filter } from 'lucide-react';

const inspections = [
  { id: 'INS-089', name: 'Foundation Rebar Level 1', date: '2026-04-24', status: 'Passed', inspector: 'David Chen', project: 'Nexus Tower' },
  { id: 'INS-090', name: 'HVAC Rough-in Floor 4', date: '2026-04-23', status: 'Failed', inspector: 'Sarah Jenkins', project: 'Nexus Tower' },
  { id: 'INS-091', name: 'Elevator Shaft Plumb', date: '2026-04-22', status: 'Warning', inspector: 'Mike Ross', project: 'Aurora Complex' },
  { id: 'INS-092', name: 'Fire Suppression L3', date: '2026-04-21', status: 'Passed', inspector: 'David Chen', project: 'Nexus Tower' },
  { id: 'INS-093', name: 'Electrical Subpanel 4A', date: '2026-04-20', status: 'Pending', inspector: 'Unassigned', project: 'Oasis Terminal' },
];

export default function InspectionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[--color-text-primary]">Inspections</h1>
          <p className="text-[--color-text-secondary]">Manage QA/QC checklists and field reports.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="hidden sm:flex"><Filter className="w-4 h-4 mr-2"/> Filter</Button>
          <Button><Plus className="w-4 h-4 mr-2"/> New Inspection</Button>
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="p-4 border-b border-[--color-surface-200] bg-[--color-surface-50] flex gap-4">
           <div className="relative flex-1 max-w-md">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[--color-text-tertiary]" />
             <input 
               type="text" 
               placeholder="Search inspections by ID or name..." 
               className="w-full pl-10 pr-4 py-2 bg-white border border-[--color-surface-200] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[--color-brand-500] transition-colors"
             />
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-[--color-surface-50] text-[--color-text-secondary] font-medium border-b border-[--color-surface-200]">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Inspection Name</th>
                <th className="px-6 py-4">Project</th>
                <th className="px-6 py-4">Inspector</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[--color-surface-200]">
              {inspections.map((ins) => (
                <tr key={ins.id} className="hover:bg-[--color-surface-50] transition-colors">
                  <td className="px-6 py-4 font-medium text-[--color-text-primary]">{ins.id}</td>
                  <td className="px-6 py-4 text-[--color-text-primary]">{ins.name}</td>
                  <td className="px-6 py-4 text-[--color-text-secondary]">{ins.project}</td>
                  <td className="px-6 py-4 text-[--color-text-secondary]">{ins.inspector}</td>
                  <td className="px-6 py-4 text-[--color-text-secondary]">{ins.date}</td>
                  <td className="px-6 py-4">
                    <Badge variant={
                      ins.status === 'Passed' ? 'success' : 
                      ins.status === 'Failed' ? 'danger' : 
                      ins.status === 'Warning' ? 'warning' : 'default'
                    }>
                      {ins.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[--color-brand-600] font-medium hover:text-[--color-brand-700]">View Report</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-[--color-surface-200] bg-[--color-surface-50] flex items-center justify-between text-sm text-[--color-text-secondary]">
          <span>Showing 1 to 5 of 24 entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded border border-[--color-surface-200] bg-white disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 rounded border border-[--color-surface-200] bg-white">Next</button>
          </div>
        </div>
      </Card>
    </div>
  );
}
