'use client';

import { CompilerSimulator } from '../components/compiler-simulator';
import { SignInCard } from '../components/sign-in-card';

export const AuthPage = () => {
  return (
    <div className="grid min-h-screen w-screen grid-cols-1 lg:grid-cols-5 bg-[#06060b] text-foreground overflow-hidden relative">
      <div className="col-span-3 hidden lg:flex flex-col border-r border-border/30 bg-[#06060b]">
        <CompilerSimulator />
      </div>

      <div className="col-span-2 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-20 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-accent-glow blur-[120px] opacity-25 pointer-events-none" />
        
        <div className="mx-auto flex w-full max-w-sm flex-col relative z-10 space-y-10">
          <div className="flex items-center gap-3">
            <svg className="h-9 w-9" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="var(--accent-glow)" stroke="var(--accent)" strokeWidth="1" />
              <path d="M12 22 L20 14 L28 22" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 29 L20 21 L28 29" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="20" cy="20" r="2.5" fill="var(--ink)" />
            </svg>
            <div className="flex flex-col">
              <span className="font-mono text-xs text-ink font-bold tracking-widest uppercase">ForgeAI</span>
              <span className="text-[9px] text-accent font-bold tracking-wider font-mono">SYSTEM_COMPILER</span>
            </div>
          </div>

          <SignInCard />
        </div>
      </div>
    </div>
  );
};
