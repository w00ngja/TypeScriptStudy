#_________________________Mycode
n,k = map(int,input().split())
cnt = 0

while(True):
    if(n%k==0):
        n/=k
        cnt+=1
    elif(n==1):
        break;
    else:
        n-=1
        cnt+=1

print(cnt)