'use client';

import React, { useState } from 'react';
import { Target, Eye, ArrowRight, Sparkles } from 'lucide-react';

const MissionVision = () => {
    const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');

    const content = {
        mission: {
            title: "The Mission",
            icon: Target,
            color: "text-[var(--color-theme-2)]",
            bg: "bg-[var(--color-theme-2)]/10",
            border: "border-[var(--color-theme-2)]/30",
            description:
                "To ignite a passion for lifelong learning and equip students with technical mastery and creative confidence to lead in an evolving world.",
            features: ["Technical Excellence", "Creative Leadership", "Global Impact"],
        },
        vision: {
            title: "The Vision",
            icon: Eye,
            color: "text-[var(--color-theme)]",
            bg: "bg-[var(--color-theme)]/10",
            border: "border-[var(--color-theme)]/30",
            description:
                "To be a world-leading hub of interdisciplinary excellence, bridging the gap between theory and real-world impact for a sustainable future.",
            features: ["Research Focus", "Sustainable Growth", "Industry Bridging"],
        },
    };

    return (
        <section className="relative py-16 bg-white overflow-hidden flex items-center min-h-[600px]">

            {/* Soft Background Accent */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-theme-2)]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column */}
                    <div className="lg:col-span-6 space-y-10">
                        <div className="w-full">

                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--color-theme)]/5 border border-[var(--color-theme)]/10 text-[var(--color-theme-2)] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                                <Sparkles size={12} />
                                <span>Institutional DNA</span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-[var(--color-theme)]">
                                Architecting{" "}
                                <span className="text-[var(--color-theme)]/60">
                                    Global Leaders.
                                </span>
                            </h2>

                            <p className="text-[var(--color-body-text)] text-lg leading-relaxed max-w-xl border-l-2 border-[var(--color-theme-2)]/40 pl-6">
                                We empower the next generation through a balanced focus on
                                academic excellence and real-world transformative impact.
                            </p>
                        </div>

                        {/* Toggles */}
                        <div className="flex flex-row gap-4">
                            {(['mission', 'vision'] as const).map((key) => {
                                const IconComponent = content[key].icon;
                                return (
                                    <button
                                        key={key}
                                        onClick={() => setActiveTab(key)}
                                        className={`group flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300 ${activeTab === key
                                                ? 'bg-[var(--color-theme)]/5 border-[var(--color-theme)]/20 ring-1 ring-[var(--color-theme)]/10 w-56'
                                                : 'bg-transparent border-transparent opacity-50 hover:opacity-100 hover:bg-[var(--color-theme)]/[0.03] w-48'
                                            }`}
                                    >
                                        <div
                                            className={`p-2 rounded-lg transition-colors ${activeTab === key
                                                    ? content[key].bg
                                                    : 'bg-[var(--color-theme)]/5'
                                                }`}
                                        >
                                            <IconComponent
                                                size={20}
                                                className={
                                                    activeTab === key
                                                        ? content[key].color
                                                        : 'text-[var(--color-theme)]'
                                                }
                                            />
                                        </div>

                                        <span className="text-base font-semibold tracking-tight text-[var(--color-theme)]">
                                            {content[key].title}
                                        </span>

                                        <ArrowRight
                                            size={16}
                                            className={`ml-auto transition-all duration-300 ${activeTab === key
                                                    ? 'translate-x-0 opacity-100 text-[var(--color-theme-2)]'
                                                    : '-translate-x-2 opacity-0'
                                                }`}
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column */}
                    {/* Right Column */}
                    <div className="lg:col-span-6 flex items-center justify-center">
                        <div
                            key={activeTab}
                            className={`w-full relative p-10 md:p-12 rounded-[2rem] border ${content[activeTab].border} bg-[var(--color-theme)] text-[var(--color-footer-text)] shadow-xl transition-all duration-300`}
                        >
                            {/* Top Right Background Icon (Fixed Visibility) */}
                            <div className="absolute top-8 right-8 opacity-10 text-white">
                                {React.createElement(content[activeTab].icon, { size: 90 })}
                            </div>

                            {/* Heading (Fixed Visibility for Vision) */}
                            <h3
                                className={`text-[10px] font-mono uppercase tracking-[0.3em] mb-6 ${activeTab === 'mission'
                                        ? 'text-white'
                                        : 'text-white'
                                    }`}
                            >
                                Core Philosophy
                            </h3>

                            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 italic">
                                "{content[activeTab].description}"
                            </p>

                            <div className="flex flex-wrap gap-6 pt-8 border-t border-white/10">
                                {content[activeTab].features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div
                                            className={`h-1 w-1 rounded-full ${activeTab === 'mission'
                                                    ? 'bg-[var(--color-theme-2)]'
                                                    : 'bg-white'
                                                }`}
                                        />
                                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MissionVision;