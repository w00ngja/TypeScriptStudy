n,m = list(map(int,input().split()))
array = list(map(int,input().split()))

start=0
end = max(array)

result = 0
while(start<=end):
    total = 0
    mid = (start + end) //2

    for x in array:
        if x>mid:
            total += x-mid

    if(total < m):
        #왼쪽 영역으로
        end = mid-1
    else:
        #오른쪽 영역으로
        result = mid
        start = mid+1

print(result)
