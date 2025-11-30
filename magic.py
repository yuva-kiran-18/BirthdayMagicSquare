def createbox():
    global box
    box=[[0 for _ in range(4)] for _ in range(4)]
    box[0][0]=a0
    box[0][1]=b0
    box[0][2]=c0
    box[0][3]=d0
    return box
def createglobals():
    global a0,b0,c0,d0,x
    y=input('Enter Date of Birth(dd/mm/yyyy)  ::   ')
    while len(y)!=10:
        y=input('Please Enter Valid Date of Birth in (DD/MM/YYYY) pattern Ex. 01/01/2000  ::  \nPress 1 to exit  ::  ')
        if y=='1':
            return False
    a=y[0]+y[1]
    b=y[3]+y[4]
    c=y[6]+y[7]+y[8]+y[9]
    try:
        if a[0]=='0':
            a0=int(a[1])
        else:
            a0=int(a)
        if b[0]=='0':
            b0=int(b[1])
        else:
            b0=int(b)
        c0=int(c[0]+c[1])
        d0=int(c[2]+c[3])
        x=a0+b0+c0+d0
    except ValueError:
        print("You didn't enter Correct Date of Birth or Something Went Wrong\n\t\t PLEASE TRY AGAIN")
        return False
    return a0,b0,c0,d0,x
def printbox():
    for i in range(4):
        for j in range(4):
            print(box[i][j],end='   ')
        print('\n')
def checkDuplicate(a,n):
    for i in range(n):
        for j in range(4):
            if box[i][j]==a:
                return True
    return False
def checkSemiMagic(a0,b0,c0,d0,a1,b1,c1,d1,a2,b2,c2,d2,a3,b3,c3,d3,x):
    if a0+b0+c0+d0==x and a1+b1+c1+d1==x and a2+b2+c2+d2==x and a3+b3+c3+d3==x and a0+a1+a2+a3==x and b0+b1+b2+b3==x and c0+c1+c2+c3==x and d0+d1+d2+d3==x:
        return True
    return False
def checkOrdinaryMagic(a0,b0,c0,d0,a1,b1,c1,d1,a2,b2,c2,d2,a3,b3,c3,d3,x):
    if a0+b1+c2+d3==x and d0+c1+b2+a3==x:
        return True
    return False
def checkMPMS(a0,b0,c0,d0,a1,b1,c1,d1,a2,b2,c2,d2,a3,b3,c3,d3,x):
    if a0+b0+a1+b1==x and b0+c0+b1+c1==x and c1+c0+d0+d1==x and a2+b2+a1+b1==x and c1+c2+b1+b2==x and c1+c2+d1+d2==x and a2+b2+a3+b3==x and c2+c3+d2+d3==x and b2+b3+c2+c3==x and a0+b0+a3+b3==x and b0+c0+b3+c3==x and c0+d0+c3+d3==x and a0+a1+d0+d1==x and a1+a2+d1+d2==x and a2+a3+d2+d3==x:
        return True
    return False
def checkPanMagic(a0,b0,c0,d0,a1,b1,c1,d1,a2,b2,c2,d2,a3,b3,c3,d3,x):
    if c0+b1+a2+d3==x and d1+c2+b3+a0==x and b0+c1+d2+a3==x and a1+b2+c3+d0==x:
        return True
    return False
def checkCompleteMagic(a0,b0,c0,d0,a1,b1,c1,d1,a2,b2,c2,d2,a3,b3,c3,d3,x):
    if a0+c0+a2+c2==x and b0+d0+b2+d2==x and a1+c1+a3+c3==x and b1+d1+b3+d3==x:
        return True
    return False
