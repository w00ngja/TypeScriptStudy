n,m = list(map(int,input().split()))

mmap = []
for i in range(n):
    mmap.append(list(map(int,input())))

# 출구에 도착하는 모든 경우의 수를 구해?
# 출구는 아래 있으니 아래를 우선 (하,우,좌,상 순) -> 이런 식이면 무조건 최소니까 따로 인덱스 저장 안해도 될 듯
# 그 인덱스와 인덱스에 매칭되는 값들을 저장해놓고 가장 적은 이동수를 가질 때를 출력


#BFS? 자기 자신을 큐에서 삭제, 주변 값을 삽입

#방문했던 노드를 재방문하지 않기 때문에, BFS를 이용해 도달한 곳이 바로 최단 경로
# 근데 다시 위로 올라갈수도 있잖아
from collections import deque

def maze(x,y):
    queue = deque()
    queue.append((x,y))

    while queue:
        # 현재 노드 삭제
        x,y = queue.popleft()

        for dx,dy in (1,0),(0,1),(-1,0),(0,-1):
            nx,ny = x+dx, y+dy

            if nx < 0 or ny < 0 or nx>=n or ny>=m:
                continue

            if mmap[nx][ny]==0:
                continue

            # 처음 방문하는 노드인 경우 기록
            # 이동한 노드는 다시 큐 리스트에 삽입
            if mmap[nx][ny] == 1:
                mmap[nx][ny] = mmap[x][y] +1
                queue.append((nx,ny))

    return mmap[n-1][m-1]


print(maze(0,0))