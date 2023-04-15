# 맵 크기 입력받는다.
n,m = map(int,input().split())

# 맵 모양 입력받는다.
graph = []
for i in range(n):
    graph.append(list(map(int,input())))

def icy(x,y):
    if x<=-1 or x>=n or y<=-1 or y>=m:
        return False

    if graph[x][y] == 0:
        graph[x][y] ==1
        icy(x-1,y)
        icy(x,y-1)
        icy(x+1,y)
        icy(x,y+1)
        return True

    return False

result = 0

for i in range(n):
    for j in range(m):
        if icy(i,j)==True:
            result+=1

print(result)