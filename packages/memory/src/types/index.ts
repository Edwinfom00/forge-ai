export type MemoryType = 'project' | 'organization' | 'business' | 'architecture' | 'runtime' | 'shared' | 'persistent' | 'long-term';

export type MemoryEntry = {
  id: string;
  partitionId: string;
  type: MemoryType;
  content: string;
  embedding?: number[];
  metadata: Record<string, unknown>;
  createdAt: Date;
  expiresAt: Date | null;
};

export type MemoryQuery = {
  partitionId: string;
  query: string;
  topK: number;
  threshold?: number;
};
