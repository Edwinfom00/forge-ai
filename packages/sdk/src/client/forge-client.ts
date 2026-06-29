import { type ForgeClientConfig, type CompileRequest, type CompileResponse } from '../types/index.js';

export class ForgeClient {
  private readonly config: Required<ForgeClientConfig>;

  constructor(config: ForgeClientConfig) {
    this.config = {
      timeout: 30000,
      ...config,
    };
  }

  async compile(request: CompileRequest): Promise<CompileResponse> {
    const response = await fetch(`${this.config.baseUrl}/api/compile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.apiKey}`,
      },
      body: JSON.stringify(request),
      signal: AbortSignal.timeout(this.config.timeout),
    });

    if (!response.ok) {
      throw new Error(`ForgeAI API error: ${response.statusText}`);
    }

    return response.json() as Promise<CompileResponse>;
  }
}
