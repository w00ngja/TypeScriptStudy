#DFS Method
def dfs(graph,v,visited):
    visited[v] = True
    print(v,end='')

    for i in graph[v]:
        if not visited[i]:
            dfs(graph,i,visited)

graph = [
    [],
    [2,3,8],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
]

visited = [False]*9

dfs(graph,1,visited)

# BFS Method

from collections import deque

def bfs(graph, start, visited):
    queue = deque([start])

    # 현재 노드를 방문 처리
    visited[start] = True

    # 모든 큐를 탐색할 때까지 반복
    while queue:
        v = queue.popleft()
        print(v,end='')

        # 해당 원소와 연결된 아직 방문하지 않은 원소들을 큐에 삽입
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True

graph = [
    [],
    [2,3,8],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
]

visited = [False]*9

bfs(graph,1,visited)