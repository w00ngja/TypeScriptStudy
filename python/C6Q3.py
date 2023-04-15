n = int(input())

list=[]
for i in range(n):
    inputdata = input().split()
    list.append((inputdata[0],int(inputdata[1])))

list=sorted(list,key=lambda student:student[1])

for i in range(len(list)):
    print(list[i][0])