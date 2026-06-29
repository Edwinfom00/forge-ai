export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type AsyncResult<T> = Promise<Result<T>>;

export type Result<T, E extends Error = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

export type PaginatedResult<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasNextPage: boolean;
};

export type PaginationInput = {
  page: number;
  pageSize: number;
};

export type SortOrder = 'asc' | 'desc';

export type SortInput = {
  field: string;
  order: SortOrder;
};

export type EntityId = string & { readonly __brand: 'EntityId' };

export type Timestamp = {
  createdAt: Date;
  updatedAt: Date;
};

export type BaseEntity = {
  id: string;
} & Timestamp;
