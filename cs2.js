const result = document.getElementById("output");
const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let btn_text = e.target.innerText;

        if (btn_text === "x") {
            btn_text = "*";
        } else if (btn_text === "÷") {
            btn_text = "/";
        } else if (btn_text === "√") {
             sqrt(); 
            return; 
        } else if (btn_text === "=") {
            calculate();
            return; 
        } else if (btn_text === "C") {
            allClear();
            return; 
        } else if (btn_text === "DEL") {
            delLastChar();
            return; 
        } else if (btn_text === "^") {
            power();
            return; 
        }
        else if (btn_text === "%") {
            percent();
            return; 
        }
        result.value += btn_text;
    });
});

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        alert("Invalid input for evaluation");
    }
}

function allClear() {
    result.value = "";
}

 function delLastChar() {
    if ( result.value="infinity") {
        delLastChar=allClear
    } else {
       result.value = result.value.slice(0, -1); 
    }
    
}

function power() {
    try {
        result.value = Math.pow(  result.value , 2);
    } catch (error) {
        alert("Invalid input for power");
    }
}
function percent() {
    try {
        result.value = (result.value) / 100;
    } catch (error) {
        alert("Invalid input for percentage");
    }
}
function  sqrt(){
    try{
    result.value = Math.sqrt (result.value) ;
    } catch (error){
        alert("Invaild input for root");
    }
}
function sin() {
    try {
        result.value = Math.sin (result.value) ;
    } catch (error) {
        alert("Invalid input for sin");
    }
}

function cos() {
    try {
        result.value = Math.cos (result.value) ;
    } catch (error) {
        alert("Invalid input for cos");
    }
}

function tan() {
    try {
        result.value = Math.tan(result.value);
    } catch (error) {
        alert("Invalid input for tan");
    }
}

function log() {
    try {
        result.value = Math.log (result.value) ;
    } catch (error) {
        alert("Invalid input for log");
    }
}

function pi() {
    result.value = Math.PI;
}

function exp() {
    try {
        result.value = Math.exp (result.value) ;
    } catch (error) {
        alert("Invalid input for exp");
    }
}

 function facto() {
    let num = Number(result.value); // Convert to number
    if (Number.isInteger(num) && num >= 0) {
        let f = 1;
        for (let i = 1; i <= num; i++) {
            f = f * i;
        }
        result.value = f;
    } else {
        alert("Invalid input for factorial");
    }
}

