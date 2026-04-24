"use client";

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Check, Hexagon, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-[--background] flex flex-col">
      <nav className="h-16 bg-white border-b border-[--color-surface-200] flex items-center px-6">
        <Link href="/dashboard" className="flex items-center gap-2 text-[--color-text-secondary] hover:text-[--color-text-primary]">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <div className="mx-auto flex items-center gap-2">
          <Hexagon className="w-5 h-5 text-[--color-brand-600] fill-[--color-brand-50]" />
          <span className="font-bold tracking-tight text-[--color-text-primary]">KAN-KON 360</span>
        </div>
        <div className="w-32" /> {/* spacer */}
      </nav>

      <div className="flex-1 max-w-4xl w-full mx-auto p-6 py-12">
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-[--color-text-primary] mb-4">Select your enterprise plan</h1>
              <p className="text-[--color-text-secondary]">Upgrade to unlock full BIM functionality and unlimited projects.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Card className="p-8 border-2 border-transparent">
                <h2 className="text-xl font-bold text-[--color-text-primary] mb-2">Professional</h2>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-[--color-text-primary]">$499</span>
                  <span className="text-[--color-text-secondary]">/mo</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {['Up to 5 active projects', 'Basic BIM Viewer', 'Standard Reporting', 'Email Support'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[--color-text-secondary]">
                      <Check className="w-4 h-4 text-green-500" /> {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" onClick={() => setStep(2)}>Select Pro</Button>
              </Card>

              <Card className="p-8 border-2 border-[--color-brand-500] relative shadow-[--shadow-premium-hover]">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-[--color-brand-600] text-white text-xs font-bold px-3 py-1 rounded-full">
                  RECOMMENDED
                </div>
                <h2 className="text-xl font-bold text-[--color-brand-900] mb-2">Enterprise</h2>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-[--color-brand-900]">$1,299</span>
                  <span className="text-[--color-text-secondary]">/mo</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {['Unlimited active projects', 'Advanced IFC Parsing', 'Automated Inspections AI', '24/7 Dedicated Support', 'Custom Integrations'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[--color-brand-800]">
                      <Check className="w-4 h-4 text-[--color-brand-500]" /> {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="primary" className="w-full" onClick={() => setStep(2)}>Select Enterprise</Button>
              </Card>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-[--color-text-primary] mb-6">Billing Details</h1>
            <Card className="p-6 mb-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Card Information</label>
                  <div className="border border-[--color-surface-200] rounded-lg p-3 bg-white text-sm text-[--color-text-tertiary] flex justify-between items-center">
                    <span>•••• •••• •••• 4242</span>
                    <div className="flex gap-1">
                      <span className="text-xs">MM/YY</span>
                      <span className="text-xs">CVC</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name on card</label>
                  <input type="text" className="w-full px-4 py-2 border border-[--color-surface-200] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[--color-brand-500]" defaultValue="John Smith" />
                </div>
              </div>
            </Card>
            
            <div className="flex justify-between items-center">
              <button onClick={() => setStep(1)} className="text-sm font-medium text-[--color-text-secondary] hover:text-[--color-text-primary]">
                Back
              </button>
              <Button onClick={() => setStep(3)}>Complete Purchase</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in zoom-in-95 duration-500 max-w-md mx-auto text-center mt-20">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-[--color-text-primary] mb-2">Subscription Activated</h1>
            <p className="text-[--color-text-secondary] mb-8">Welcome to KAN-KON 360 Enterprise. Your receipt has been sent to your email.</p>
            <Link href="/dashboard">
              <Button className="w-full">Return to Dashboard</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
