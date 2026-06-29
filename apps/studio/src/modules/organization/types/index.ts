export type OrganizationId = string & { readonly __brand: 'OrganizationId' };
export type DepartmentId = string & { readonly __brand: 'DepartmentId' };

export type OrganizationStatus = 'draft' | 'active' | 'archived';

export type OrganizationState =
  | { status: 'draft' }
  | { status: 'active'; deployedAt: Date }
  | { status: 'archived'; archivedAt: Date; reason: string };

export type Organization = {
  id: OrganizationId;
  projectId: string;
  name: string;
  description: string | null;
  status: OrganizationStatus;
  state: OrganizationState;
  createdAt: Date;
  updatedAt: Date;
};

export type Department = {
  id: DepartmentId;
  organizationId: OrganizationId;
  name: string;
  authorizationKey: string;
  teams: Team[];
  createdAt: Date;
  updatedAt: Date;
};

export type Team = {
  id: string;
  departmentId: DepartmentId;
  name: string;
  role: 'backend' | 'frontend' | 'devops' | 'qa' | 'architecture' | 'documentation';
  agentCount: number;
  leadAgentId: string | null;
};
