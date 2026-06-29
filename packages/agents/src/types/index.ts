export type AgentCapability =
  | 'read-files'
  | 'write-files'
  | 'run-tests'
  | 'call-api'
  | 'search-web'
  | 'query-database'
  | 'run-shell';

export type AgentPersona = {
  name: string;
  role: string;
  expertise: string[];
  communicationStyle: 'technical' | 'formal' | 'collaborative';
};
