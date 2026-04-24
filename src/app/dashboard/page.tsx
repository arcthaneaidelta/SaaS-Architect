import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { projects, activities } from '@/data/mock';
import { FolderKanban, AlertTriangle, CheckCircle2, TrendingUp, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[--color-text-primary] tracking-tight">Overview</h1>
        <p className="text-[--color-text-secondary]">Welcome back, John. Here is what's happening across your projects.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5" hoverLift>
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-[--color-brand-50] flex items-center justify-center">
              <FolderKanban className="w-5 h-5 text-[--color-brand-600]" />
            </div>
            <Badge variant="success" className="gap-1"><TrendingUp className="w-3 h-3"/> +2</Badge>
          </div>
          <h3 className="text-[--color-text-tertiary] text-sm font-medium mb-1">Active Projects</h3>
          <p className="text-3xl font-bold text-[--color-text-primary]">12</p>
        </Card>

        <Card className="p-5" hoverLift>
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
            </div>
            <Badge variant="warning">Action Needed</Badge>
          </div>
          <h3 className="text-[--color-text-tertiary] text-sm font-medium mb-1">Open Issues</h3>
          <p className="text-3xl font-bold text-[--color-text-primary]">34</p>
        </Card>

        <Card className="p-5" hoverLift>
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <Badge variant="success">98% passing</Badge>
          </div>
          <h3 className="text-[--color-text-tertiary] text-sm font-medium mb-1">Inspections Passed</h3>
          <p className="text-3xl font-bold text-[--color-text-primary]">156</p>
        </Card>

        <Card className="p-5 bg-gradient-to-br from-[--color-brand-900] to-[--color-brand-800] border-transparent" hoverLift>
          <div className="flex flex-col h-full justify-between">
             <div className="mb-4">
               <h3 className="text-white/80 text-sm font-medium mb-1">Next Payment</h3>
               <p className="text-2xl font-bold text-white">$12,450.00</p>
             </div>
             <Link href="/checkout" className="text-sm text-[--color-brand-200] hover:text-white flex items-center gap-1 transition-colors">
               Manage Subscription <ChevronRight className="w-4 h-4"/>
             </Link>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Projects List */}
        <div className="lg:col-span-2 space-y-4">
           <div className="flex items-center justify-between">
             <h2 className="text-lg font-semibold text-[--color-text-primary]">Active Projects</h2>
             <Link href="/dashboard/projects" className="text-sm font-medium text-[--color-brand-600] hover:text-[--color-brand-700]">View all</Link>
           </div>
           
           <div className="grid gap-4">
             {projects.map((project) => (
               <Card key={project.id} className="p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center" hoverLift>
                 <div className="w-16 h-16 rounded-lg bg-[--color-surface-100] flex-shrink-0 overflow-hidden relative">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img src={project.image} alt={project.name} className="object-cover w-full h-full" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <div className="flex items-center gap-2 mb-1">
                     <h3 className="font-semibold text-[--color-text-primary] truncate">{project.name}</h3>
                     <Badge variant={project.status === 'In Progress' ? 'info' : 'default'}>{project.status}</Badge>
                   </div>
                   <p className="text-sm text-[--color-text-secondary] truncate">{project.location}</p>
                 </div>
                 <div className="w-full sm:w-48">
                   <div className="flex justify-between text-xs mb-1.5">
                     <span className="text-[--color-text-secondary]">Progress</span>
                     <span className="font-medium text-[--color-text-primary]">{project.progress}%</span>
                   </div>
                   <div className="w-full bg-[--color-surface-200] rounded-full h-1.5">
                     <div 
                       className="bg-[--color-brand-500] h-1.5 rounded-full" 
                       style={{ width: `${project.progress}%` }}
                     />
                   </div>
                 </div>
               </Card>
             ))}
           </div>
        </div>

        {/* Activity Feed */}
        <div className="space-y-4">
           <div className="flex items-center justify-between">
             <h2 className="text-lg font-semibold text-[--color-text-primary]">Recent Activity</h2>
           </div>
           
           <Card className="p-5">
             <div className="space-y-6">
               {activities.map((activity, index) => (
                 <div key={activity.id} className="flex gap-4 relative">
                   {index !== activities.length - 1 && (
                     <div className="absolute left-4 top-10 bottom-[-24px] w-px bg-[--color-surface-200]" />
                   )}
                   <div className="w-8 h-8 rounded-full bg-[--color-surface-100] border border-[--color-surface-200] flex items-center justify-center flex-shrink-0 text-xs font-medium text-[--color-text-secondary] z-10">
                     {activity.user.charAt(0)}
                   </div>
                   <div className="pt-1.5">
                     <p className="text-sm text-[--color-text-primary]">
                       <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                       <span className="font-medium">{activity.target}</span>
                     </p>
                     <p className="text-xs text-[--color-text-tertiary] mt-0.5">{activity.time}</p>
                   </div>
                 </div>
               ))}
             </div>
             <div className="mt-6 pt-4 border-t border-[--color-surface-100]">
               <button className="w-full text-sm font-medium text-[--color-brand-600] hover:text-[--color-brand-700] text-center">
                 View all activity
               </button>
             </div>
           </Card>
        </div>
      </div>
    </div>
  );
}
