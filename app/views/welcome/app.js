function disminuir() {
    rm = parseInt(document.getElementById("numero").innerHTML);
    if (rm < 20){
         rm--;
         
        /* console.log(rm);*/
         document.getElementById("numero").innerHTML=rm;
            }
}