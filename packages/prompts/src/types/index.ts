export type PromptTemplate = {
  id: string;
  name: string;
  template: string;
  variables: string[];
  category: 'system' | 'user' | 'assistant';
};

export type CompiledPrompt = {
  templateId: string;
  rendered: string;
  tokenEstimate: number;
};
