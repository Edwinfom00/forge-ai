from collections import defaultdict, deque


def topological_sort(nodes: list[str], edges: list[tuple[str, str]]) -> list[str] | None:
    in_degree: dict[str, int] = defaultdict(int)
    adjacency: dict[str, list[str]] = defaultdict(list)

    for node in nodes:
        in_degree[node] = in_degree.get(node, 0)

    for src, dst in edges:
        adjacency[src].append(dst)
        in_degree[dst] += 1

    queue: deque[str] = deque(n for n in nodes if in_degree[n] == 0)
    order: list[str] = []

    while queue:
        current = queue.popleft()
        order.append(current)
        for neighbor in adjacency[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return order if len(order) == len(nodes) else None


def detect_cycle(nodes: list[str], edges: list[tuple[str, str]]) -> list[str]:
    order = topological_sort(nodes, edges)
    if order is not None:
        return []
    return [n for n in nodes if n not in (order or [])]
