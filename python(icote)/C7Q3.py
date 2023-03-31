# 1. 떡 중 제일 긴 떡의 길이부터 잘라나가 -> 그걸 배열에 저장하던가 해
# 2. 그 합이 손님이 요청한 길이 M이 되었을 때 절단기 높이를 반환

n,m = list(map(int,input().split()))

# Q1. 떡 n개의 개수를 입력해주어야 하는데, 반복문을 통해 입력받아야되나?
# Syntax적인 부분 -> 어떻게 보면 구현

array = list(map(int,input().split()))


cut_height = max(array)

# 탐색
while(True):
    dduck = 0

    for i in range(len(array)):
        temp = array[i] - cut_height

        if (temp > 0):
            dduck += temp

    if dduck == m :
        print(cut_height)
        break;
    else:
        cut_height-=1


# 답안
