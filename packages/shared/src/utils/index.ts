export const createResult = <T>(data: T): { success: true; data: T } => ({
  success: true,
  data,
});

export const createError = <E extends Error>(error: E): { success: false; error: E } => ({
  success: false,
  error,
});

export const isNonNullable = <T>(value: T): value is NonNullable<T> =>
  value !== null && value !== undefined;

export const chunk = <T>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

export const sleep = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));

export const generateId = (): string =>
  Math.random().toString(36).slice(2) + Date.now().toString(36);
