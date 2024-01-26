let step = document.getElementsByClassName("step");

let line = document.getElementsByClassName("line");

let prev = document.getElementById("prev");
let next = document.getElementById("next");

let i = 0;

next.onclick = function(){
    if(i<=3){
        prev.style.backgroundColor = "#2987d1";
        line[i].style.backgroundColor = "#2987d1";
        i++;
        step[i].style.borderColor = "#2987d1";
        if(i===3){
            next.style.backgroundColor = "#dcdcdc";
        }
    }
}

prev.onclick = function(){
    if(i>0){
        next.style.backgroundColor = "#2987d1";
        step[i].style.borderColor = "#dcdcdc";
        i--;
        line[i].style.backgroundColor = "#dcdcdc";
        if(i===0){
            prev.style.backgroundColor = "#dcdcdc";
        }
    }
}