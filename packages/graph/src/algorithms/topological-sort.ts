import { type Graph, type TopologicalSortResult } from '../types/index.js';

export const topologicalSort = <T>(graph: Graph<T>): TopologicalSortResult => {
  const adjacency = new Map<string, Set<string>>();
  const inDegree = new Map<string, number>();

  for (const node of graph.nodes) {
    adjacency.set(node.id, new Set());
    inDegree.set(node.id, 0);
  }

  for (const edge of graph.edges) {
    adjacency.get(edge.from)?.add(edge.to);
    inDegree.set(edge.to, (inDegree.get(edge.to) ?? 0) + 1);
  }

  const queue: string[] = [];
  for (const [nodeId, degree] of inDegree.entries()) {
    if (degree === 0) queue.push(nodeId);
  }

  const order: string[] = [];
  while (queue.length > 0) {
    const current = queue.shift()!;
    order.push(current);

    for (const neighbor of adjacency.get(current) ?? []) {
      const newDegree = (inDegree.get(neighbor) ?? 0) - 1;
      inDegree.set(neighbor, newDegree);
      if (newDegree === 0) queue.push(neighbor);
    }
  }

  if (order.length !== graph.nodes.length) {
    const cycle = graph.nodes
      .filter(n => !order.includes(n.id))
      .map(n => n.id);
    return { success: false, cycle };
  }

  return { success: true, order };
};
