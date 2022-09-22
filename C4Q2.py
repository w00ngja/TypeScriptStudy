# 8+2x8+2 의 2차원 배열을 만들고 컨트롤?
input = input()

col=0
row=int(input[1])

col_char = ['a','b','c','d','e','f','g','h']
cnt=0

# collum 입력받은 알파벳 -> 숫자 변환
for i in range(8):
    if(col_char[i]==input[0]):
        col = i+1

# 좌표 이동 시뮬레이션 후 조건 만족하면 카운팅
dir=[(-2,-1),(-2,+1),(+2,-1),(+2,+1),(-1,-2),(+1,-2),(-1,+2),(+1,+2)]

for i in dir:
    row_check=row+i[0]
    col_check=col+i[1]

    if(1<=row_check<=8 and 1<=col_check<=8):
        cnt+=1;

print(cnt)