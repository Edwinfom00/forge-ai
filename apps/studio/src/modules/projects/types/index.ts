export type ProjectId = string & { readonly __brand: 'ProjectId' };

export type ProjectStatus = 'draft' | 'compiling' | 'active' | 'archived';

export type Project = {
  id: ProjectId;
  name: string;
  description: string | null;
  ownerId: string;
  status: ProjectStatus;
  runtimeTarget: string;
  createdAt: Date;
  updatedAt: Date;
};
