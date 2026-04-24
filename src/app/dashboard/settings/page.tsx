import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-[--color-text-primary]">Settings</h1>
        <p className="text-[--color-text-secondary]">Manage your account preferences and project defaults.</p>
      </div>

      <Card className="overflow-hidden">
        <div className="border-b border-[--color-surface-200] px-6 py-4 bg-[--color-surface-50]">
          <h2 className="font-semibold text-[--color-text-primary]">Profile Information</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[--color-brand-400] to-[--color-brand-600] flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
              JS
            </div>
            <div>
              <Button variant="outline" size="sm" className="mb-2">Change Avatar</Button>
              <p className="text-xs text-[--color-text-secondary]">JPG, GIF or PNG. 1MB max.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[--color-text-primary]">First Name</label>
              <input type="text" defaultValue="John" className="w-full px-4 py-2 border border-[--color-surface-200] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[--color-brand-500]" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[--color-text-primary]">Last Name</label>
              <input type="text" defaultValue="Smith" className="w-full px-4 py-2 border border-[--color-surface-200] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[--color-brand-500]" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-[--color-text-primary]">Email Address</label>
              <input type="email" defaultValue="john.smith@kan-kon.test" className="w-full px-4 py-2 border border-[--color-surface-200] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[--color-brand-500]" />
            </div>
          </div>
        </div>
        <div className="bg-[--color-surface-50] px-6 py-4 flex justify-end gap-3 border-t border-[--color-surface-200]">
          <Button variant="ghost">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </Card>

      <Card className="overflow-hidden">
        <div className="border-b border-[--color-surface-200] px-6 py-4 bg-[--color-surface-50]">
          <h2 className="font-semibold text-[--color-text-primary]">System Preferences</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between py-2 border-b border-[--color-surface-100]">
            <div>
              <p className="font-medium text-[--color-text-primary]">Email Notifications</p>
              <p className="text-sm text-[--color-text-secondary]">Receive daily summaries of project activity.</p>
            </div>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input type="checkbox" name="toggle" id="toggle1" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer translate-x-5 border-[--color-brand-500]" defaultChecked />
              <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-5 rounded-full bg-[--color-brand-500] cursor-pointer"></label>
            </div>
          </div>
          
          <div className="flex items-center justify-between py-2 border-b border-[--color-surface-100]">
            <div>
              <p className="font-medium text-[--color-text-primary]">Compact Mode</p>
              <p className="text-sm text-[--color-text-secondary]">Decrease spacing in lists and tables.</p>
            </div>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input type="checkbox" name="toggle" id="toggle2" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-[--color-surface-300]" />
              <label htmlFor="toggle2" className="toggle-label block overflow-hidden h-5 rounded-full bg-[--color-surface-200] cursor-pointer"></label>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
