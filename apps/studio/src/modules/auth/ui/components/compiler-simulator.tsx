'use client';

import { useEffect, useState } from 'react';
import { Terminal, Cpu, Layers, GitBranch, ArrowRight, ShieldCheck } from 'lucide-react';

interface BuildStep {
  prefix: string;
  message: string;
  status: 'success' | 'active' | 'pending';
  icon: React.ReactNode;
}

const BUILD_STEPS: BuildStep[] = [
  { prefix: 'INTENT', message: 'Parsing user intent requirements...', status: 'success', icon: <Terminal className="h-3 w-3" /> },
  { prefix: 'INTENT', message: 'Intent parsed: "Compile full production workflow organization"', status: 'success', icon: <Terminal className="h-3 w-3" /> },
  { prefix: 'ARCH', message: 'Mapping domain bounds & contract interfaces...', status: 'success', icon: <Layers className="h-3 w-3" /> },
  { prefix: 'ARCH', message: 'Domain limits established: [Auth, Workflow, Projects, Memory]', status: 'success', icon: <Layers className="h-3 w-3" /> },
  { prefix: 'ORG', message: 'Instantiating department structural graphs...', status: 'success', icon: <Cpu className="h-3 w-3" /> },
  { prefix: 'ORG', message: 'Created: Product Management, Engineering, Quality Assurance', status: 'success', icon: <Cpu className="h-3 w-3" /> },
  { prefix: 'AGENT', message: 'Configuring autonomous agent personas & capabilities...', status: 'success', icon: <Cpu className="h-3 w-3" /> },
  { prefix: 'AGENT', message: 'Spawned: Architect, Backend Coder, Frontend Coder, Tester', status: 'success', icon: <Cpu className="h-3 w-3" /> },
  { prefix: 'WORKFLOW', message: 'Resolving DAG execution paths (18 edges, 0 cycles)...', status: 'success', icon: <GitBranch className="h-3 w-3" /> },
  { prefix: 'COMPILER', message: 'Assembling Forge Intermediate Representation (FIR)...', status: 'success', icon: <Layers className="h-3 w-3" /> },
  { prefix: 'COMPILER', message: 'FIR Schema emitted: version 1.0.0 (3,248 bytes)', status: 'success', icon: <Layers className="h-3 w-3" /> },
  { prefix: 'EXPORT', message: 'Lowering FIR blueprint to Claude Code & LangGraph...', status: 'success', icon: <ArrowRight className="h-3 w-3" /> },
  { prefix: 'SYSTEM', message: 'Compilation successful. AI engineering team is online.', status: 'active', icon: <ShieldCheck className="h-3 w-3" /> },
];

