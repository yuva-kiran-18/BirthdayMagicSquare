let box = [
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0]
]

let form = document.querySelector("form");
let dob = document.getElementById("dob");
let a1 =document.getElementById("a1");
let b1 =document.getElementById("b1");
let c1 =document.getElementById("c1");
let d1 =document.getElementById("d1");
let a2 =document.getElementById("a2");
let b2 =document.getElementById("b2");
let c2 =document.getElementById("c2");
let d2 =document.getElementById("d2");
let a3 =document.getElementById("a3");
let b3 =document.getElementById("b3");
let c3 =document.getElementById("c3");
let d3 =document.getElementById("d3");
let a4 =document.getElementById("a4");
let b4 =document.getElementById("b4");
let c4 =document.getElementById("c4");
let d4 =document.getElementById("d4");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    dob = document.getElementById("dob")

    assignValues()
    dob=""
    createMagic()
    checkRemaining()
    reset()
});
let x=0;
function printbox(){
    document.getElementById("a1").textContent = box[0][0];
    document.getElementById("b1").textContent = box[0][1];
    document.getElementById("c1").textContent = box[0][2];
    document.getElementById("d1").textContent = box[0][3];

    document.getElementById("a2").textContent = box[1][0];
    document.getElementById("b2").textContent = box[1][1];
    document.getElementById("c2").textContent = box[1][2];
    document.getElementById("d2").textContent = box[1][3];

    document.getElementById("a3").textContent = box[2][0];
    document.getElementById("b3").textContent = box[2][1];
    document.getElementById("c3").textContent = box[2][2];
    document.getElementById("d3").textContent = box[2][3];

    document.getElementById("a4").textContent = box[3][0];
    document.getElementById("b4").textContent = box[3][1];
    document.getElementById("c4").textContent = box[3][2];
    document.getElementById("d4").textContent = box[3][3];
}

function assignValues(){
	box[0][0] = parseInt(dob.value[8]+dob.value[9])
	if (dob.value[6]==0){
		box[0][1] = parseInt(dob.value[6])
	}else{
		box[0][1] = parseInt(dob.value[6]+dob.value[7])
	}
	box[0][2] = parseInt(dob.value[0]+dob.value[1])
	if (dob.value[3]==0){
		box[0][3] = parseInt(dob.value[4])
	}else{
		box[0][3] = parseInt(dob.value[3]+dob.value[4])
	}
	return true
	
}
function checkDuplicate(a,n){
	for(let i=0;i<n;i++){
		for(let j=0;j<4;j++){
			if (box[i][j]==a)
				return true
		}
	}
	return false
}

function checkSemiMagic(a0,b0,c0,d0,a1,b1,c1,d1,a2,b2,c2,d2,a3,b3,c3,d3,x){
    if (a0+b0+c0+d0==x && a1+b1+c1+d1==x && a2+b2+c2+d2==x && a3+b3+c3+d3==x && a0+a1+a2+a3==x && b0+b1+b2+b3==x && c0+c1+c2+c3==x && d0+d1+d2+d3==x)
        return true
    return false
}

function checkOrdinaryMagic(a0,b0,c0,d0,a1,b1,c1,d1,a2,b2,c2,d2,a3,b3,c3,d3,x){
    if (a0+b1+c2+d3==x && d0+c1+b2+a3==x)
        return true
    return false
}

function checkMPMS(a0,b0,c0,d0,a1,b1,c1,d1,a2,b2,c2,d2,a3,b3,c3,d3,x){
    if (a0+b0+a1+b1==x && b0+c0+b1+c1==x && c1+c0+d0+d1==x && a2+b2+a1+b1==x && c1+c2+b1+b2==x && c1+c2+d1+d2==x && a2+b2+a3+b3==x && c2+c3+d2+d3==x && b2+b3+c2+c3==x && a0+b0+a3+b3==x && b0+c0+b3+c3==x && c0+d0+c3+d3==x && a0+a1+d0+d1==x && a1+a2+d1+d2==x && a2+a3+d2+d3==x)
        return true
    return false
}

function checkPanMagic(a0,b0,c0,d0,a1,b1,c1,d1,a2,b2,c2,d2,a3,b3,c3,d3,x){
    if (c0+b1+a2+d3==x && d1+c2+b3+a0==x && b0+c1+d2+a3==x && a1+b2+c3+d0==x)
        return true
    return false
}

function checkCompleteMagic(a0,b0,c0,d0,a1,b1,c1,d1,a2,b2,c2,d2,a3,b3,c3,d3,x){
    if (a0+c0+a2+c2==x && b0+d0+b2+d2==x && a1+c1+a3+c3==x && b1+d1+b3+d3==x)
        return true
    return false
}

