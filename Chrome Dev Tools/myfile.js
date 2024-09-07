function onClickEvent(){
    let mycount = 1;
    alert("You completed " +mycount+' exercise')
    mycount=nestedcall(mycount);
    alert("You completed " +mycount+' exercise')
}

function nestedcall(count) {
    console.log("reached Nestedcall");
    return count+6
}