const display = document.getElementById("display");

function addToDisplay(number){
    if (display.value=="Error"){
        display.value="";
    }
    display.value += number;
}

function clearDisplay(){
    display.value="";
}

function getResult(){
    try{
        display.value = eval(display.value);
    }catch (error) {
        display.value = "Error";  
    }
}