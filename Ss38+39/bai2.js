let icon = document.getElementById("icon");
let input = document.getElementById("searchBar");
let i=1;

icon.onclick = function(){
    i++;
    if(i%2===0){
        input.setAttribute( 'type', 'search' );
    }else{
        input.setAttribute( 'type', 'hidden' );
    }
}