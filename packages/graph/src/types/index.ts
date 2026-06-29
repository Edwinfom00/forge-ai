export type GraphNode<T = unknown> = {
  id: string;
  data: T;
};

export type GraphEdge = {
  from: string;
  to: string;
  weight?: number;
};

export type Graph<T = unknown> = {
  nodes: GraphNode<T>[];
  edges: GraphEdge[];
};

export type TopologicalSortResult =
  | { success: true; order: string[] }
  | { success: false; cycle: string[] };
