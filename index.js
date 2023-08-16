document.getElementById("submit").onclick=function(){
let temp;
if(document.getElementById("c").checked){
temp =document.getElementById("text").value;
temp =Number(temp);
temp =tocel(temp);
document.getElementById("ans").innerHTML =temp + "°C";
}else if(document.getElementById("f").checked){
    temp =document.getElementById("text").value;
    temp =Number(temp);
    temp =tofar(temp);
    document.getElementById("ans").innerHTML =temp + "°F";
}else{
    document.getElementById("ans").innerHTML = "Select a unit";
}
}


function tocel(temp){
return (temp- 32)*(5/9);
}

function tofar(temp){
    return temp * 9/5 + 32;  
}