export const CompilerSimulator = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState<BuildStep[]>([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (currentStepIndex >= BUILD_STEPS.length) {
      setIsDone(true);
      return;
    }

    const timer = setTimeout(() => {
      const nextStep = BUILD_STEPS[currentStepIndex];
      if (nextStep) {
        setVisibleLogs((prev) => [...prev, nextStep]);
        setCurrentStepIndex((prev) => prev + 1);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentStepIndex]);

  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden bg-[#07070b] p-10 font-mono select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-accent-glow blur-[100px] opacity-30 pointer-events-none" />

      <div className="relative z-10 flex flex-col flex-1 space-y-8">
        <div className="flex items-center justify-between border-b border-border/40 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </div>
            <span className="text-[10px] font-bold tracking-widest text-ink-muted uppercase">KERNEL::COMPILE_PIPELINE</span>
          </div>
          <span className="text-[10px] text-ink-subtle tracking-wider font-semibold">FIR_BUILD_ACTIVE</span>
        </div>

        <div className="relative flex flex-1 flex-col items-center justify-center rounded-xl border border-border/30 bg-[#09090e]/60 p-8 backdrop-blur-sm min-h-[300px]">
          <svg className="h-full w-full max-w-[460px] aspect-[460/260]" viewBox="0 0 460 260" fill="none">
            <defs>
              <linearGradient id="edge-flow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            <path
              d="M 230 59 C 180 85, 150 100, 130 115"
              className={currentStepIndex >= 3 ? 'animate-[dash_12s_linear_infinite]' : 'opacity-10'}
              style={{ stroke: 'url(#edge-flow)', strokeWidth: '1.5px', strokeDasharray: '5 5' }}
            />
            <path
              d="M 230 59 C 280 85, 310 100, 330 115"
              className={currentStepIndex >= 3 ? 'animate-[dash_12s_linear_infinite]' : 'opacity-10'}
              style={{ stroke: 'url(#edge-flow)', strokeWidth: '1.5px', strokeDasharray: '5 5' }}
            />
            <path
              d="M 130 149 V 200"
              className={currentStepIndex >= 6 ? 'animate-[dash_12s_linear_infinite]' : 'opacity-10'}
              style={{ stroke: 'url(#edge-flow)', strokeWidth: '1.5px', strokeDasharray: '5 5' }}
            />
            <path
              d="M 330 149 V 200"
              className={currentStepIndex >= 6 ? 'animate-[dash_12s_linear_infinite]' : 'opacity-10'}
              style={{ stroke: 'url(#edge-flow)', strokeWidth: '1.5px', strokeDasharray: '5 5' }}
            />

            <g className={`transition-all duration-700 ${currentStepIndex >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
              <rect x="165" y="25" width="130" height="34" rx="17" style={{ fill: '#12121c', stroke: '#6366f1', strokeWidth: '1.5px' }} />
              <circle cx="185" cy="42" r="3" style={{ fill: '#6366f1' }} className="animate-pulse" />
              <text x="196" y="45" className="font-bold font-sans" style={{ fill: '#f8f9fa', fontSize: '9px', letterSpacing: '0.05em' }}>ARCHITECT</text>
            </g>

            <g className={`transition-all duration-700 delay-100 ${currentStepIndex >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
              <rect x="65" y="115" width="130" height="34" rx="17" style={{ fill: '#12121c', stroke: '#38bdf8', strokeWidth: '1px' }} />
              <circle cx="85" cy="132" r="3" style={{ fill: '#38bdf8' }} />
              <text x="96" y="135" className="font-bold font-sans" style={{ fill: '#38bdf8', fontSize: '8.5px', letterSpacing: '0.05em' }}>BACKEND_LEAD</text>
            </g>

            <g className={`transition-all duration-700 delay-200 ${currentStepIndex >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
              <rect x="265" y="115" width="130" height="34" rx="17" style={{ fill: '#12121c', stroke: '#a855f7', strokeWidth: '1px' }} />
              <circle cx="285" cy="132" r="3" style={{ fill: '#a855f7' }} />
              <text x="296" y="135" className="font-bold font-sans" style={{ fill: '#a855f7', fontSize: '8.5px', letterSpacing: '0.05em' }}>FRONTEND_LEAD</text>
            </g>

            <g className={`transition-all duration-700 delay-300 ${currentStepIndex >= 7 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
              <rect x="65" y="200" width="130" height="34" rx="17" style={{ fill: '#12121c', stroke: '#6366f1', strokeWidth: '1px' }} />
              <circle cx="85" cy="217" r="3" style={{ fill: '#818cf8' }} />
              <text x="96" y="220" className="font-bold font-sans" style={{ fill: '#818cf8', fontSize: '8.5px', letterSpacing: '0.05em' }}>CODER_AGENT</text>
            </g>

            <g className={`transition-all duration-700 delay-400 ${currentStepIndex >= 7 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
              <rect x="265" y="200" width="130" height="34" rx="17" style={{ fill: '#12121c', stroke: '#34d399', strokeWidth: '1px' }} />
              <circle cx="285" cy="217" r="3" style={{ fill: '#34d399' }} />
              <text x="296" y="220" className="font-bold font-sans" style={{ fill: '#34d399', fontSize: '8.5px', letterSpacing: '0.05em' }}>QA_AGENT</text>
            </g>
          </svg>
        </div>

        <div className="flex-1 flex flex-col justify-end space-y-2 overflow-y-auto pr-2 max-h-[220px]">
          {visibleLogs.map((log, index) => (
            <div
              key={index}
              className="flex items-start gap-3 text-[11px] leading-relaxed transition-all duration-300 animate-[fade_0.25s_cubic-bezier(0.16,1,0.3,1)]"
            >
              <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded bg-surface border border-border/35 ${log.status === 'active' ? 'text-accent border-accent/40 shadow-sm shadow-accent-glow' : 'text-ink-subtle'}`}>
                {log.icon}
              </span>
              <div className="flex gap-2">
                <span className={`font-semibold tracking-wider text-[10px] ${log.status === 'active' ? 'text-accent' : 'text-ink-subtle'}`}>
                  {log.prefix}:
                </span>
                <span className={log.status === 'active' ? 'text-ink font-semibold' : 'text-ink-muted'}>
                  {log.message}
                </span>
              </div>
            </div>
          ))}
          {!isDone && (
            <div className="flex items-center gap-2 pl-7 py-1 text-[11px] text-ink-subtle">
              <span className="animate-pulse">resolving node bindings</span>
              <span className="h-3 w-1.5 bg-accent animate-pulse" />
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -40;
          }
        }
        @keyframes fade {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
