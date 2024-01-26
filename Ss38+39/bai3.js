let img = document.getElementById("image");
let percent = document.getElementById("%");
let i = 0;

for(let i=0;i<=1;i++){
    img.style.opacity += i;
    img.style.transition = "all 2s";
}

function rise(){
    i++;
    document.getElementById("%").innerHTML = `${i}%`
    if(i===100){
        clearInterval(stop);
    }
}

let stop = setInterval(rise , 9);