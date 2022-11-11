n = int(input())
a = list(map(int,input().split()))
m = int(input())
b = list(map(int,input().split()))

result = []

for i in range(len(b)):
    cnt=0

    for j in range(len(a)):
        if b[i] == a[j]:
            result.append("Yes")
        else:
            cnt+=1

    if cnt == len(a):
        result.append("No")

print(result)

# A1

def binary_search(array, target,start,end):
    while start <= end:
        mid = (start+end)//2
        if array[mid] == target:
            return mid
        elif array[mid]>target:
            end = mid-1
        else:
            start = mid+1
        return None

for i in b:
    result = binary_search(a,i,0,n-1)
    if result != None:
        print('yes',end='')
    else:
        print('No',end='')