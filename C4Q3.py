n,m = map(int,input().split())
coord = list(map(int,input().split()))

world=[list(map(int, input().split())) for _ in range(int(n))]


step = [(-1,0),(0,-1),(+1,0),(0,+1)] #상좌하우 (반시계방향)
dir=coord[2]
world[coord[0]][coord[1]]=2

# 가본 칸은 2
while(True):
    if (dir == 0 and world[coord[0] - 1][coord[1]] == 0):
        coord[0] = coord[0] + step[0][0]
        coord[1] = coord[1] + step[0][1]

    elif (dir == 1 and world[coord[0]][coord[1]-1] == 0):
        coord[0] = coord[0] + step[1][0]
        coord[1] = coord[1] + step[1][1]

    elif (dir == 2 and world[coord[0]+1][coord[1]] == 0):
        coord[0] = coord[0] + step[2][0]
        coord[1] = coord[1] + step[2][1]

    elif (dir == 3 and world[coord[0]][coord[1]+1] == 0):
        coord[0] = coord[0] + step[3][0]
        coord[1] = coord[1] + step[3][1]

    else:
        dir +=1
        if (dir==4):
            dir=0
    world[coord[0]][coord[1]] = 2;

    if (world[coord[0]+1][coord[1]]!=0 and world[coord[0]-1][coord[1]]!=0 and world[coord[0]][coord[1]+1]!=0 and world[coord[0]][coord[1]-1]!=0):
        if(dir==0 and world[coord[0] + step[2][0]][coord[1] + step[2][1]]==2):
            coord[0] = coord[0] + step[2][0]
            coord[1] = coord[1] + step[2][1]
        elif (dir == 1 and world[coord[0] + step[3][0]][coord[1] + step[3][1]]==2):
            coord[0] = coord[0] + step[3][0]
            coord[1] = coord[1] + step[3][1]
        elif (dir == 2 and world[coord[0] + step[0][0]][coord[1] + step[0][1]]==2):
            coord[0] = coord[0] + step[0][0]
            coord[1] = coord[1] + step[0][1]
        elif (dir == 3 and world[coord[0] + step[1][0]][coord[1] + step[1][1]]==2):
            coord[0] = coord[0] + step[1][0]
            coord[1] = coord[1] + step[1][1]
        else:
            break;

output = 0
for row in range(n):
    for col in range(m):
        if(world[row][col]==2):
            output+=1

print(output)