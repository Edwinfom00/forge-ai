export type AgentId = string & { readonly __brand: 'AgentId' };

export type AgentRole = 'architect' | 'backend-lead' | 'backend' | 'reviewer' | 'qa' | 'documentation' | 'release';

export type Agent = {
  id: AgentId;
  teamId: string;
  name: string;
  role: AgentRole;
  persona: string;
  systemPrompt: string;
  capabilities: string[];
  createdAt: Date;
  updatedAt: Date;
};
