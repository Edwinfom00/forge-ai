'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

type CompilerInputProps = {
  onCompile: (idea: string, runtimeTarget: string) => void;
  isLoading: boolean;
  className?: string;
};

const RUNTIME_TARGETS = [
  { value: 'claude-code', label: 'Claude Code' },
  { value: 'codex', label: 'Codex' },
  { value: 'openai-agents-sdk', label: 'OpenAI Agents SDK' },
  { value: 'langgraph', label: 'LangGraph' },
  { value: 'crewai', label: 'CrewAI' },
];

export const CompilerInput = ({ onCompile, isLoading, className }: CompilerInputProps) => {
  const [idea, setIdea] = useState('');
  const [runtimeTarget, setRuntimeTarget] = useState('claude-code');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim().length >= 20) {
      onCompile(idea, runtimeTarget);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-4', className)}>
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="idea">
          Describe your software idea
        </label>
        <textarea
          id="idea"
          value={idea}
          onChange={e => setIdea(e.target.value)}
          placeholder="Describe the software system you want to build..."
          className="min-h-[200px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="runtime">
          Runtime Target
        </label>
        <select
          id="runtime"
          value={runtimeTarget}
          onChange={e => setRuntimeTarget(e.target.value)}
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          disabled={isLoading}
        >
          {RUNTIME_TARGETS.map(t => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={isLoading || idea.trim().length < 20}
        className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
      >
        {isLoading ? 'Compiling...' : 'Compile Organization'}
      </button>
    </form>
  );
};
