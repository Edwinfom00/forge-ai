export type OrgTopology = {
  departments: Array<{
    name: string;
    teams: Array<{
      name: string;
      role: string;
      agentCount: number;
    }>;
  }>;
};

export type PlannerInput = {
  domainCount: number;
  complexity: 'low' | 'medium' | 'high';
  runtimeTarget: string;
};
