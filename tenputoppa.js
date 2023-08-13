const tenpubon = [3,2,4,6,9,4,6,12,16];

const tenpubon1 = [3,0,0,0,0,0,0,0,0];
const tenpubon2 = [0,2,4,6,9,0,0,0,0];
const tenpubon3 = [0,0,0,0,0,4,6,12,16];

const zako = [6,3,4,6,9,4,6,9,12];

const zako1 = [6,0,0,0,0,0,0,0,0];
const zako2 = [0,3,4,6,9,0,0,0,0];
const zako3 = [0,0,0,0,0,4,6,9,12];

const shubosu = [0,0,0,0,0,1,1,2,2];

const oukan = [0,0,0,0,0,0,0,0,1];

let btn1 = document.getElementById("btnSubmitnum1");


btn1.addEventListener('click', function() {

    let el1 = document.getElementById("txtZipCode1").value;
    let el2 = document.getElementById("txtZipCode2").value;
    let list_array1 = el1.split(".").map( str => parseInt(str, 10) );
    let list_array2 = el2.split(".").map( str => parseInt(str, 10) );

    if(!list_array1||!list_array2) {
    document.getElementById("result1").insertAdjacentHTML("beforeend","<div>入力しなおしてください</div>");
    }
    else{
        document.getElementById("result1").innerHTML = "";
        cal1(list_array1, list_array2);}
});

function cal1(list1, list2) {
    let t1result1 = 0;
    let t2result1 = 0;
    let t3result1 = 0;
    let z1result1 = 0;
    let z2result1 = 0;
    let z3result1 = 0;
    let sresult1 = 0;
    let oresult1 = 0;
    for(let a=0; a<3; a++){
        for(let b=list1[a]-1; b<list2[a]-1; b++){
            t1result1 += tenpubon1[b];
            t2result1 += tenpubon2[b];
            t3result1 += tenpubon3[b];
            z1result1 += zako1[b];
            z2result1 += zako2[b];
            z3result1 += zako3[b];
            sresult1  += shubosu[b];
            oresult1  += oukan[b];
            console.log(shubosu[b]);
        }
    }
    let result1 = [t1result1,t2result1,t3result1,z1result1,z2result1,z3result1,sresult1,oresult1];
    document.getElementById("result1").insertAdjacentHTML("beforeend","<div>★★本:"+ result1[0]+"  ★★★本:"+ result1[1] + "  ★★★★本:" + result1[2] + "</div>" + "<p><div>★★敵素材:"+ result1[3]+"  ★★★敵素材:"+ result1[4] + "  ★★★★敵素材:" + result1[5] + "</div></p>" +  "<p><div>週ボス素材:"+ result1[6] +"  知恵の冠:"+ result1[7] + "</div></p>");
}

const hon = [7,29,29,43,60,81,172];

const tokusan = [0,3,10,20,30,45,60];

const zakos = [0,3,15,12,18,12,24];

const zakos1 = [0,3,15,0,0,0,0,0];
const zakos2 = [0,0,0,12,18,0,0,];
const zakos3 = [0,0,0,0,0,12,24];

const bosu = [0,0,2,4,8,12,20];

const houseki = [0,1,3,6,3,6,6];

const houseki1 = [0,1,0,0,0,0,0];
const houseki2 = [0,0,3,6,0,0,0];
const houseki3 = [0,0,0,0,3,6,0];
const houseki4 = [0,0,0,0,0,0,6];

let btn2 = document.getElementById("btnSubmitnum2");

btn2.addEventListener('click', function() {

    let el1 = document.getElementById("txtZipCode3").value;
    let el2 = document.getElementById("txtZipCode4").value;
    let list_array = [parseInt(el1),parseInt(el2)];
    if((parseInt(el1)!=20&&parseInt(el2)!=20&&parseInt(el1)!=40&&parseInt(el2)!=40&&parseInt(el1)!=50&&parseInt(el2)!=50&&parseInt(el1)!=60&&parseInt(el2)!=60&&parseInt(el1)!=70&&parseInt(el2)!=70&&parseInt(el1)!=80&&parseInt(el2)!=80&&parseInt(el1)!=90&&parseInt(el2)!=90&&parseInt(el1)!=1&&parseInt(el2)!=1)||parseInt(el1)>parseInt(el2)){
        document.getElementById("result2").insertAdjacentHTML("beforeend","<div>入力しなおしてください</div>");
    }
    else{
        document.getElementById("result2").innerHTML = "";
        cal2(list_array);
    }
});

function cal2(list) {
    let dict = {1:0,20:1,40:2,50:3,60:4,70:5,80:6,90:7};
    let newdict = [];
    for(let d=dict[list[0]]; d<dict[list[1]]; d++){
        newdict.push(d);
    }
    console.log(newdict);
    let hresult2 = 0;
    let tresult2 = 0;
    let zs1result2 = 0;
    let zs2result2 = 0;
    let zs3result2 = 0;
    let bresult2 = 0;
    let ho1result2 = 0;
    let ho2result2 = 0;
    let ho3result2 = 0;
    let ho4result2 = 0;

        for(let c=newdict[0]; c<newdict[newdict.length-1]+1; c++){
            hresult2 += hon[c];
            tresult2 += tokusan[c];
            zs1result2 += zakos1[c];
            zs2result2 += zakos2[c];
            zs3result2 += zakos3[c];
            bresult2 += bosu[c];
            ho1result2 += houseki1[c];
            ho2result2 += houseki2[c];
            ho3result2 += houseki3[c];
            ho4result2 += houseki4[c];
            console.log(bosu[c]);
        }

    let result2 = [hresult2,tresult2,zs1result2,zs2result2,zs3result2,bresult2,ho1result2,ho2result2,ho3result2,ho4result2];
    document.getElementById("result2").insertAdjacentHTML("beforeend","<div>大英雄:"+ result2[0]+" 特産品:"+ result2[1] + "</div>" + "<p><div>★★敵素材:"+ result2[2]+" ★★★敵素材:"+ result2[3] + " ★★★★敵素材:" + result2[4] + " ボス素材:"+ result2[5] + "</div></p>" + "<p><div>★★宝石:" + result2[6] + " ★★★宝石:" + result2[7] + " ★★★★宝石:" + result2[8] +" ★★★★★宝石:" + result2[9] + "</div></p>");
}