function reset(){
    box[1]=[0,0,0,0]
    box[2]=[0,0,0,0]
    box[3]=[0,0,0,0]
}
function createMagic(){
    let l=[],z = false
    x = box[0][0] + box[0][1] + box[0][2] + box[0][3]
    while (box[1][0]<x-(box[0][0]+box[0][1])){
        box[1][1]=x-(box[0][0]+box[0][1]+box[1][0])
        box[1][2]=x-(box[0][2]+box[1][1]+box[0][1])
        box[1][3]=x-(box[0][3]+box[1][2]+box[0][2])
        l.push(...[box[1][0],box[1][1],box[1][2],box[1][3]])
        if ( checkDuplicate(l[0],1) || checkDuplicate(l[1],1) || checkDuplicate(l[2],1) || checkDuplicate(l[3],1) || l.some(i => i < 0) || l.length > new Set(l).size){
            l.length = 0
        }else{  
            l.length = 0
            box[2][0]=0
            while (box[2][0]<x-(box[1][0]+box[1][1])){
                box[2][1]=x-(box[1][0]+box[1][1]+box[2][0])
                box[2][2]=x-(box[1][2]+box[2][1]+box[1][1])
                box[2][3]=x-(box[1][3]+box[2][2]+box[1][2])
                l.push(...[box[2][0],box[2][1],box[2][2],box[2][3]])
                if ( checkDuplicate(l[0],2) || checkDuplicate(l[1],2) || checkDuplicate(l[2],2) || checkDuplicate(l[3],2) || l.some(i => i < 0) || l.length > new Set(l).size){
                    l.length = 0
                }else{
                    l.length = 0
                    box[3][0]=x-(box[2][0]+box[1][0]+box[0][0])
                    box[3][1]=x-(box[2][1]+box[1][1]+box[0][1])
                    box[3][2]=x-(box[2][2]+box[1][2]+box[0][2])
                    box[3][3]=x-(box[2][3]+box[1][3]+box[0][3])
                    l.push(...[box[3][0],box[3][1],box[3][2],box[3][3]])
                    if ( checkSemiMagic(box[0][0],box[0][1],box[0][2],box[0][3],box[1][0],box[1][1],box[1][2],box[1][3],box[2][0],box[2][1],box[2][2],box[2][3],box[3][0],box[3][1],box[3][2],box[3][3],x) && !(checkDuplicate(box[3][0],3) || checkDuplicate(box[3][1],3) || checkDuplicate(box[3][2],3) || checkDuplicate(box[3][3],3)) && !l.some(i => i < 0) && l.length === new Set(l).size){
                        z=true
                        break	
                    }else{
                    	
                    }
                       	
				}
                box[2][0]+=1
			}
		}
        if (z==true)
            break
        else
            box[1][0]+=1
    }
}
function checkRemaining(){
    let checkSemiM=false;checkOrdinaryM=false;checkM=false;checkPanM=false;checkCompleteM=false
    if (checkSemiMagic(box[0][0],box[0][1],box[0][2],box[0][3],box[1][0],box[1][1],box[1][2],box[1][3],box[2][0],box[2][1],box[2][2],box[2][3],box[3][0],box[3][1],box[3][2],box[3][3],x)){
        console.log('The semi magic square is ...')
        checkSemiM=true
        while (!checkOrdinaryMagic(box[0][0],box[0][1],box[0][2],box[0][3],box[1][0],box[1][1],box[1][2],box[1][3],box[2][0],box[2][1],box[2][2],box[2][3],box[3][0],box[3][1],box[3][2],box[3][3],x)){
            box[1][0]+=1
            createMagic()
            if (box[1][0]>x-(box[0][0]+box[0][1])){
                checkOrdinaryM=false
                console.log('Ordinary magic square not found ...')
                break
            }
        }
        if (checkOrdinaryMagic(box[0][0],box[0][1],box[0][2],box[0][3],box[1][0],box[1][1],box[1][2],box[1][3],box[2][0],box[2][1],box[2][2],box[2][3],box[3][0],box[3][1],box[3][2],box[3][3],x)){
            checkOrdinaryM=true
            console.log('The Ordinary Magic square is ...')
       	}
    }
    else{
        console.log('Semi Magic Square not found ...')
    }
    if (checkPanMagic(box[0][0],box[0][1],box[0][2],box[0][3],box[1][0],box[1][1],box[1][2],box[1][3],box[2][0],box[2][1],box[2][2],box[2][3],box[3][0],box[3][1],box[3][2],box[3][3],x)){
        console.log('The Pan Magic Square is ...')
        checkPanM=true
    }else{
        console.log('Pan magic square not found ...')
    }
    if (checkCompleteMagic(box[0][0],box[0][1],box[0][2],box[0][3],box[1][0],box[1][1],box[1][2],box[1][3],box[2][0],box[2][1],box[2][2],box[2][3],box[3][0],box[3][1],box[3][2],box[3][3],x)){
        console.log('The complete Magic Square is ...')
        checkCompleteM=true
        printbox()
    }else{
        console.log('Complete Magic Square Not found ...')
    }if (checkMPMS(box[0][0],box[0][1],box[0][2],box[0][3],box[1][0],box[1][1],box[1][2],box[1][3],box[2][0],box[2][1],box[2][2],box[2][3],box[3][0],box[3][1],box[3][2],box[3][3],x)){
        console.log('The Most Perfect Magic Square is ...')
        checkM=true
    }else{
        console.log('Most perfect Magic Square Not found ...')
    }
    if (checkSemiM == true && checkPanM == true && checkCompleteM == true && checkOrdinaryM == true && checkM == true){
        console.log('Your Birthday Satisfies All Magic Square conditions ...\nThe Final Most Perfect Magic Square is :: ')
        printbox()
    }
}
