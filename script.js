function showToOutput(value) {
    document.getElementById("output").value += value;
}

function calculate() {
    let expression = document.getElementById("output").value;

    try {
        let result = eval(expression);
        
        if (isFinite(result)) {
            document.getElementById("output").value = result;
        } else {
            document.getElementById("output").value = "Error";
        }
    } catch (error) {
        document.getElementById("output").value = "Error";
    }
}
