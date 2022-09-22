#1 상하좌우
n = int(input())
cmd = list(input().split())

col=1
row=1

# 행과 열을 좌표로
# L,R은 col 제어
# U,D는 row 제어

for i in range(len(cmd)):
    if(cmd[i]=='L' and col>1):
        col-=1;
    elif(cmd[i]=='R' and col<n):
        col+=1;
    elif(cmd[i]=='U' and row>1):
        row-=1;
    elif(cmd[i]=='D' and row<n):
        row+=1;

print(row,col)

#2 시각
n = int(input())
result = 0

for i in range(n+1):
    for j in range(60):
        for k in range(60):
            if '3' in str(i) + str(j) + str(k):
                result+=1

print(result)