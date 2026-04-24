import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MessageSquare, Paperclip, MoreHorizontal, Clock } from 'lucide-react';

const columns = [
  {
    title: 'Open',
    issues: [
      { id: 'IS-104', title: 'Clash: Duct vs Beam L4', priority: 'High', project: 'Nexus Tower', comments: 3, attachments: 1, assignee: 'MK' },
      { id: 'IS-106', title: 'Missing window specs type B', priority: 'Medium', project: 'Aurora Complex', comments: 0, attachments: 0, assignee: 'SJ' },
    ]
  },
  {
    title: 'In Progress',
    issues: [
      { id: 'IS-098', title: 'RFI 45: Foundation rebar sizing', priority: 'High', project: 'Nexus Tower', comments: 12, attachments: 4, assignee: 'DC' },
      { id: 'IS-102', title: 'Update safety plan for crane op', priority: 'Low', project: 'Nexus Tower', comments: 1, attachments: 2, assignee: 'JS' },
    ]
  },
  {
    title: 'Resolved',
    issues: [
      { id: 'IS-084', title: 'Approve paint submittals', priority: 'Medium', project: 'Oasis Terminal', comments: 5, attachments: 1, assignee: 'MK' },
    ]
  }
];

export default function IssuesPage() {
  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[--color-text-primary]">Issue Tracker</h1>
          <p className="text-[--color-text-secondary]">Kanban board for all project coordination issues.</p>
        </div>
        <Button>Create Issue</Button>
      </div>

      <div className="flex-1 flex gap-6 overflow-x-auto pb-4">
        {columns.map((column) => (
          <div key={column.title} className="flex-shrink-0 w-80 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[--color-text-primary] flex items-center gap-2">
                {column.title} <span className="bg-[--color-surface-200] text-[--color-text-secondary] text-xs py-0.5 px-2 rounded-full">{column.issues.length}</span>
              </h3>
              <button className="text-[--color-text-tertiary] hover:text-[--color-text-primary]">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-col gap-4">
              {column.issues.map((issue) => (
                <Card key={issue.id} className="p-4 cursor-grab active:cursor-grabbing hover:border-[--color-brand-300] transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={issue.priority === 'High' ? 'danger' : issue.priority === 'Medium' ? 'warning' : 'default'}>
                      {issue.priority}
                    </Badge>
                    <span className="text-xs font-medium text-[--color-text-tertiary]">{issue.id}</span>
                  </div>
                  <h4 className="font-medium text-[--color-text-primary] mb-1 leading-snug">{issue.title}</h4>
                  <p className="text-xs text-[--color-text-secondary] mb-4">{issue.project}</p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-[--color-surface-100]">
                    <div className="flex items-center gap-3 text-xs text-[--color-text-tertiary]">
                      <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5"/> {issue.comments}</span>
                      <span className="flex items-center gap-1"><Paperclip className="w-3.5 h-3.5"/> {issue.attachments}</span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[--color-surface-200] flex items-center justify-center text-[10px] font-bold text-[--color-text-secondary] border border-white">
                      {issue.assignee}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
        {/* Empty column for adding new column */}
        <div className="flex-shrink-0 w-80 h-12 border-2 border-dashed border-[--color-surface-200] rounded-xl flex items-center justify-center text-[--color-text-secondary] hover:bg-[--color-surface-50] hover:text-[--color-text-primary] cursor-pointer transition-colors font-medium text-sm">
          + Add Section
        </div>
      </div>
    </div>
  );
}
