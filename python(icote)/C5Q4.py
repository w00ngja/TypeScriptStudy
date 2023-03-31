n,m = list(map(int,input().split()))

mmap = []
for i in range(n):
    mmap.append(list(map(int,input())))

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