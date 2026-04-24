"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';
import { 
  LayoutDashboard, 
  FolderOpen, 
  Box, 
  ClipboardCheck, 
  AlertCircle, 
  Settings, 
  Search,
  Bell,
  Menu,
  Hexagon
} from 'lucide-react';
import { motion } from 'framer-motion';
import { AIAssistant } from '@/components/AIAssistant';

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Projects', href: '/dashboard/projects', icon: FolderOpen },
  { name: 'BIM Viewer', href: '/dashboard/viewer', icon: Box },
  { name: 'Inspections', href: '/dashboard/inspections', icon: ClipboardCheck },
  { name: 'Issues', href: '/dashboard/issues', icon: AlertCircle },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[--background] overflow-hidden selection:bg-[--color-brand-200] selection:text-[--color-brand-900]">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 240 : 80 }}
        className="hidden md:flex flex-col bg-white border-r border-[--color-surface-200] z-20 flex-shrink-0"
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-[--color-surface-200]">
          <Link href="/" className="flex items-center gap-2 overflow-hidden">
            <Hexagon className="w-6 h-6 text-[--color-brand-600] flex-shrink-0" />
            {sidebarOpen && <span className="font-bold text-lg tracking-tight text-[--color-text-primary] whitespace-nowrap">KAN-KON 360</span>}
          </Link>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 rounded-md hover:bg-[--color-surface-100] text-[--color-text-secondary]">
            <Menu className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors group",
                  isActive 
                    ? "bg-[--color-brand-50] text-[--color-brand-700]" 
                    : "text-[--color-text-secondary] hover:bg-[--color-surface-100] hover:text-[--color-text-primary]"
                )}
                title={!sidebarOpen ? item.name : undefined}
              >
                <item.icon className={cn("w-5 h-5 flex-shrink-0", isActive ? "text-[--color-brand-600]" : "text-[--color-text-tertiary] group-hover:text-[--color-text-secondary]")} />
                {sidebarOpen && <span className="whitespace-nowrap">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[--color-surface-200]">
          <div className={cn("flex items-center gap-3", !sidebarOpen && "justify-center")}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[--color-brand-400] to-[--color-brand-600] flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
              JS
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[--color-text-primary] truncate">John Smith</p>
                <p className="text-xs text-[--color-text-tertiary] truncate">Project Manager</p>
              </div>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-[--color-surface-200] flex items-center justify-between px-6 z-10">
          <div className="flex-1 max-w-xl flex items-center">
             <div className="relative w-full max-w-md hidden md:block">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[--color-text-tertiary]" />
               <input 
                 type="text" 
                 placeholder="Search projects, documents, issues..." 
                 className="w-full pl-10 pr-4 py-2 bg-[--color-surface-50] border border-[--color-surface-200] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[--color-brand-500] focus:bg-white transition-colors placeholder-[--color-text-tertiary] text-[--color-text-primary]"
               />
             </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-[--color-text-secondary] hover:bg-[--color-surface-100] rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <Link href="/checkout" className="hidden sm:block">
              <button className="px-3 py-1.5 bg-[--color-brand-50] text-[--color-brand-700] border border-[--color-brand-200] rounded-full text-xs font-medium hover:bg-[--color-brand-100] transition-colors">
                Upgrade Plan
              </button>
            </Link>
          </div>
        </header>

        {/* Main Scrollable Area */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto"
          >
            {children}
          </motion.div>
          <AIAssistant />
        </main>
      </div>
    </div>
  );
}