def createMagic():
    global l
    z=False;l=[]
    while box[1][0]<x-(box[0][0]+box[0][1]):
        box[1][1]=x-(box[0][0]+box[0][1]+box[1][0])
        box[1][2]=x-(box[0][2]+box[1][1]+box[0][1])
        box[1][3]=x-(box[0][3]+box[1][2]+box[0][2])
        l.extend([box[1][0],box[1][1],box[1][2],box[1][3]])
        if (checkDuplicate(l[0],1) or checkDuplicate(l[1],1) or checkDuplicate(l[2],1) or checkDuplicate(l[3],1)) or any(i<0 for i in l) or len(l)>len(set(l)):
            l.clear()
        else:   
            l.clear()
            box[2][0]=0
            while box[2][0]<x-(box[1][0]+box[1][1]):
                box[2][1]=x-(box[1][0]+box[1][1]+box[2][0])
                box[2][2]=x-(box[1][2]+box[2][1]+box[1][1])
                box[2][3]=x-(box[1][3]+box[2][2]+box[1][2])
                l.extend([box[2][0],box[2][1],box[2][2],box[2][3]])
                if (checkDuplicate(l[0],2) or checkDuplicate(l[1],2) or checkDuplicate(l[2],2) or checkDuplicate(l[3],2)) or any(i<0 for i in l) or len(l)>len(set(l)):
                    l.clear()
                else:
                    l.clear()
                    box[3][0]=x-(box[2][0]+box[1][0]+box[0][0])
                    box[3][1]=x-(box[2][1]+box[1][1]+box[0][1])
                    box[3][2]=x-(box[2][2]+box[1][2]+box[0][2])
                    box[3][3]=x-(box[2][3]+box[1][3]+box[0][3])
                    l.extend([box[3][0],box[3][1],box[3][2],box[3][3]])
                    if checkSemiMagic(box[0][0],box[0][1],box[0][2],box[0][3],box[1][0],box[1][1],box[1][2],box[1][3],box[2][0],box[2][1],box[2][2],box[2][3],box[3][0],box[3][1],box[3][2],box[3][3],x) and not (checkDuplicate(box[3][0],3) or checkDuplicate(box[3][1],3) or checkDuplicate(box[3][2],3) or checkDuplicate(box[3][3],3)) and not any(i<0 for i in l) and len(l)==len(set(l)):
                        z=True
                        break
                    else:
                        pass
                box[2][0]+=1
        if z==True:
            break
        else:
            box[1][0]+=1
def checkRemaining():
    checkSemiM=False;checkOrdinaryM=False;checkM=False;checkPanM=False;checkCompleteM=False
    if checkSemiMagic(box[0][0],box[0][1],box[0][2],box[0][3],box[1][0],box[1][1],box[1][2],box[1][3],box[2][0],box[2][1],box[2][2],box[2][3],box[3][0],box[3][1],box[3][2],box[3][3],x):
        print('The semi magic square is ...')
        checkSemiM=True
        printbox()
        while not checkOrdinaryMagic(box[0][0],box[0][1],box[0][2],box[0][3],box[1][0],box[1][1],box[1][2],box[1][3],box[2][0],box[2][1],box[2][2],box[2][3],box[3][0],box[3][1],box[3][2],box[3][3],x):
            box[1][0]+=1
            createMagic()
            if box[1][0]>x-(box[0][0]+box[0][1]):
                checkOrdinaryM=False
                print('Ordinary magic square not found ...')
                break
        if checkOrdinaryMagic(box[0][0],box[0][1],box[0][2],box[0][3],box[1][0],box[1][1],box[1][2],box[1][3],box[2][0],box[2][1],box[2][2],box[2][3],box[3][0],box[3][1],box[3][2],box[3][3],x):
            checkOrdinaryM=True
            print('The Ordinary Magic square is ...')
            printbox()
    else:
        print('Semi Magic Square not found ...')
    if checkPanMagic(box[0][0],box[0][1],box[0][2],box[0][3],box[1][0],box[1][1],box[1][2],box[1][3],box[2][0],box[2][1],box[2][2],box[2][3],box[3][0],box[3][1],box[3][2],box[3][3],x):
        print('The Pan Magic Square is ...')
        checkPanM=True
        printbox()
    else:
        print('Pan magic square not found ...')
    if checkCompleteMagic(box[0][0],box[0][1],box[0][2],box[0][3],box[1][0],box[1][1],box[1][2],box[1][3],box[2][0],box[2][1],box[2][2],box[2][3],box[3][0],box[3][1],box[3][2],box[3][3],x):
        print('The complete Magic Square is ...')
        checkCompleteM=True
        printbox()
    else:
        print('Complete Magic Square Not found ...')
    if checkMPMS(box[0][0],box[0][1],box[0][2],box[0][3],box[1][0],box[1][1],box[1][2],box[1][3],box[2][0],box[2][1],box[2][2],box[2][3],box[3][0],box[3][1],box[3][2],box[3][3],x):
        print('The Most Perfect Magic Square is ...')
        checkM=True
        printbox()
    else:
        print('Most perfect Magic Square Not found ...')
    if checkSemiM == True and checkPanM == True and checkCompleteM == True and checkOrdinaryM == True and checkM == True:
        print('Your Birthday Satisfies All Magic Square conditions ...\nThe Final Most Perfect Magic Square is :: ')
        printbox()
if createglobals():
    createbox()
    createMagic()
    checkRemaining()