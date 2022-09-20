# 숫자 카드 게임
#_________________________Mycode
N,M = map(int,input().split())

dst = []

for _ in range(0,N):
    input_line = list(map(int, input().split()))
    dst.append(min(input_line))

print(max(dst))

#_________________________Anscode1
n,m = map(int,input().split())
result = 0

for i in range(n):
    data = list(map(int,input().split()))
    min_value = min(data)
    result = max(result,min_value)

print(result)

#_________________________Anscode2
n,m = map(int,input().split())
result = 0

for i in range(n):
    data = list(map(int,input().split()))
    min_value=10001
    for a in data:
        min_value = min(min_value,a)
    result = max(result,min_value)

print(result)