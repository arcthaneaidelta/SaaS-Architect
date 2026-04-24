"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Building2, Layers, ShieldCheck, ArrowRight, Hexagon } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <div className="min-h-screen bg-[--background] overflow-hidden selection:bg-[--color-brand-200] selection:text-[--color-brand-900]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[--color-surface-200]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Hexagon className="w-6 h-6 text-[--color-brand-600] fill-[--color-brand-50]" />
            <span className="font-bold text-lg tracking-tight text-[--color-text-primary]">KAN-KON 360</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[--color-text-secondary]">
            <a href="#features" className="hover:text-[--color-brand-600] transition-colors">Platform</a>
            <a href="#solutions" className="hover:text-[--color-brand-600] transition-colors">Solutions</a>
            <a href="#resources" className="hover:text-[--color-brand-600] transition-colors">Resources</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="hidden sm:inline-flex">Sign In</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="primary">Enter Dashboard</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        {/* Soft summer background gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1000px] h-[800px] md:h-[1000px] bg-gradient-to-tr from-[--color-brand-100] via-amber-50 to-teal-50 rounded-full blur-[100px] -z-10 opacity-80" />
        
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[--color-brand-50] border border-[--color-brand-100] text-[--color-brand-700] text-xs font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[--color-brand-500]"></span>
            Introducing the future of construction control
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-[--color-text-primary] tracking-tight leading-[1.1] mb-6">
            A unified construction <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[--color-brand-600] via-[--color-brand-400] to-teal-400">intelligence workspace</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-[--color-text-secondary] mb-10 max-w-2xl mx-auto leading-relaxed">
            Connect technical drawings, BIM models, issues, and approvals in one premium, enterprise-grade platform. Built for the world's most ambitious projects.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard">
              <Button variant="primary" size="lg" className="w-full sm:w-auto group">
                Start Building
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Watch Demo Flow
            </Button>
          </motion.div>
        </motion.div>

        {/* Dashboard Preview Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="max-w-5xl mx-auto mt-20 relative"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl border border-[--color-surface-200] bg-white p-2">
            <div className="rounded-lg bg-[--color-surface-50] border border-[--color-surface-200] h-[400px] md:h-[600px] flex items-center justify-center relative overflow-hidden">
               {/* Abstract Dashboard shapes */}
               <div className="absolute top-4 left-4 right-4 h-12 flex items-center justify-between border-b border-[--color-surface-200] pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="w-48 h-6 rounded-md bg-[--color-surface-200]" />
               </div>
               <div className="absolute top-20 left-4 bottom-4 w-48 rounded-md bg-white border border-[--color-surface-200] hidden md:block" />
               <div className="absolute top-20 left-4 md:left-56 right-4 bottom-4 rounded-md bg-white border border-[--color-surface-200] p-6">
                  <div className="flex gap-4 mb-6">
                    <div className="h-24 flex-1 rounded-md bg-[--color-brand-50] border border-[--color-brand-100]" />
                    <div className="h-24 flex-1 rounded-md bg-[--color-brand-50] border border-[--color-brand-100]" />
                    <div className="h-24 flex-1 rounded-md bg-[--color-brand-50] border border-[--color-brand-100]" />
                  </div>
                  <div className="h-[200px] w-full rounded-md bg-[--color-surface-100]" />
               </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white border-t border-[--color-surface-200]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[--color-text-primary] mb-4">Everything you need to control the site</h2>
            <p className="text-[--color-text-secondary] max-w-2xl mx-auto">From 3D models to field inspections, manage every aspect of your project with unparalleled clarity.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card hoverLift className="p-8">
              <div className="w-12 h-12 rounded-lg bg-[--color-brand-50] flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-[--color-brand-600]" />
              </div>
              <h3 className="text-xl font-semibold text-[--color-text-primary] mb-3">BIM Integration</h3>
              <p className="text-[--color-text-secondary] leading-relaxed">
                Interact with high-fidelity IFC models directly in your browser. Annotate, slice, and measure without heavy desktop software.
              </p>
            </Card>

            <Card hoverLift className="p-8">
              <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-[--color-text-primary] mb-3">Automated Inspections</h3>
              <p className="text-[--color-text-secondary] leading-relaxed">
                Generate dynamic checklists based on your schedule. Track pass/fail rates and instantly trigger non-conformance workflows.
              </p>
            </Card>

            <Card hoverLift className="p-8">
              <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-[--color-text-primary] mb-3">Unified Documentation</h3>
              <p className="text-[--color-text-secondary] leading-relaxed">
                One source of truth. Version control for all your plans, submittals, and RFIs, ensuring the field always builds from the latest set.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[--color-brand-50] border-t border-[--color-surface-200]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-[--color-text-tertiary] uppercase tracking-wider mb-8">Trusted by industry leaders on $1B+ projects</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
            {/* Fake logos using text for demo */}
            <div className="text-2xl font-black tracking-tighter">STRUCTURA</div>
            <div className="text-xl font-serif italic font-bold">Apex Build</div>
            <div className="text-2xl font-mono font-bold">NEXUS</div>
            <div className="text-xl font-bold flex items-center gap-1"><Hexagon className="w-5 h-5"/> CORE</div>
            <div className="text-2xl font-black">ELEVATE</div>
          </div>
        </div>
      </section>
    </div>
  );
}


