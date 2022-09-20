# 크기가 N인 배열에서 총 M번 더하고, 특정 인덱스의 숫자가 K번을 초과하여 연속히 더해질 수 없다.
# 그렇게 더해서 가장 큰 수가 나오게 하면 된다.

# [Key] 결국 입력받은 배열 중에, 가장 큰 수를 기본으로 깔고 연속 불가 조건 (K)일 때만 그 다음으로 큰 수를 깔아 주면 된다. 따라서 배열의 크기 N이 얼마나
# 크냐에 관계 없이, 두 수만 찾으면 된다. -> sorting?

# Q1. 문제에는 입력받은 변수들에 범위 조건들이 걸려져 있는데, 따로 지정해 주어야 하는지
# Q2. 정렬을 하고 난 후에,가장 큰 수를 M만큼 깔아 (배열 초기화)
# Q3. 배열 크기에 맞는 nK+1 번째 숫자들을 그 다음으로 큰 수로 깔아, 걔네 모두 더해?
# Q4. for문 or while문?


import time

# My code
start = time.perf_counter()  # 시간 측정 시작

N,M,K =  map(int, input().split())
num_list =  list(map(int, input().split()))
num_list.sort(reverse=1)

lg_number = num_list[0]
next_lg_number = num_list[1]
differ = lg_number - next_lg_number

dst = [lg_number]*M
result = sum(dst) - (differ*int(M/(K+1)))

end = time.perf_counter()  # 시간 측정 끝
print(result)
print('time : ', end-start)

# 교재 코드 1
start = time.perf_counter()  # 시간 측정 시작
n,m,k = map(int, input().split())
data = list(map(int, input().split()))

data.sort()
first = data[n-1]
second = data[n-2]

result = 0
while True:
    for i in range(k):
        if m==0:
            break
        result += first
        m -= 1
    if m==0:
        break
    result += second
    m -= 1

    print(result)

end = time.perf_counter()  # 시간 측정 끝
print('time : ', end - start)


# 교재 코드2
import time
start = time.perf_counter()  # 시간 측정 시작

n,m,k = map(int, input().split())
data = list(map(int, input().split()))

data.sort()
first = data[n-1]
second = data[n-2]

count = int(m/(k+1))*k
count += m% (k+1)

result = 0
result += (count) * first
result += (m-count) * second

print(result)
end = time.perf_counter()  # 시간 측정 끝
print('time : ', end - start)

