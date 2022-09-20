# 숫자 카드 게임
# 내코드
N,M = map(int,input().split())

dst = []

for _ in range(0,N):
    input_line = list(map(int, input().split()))
    dst.append(min(input_line))

print(max(dst))

#교재 코드 1
n,m = map(int,input().split())
result = 0

for i in range(n):
    data = list(map(int,input().split()))
    min_value = min(data)
    result = max(result,min_value)

print(result)

#교재 코드 2 : 2중 반복문 구조를 이용
n,m = map(int,input().split())
result = 0

for i in range(n):
    data = list(map(int,input().split()))
    min_value=10001
    for a in data:
        min_value = min(min_value,a)
    result = max(result,min_value)

print(result)