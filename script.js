
function clearDisplay() {
    document.getElementById("display").value = "0";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
    // if(display.value === "0") {
    //     document.getElementById("display").value = value;
    // }else if(display.value === "0" && value === "0") {
    //     document.getElementById("display").value = "0";
    // }
//     console.log(value);
// let data= document.getElementById("display");
// data.value += value;
}


function calcResult() {
    let display = document.getElementById("display");
    try {
        let result = eval(display.value);
        // console.log(result);
            document.getElementById("display").value = result;
        
    } catch (error) {
        alert("Invalid expression");
        clearDisplay();
        document.getElementById("display").value = alert("Invalid expression");
        return;
    }
    if (result === Infinity) {
        alert("Division by zero is not allowed");
        clearDisplay();
        document.getElementById("display").value = alert("Division by zero is not allowed");
        return;
    }

    document.getElementById("display").value = result;
    // console.log(result);
}

