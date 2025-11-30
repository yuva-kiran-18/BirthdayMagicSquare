import random
a0=27
b0=6
c0=20
d0=6
x=a0+b0+c0+d0
print(x)
a1=1
count=2
def check(a,b,c,d,x):
    if a+b+c+d>x:
        return False
    elif a+b+c+d!=x or a<=0 or b<=0 or c<=0 or d<=0 or a==b or b==c or c==d or d==a or a==c or b==d:
        return True
    return False
while a1<=30:
    b1=x-(a0+b0+a1)
    c1=x-(b0+c0+b1)
    d1=x-(c0+d0+c1)
    print(a1,b1,c1,d1,a1+b1+c1+d1)
    print(count)
    if check(a1,b1,c1,d1,x) and count==a1:
        a1+=1
        count+=1
    elif count==a1:
        print('Not possible')
    else:
        print('m')
        break
print(a1,b1,c1,d1,a1+b1+c1+d1)