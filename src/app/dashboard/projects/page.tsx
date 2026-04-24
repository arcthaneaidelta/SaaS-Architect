import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { projects } from '@/data/mock';

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[--color-text-primary]">Projects</h1>
          <p className="text-[--color-text-secondary]">Manage and track all your active constructions.</p>
        </div>
        <button className="px-4 py-2 bg-[--color-brand-600] text-white rounded-lg font-medium text-sm hover:bg-[--color-brand-700] transition-colors shadow-[--shadow-premium-soft]">
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden flex flex-col" hoverLift>
            <div className="h-48 relative bg-[--color-surface-100]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4">
                <Badge variant={project.status === 'In Progress' ? 'info' : 'default'} className="bg-white/90 backdrop-blur-sm">
                  {project.status}
                </Badge>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-[--color-text-primary] mb-1">{project.name}</h3>
              <p className="text-sm text-[--color-text-secondary] mb-4">{project.location}</p>
              
              <div className="mt-auto space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-[--color-text-secondary]">Overall Progress</span>
                    <span className="font-medium text-[--color-text-primary]">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-[--color-surface-200] rounded-full h-1.5">
                    <div 
                      className="bg-[--color-brand-500] h-1.5 rounded-full" 
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm pt-4 border-t border-[--color-surface-100]">
                  <div className="flex flex-col">
                    <span className="text-xs text-[--color-text-tertiary]">Budget</span>
                    <span className="font-medium text-[--color-text-primary]">{project.budget}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-[--color-text-tertiary]">Due Date</span>
                    <span className="font-medium text-[--color-text-primary]">{new Date(project.dueDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
