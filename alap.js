/*alap.js pogram helye*/ 
let sz="";
const sor=8;
const oszlop=23 ;
// ez a gombok létrehozása
for (let i = 0; i < sor ;i++) {
    for (let j = 0; j < oszlop; j++) {
        sz+=`
        <button id="${i}_${j}" onclick="kat(this.id)" style="Width:50px;Height:50px;background-color:#e5e5e5   ;"></button>
        `;
    }
    sz+="<br>"
}
document.getElementById("tabla").innerHTML=sz;
let tomb=[];
for (let i = 0; i < sor; i++) {
    let egysor=[]
    for (let j = 0; j < oszlop; j++) {
        egysor.push(0);
        
    }
    tomb.push(egysor);
}

//console.log(tomb);
function kat(id){
    //alert(id);
    let kecske=id.split("_");
    console.log(kecske[0]);
    console.log(kecske[1]);
    let s=parseInt(kecske[0]);
    let o=parseInt(kecske[1]);
    szinez(s,o);
    szinez(s,o+1);
    szinez(s,o-1);
    szinez(s+1,o);
    szinez(s-1,o);
    if (tomb[s][o]==0) {
        document.getElementById(s+"_"+o).style.backgroundColor="red";
        tomb[s][o]=1;
    }
    
    else{
        document.getElementById(s+"_"+o).style.backgroundColor="#e5e5e5";
        tomb[s][o]=0;
    }
}
function szinez(s,o){
    if (s>=0 && s<sor && o>=0 && o<oszlop) {
        if (tomb[s][o]==0) {
            document.getElementById(s+"_"+o).style.backgroundColor="red";
            tomb[s][o]=1;
        }
        else{
            document.getElementById(s+"_"+o).style.backgroundColor="#e5e5e5";
            tomb[s][o]=0;
        }
    }
}