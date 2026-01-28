function GenerateTriangle() {
    const input = document.getElementById("number-input");
    const height = input.value;
    
    const resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = "";
    resultDiv.style.color = "black";
    
    if (isNaN(height)) {
        resultDiv.textContent = "Please enter a positive number!";
        resultDiv.style.color = "red";
        return;
    }
    
    let output = `<h3>Right-angled triangle (height ${height}):</h3>`;
    
    for (let i = 1; i <= height; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        output += row + "<br>";
    }
    
    resultDiv.innerHTML = output;
    resultDiv.style.fontFamily = "monospace";
    resultDiv.style.fontSize = "1.3rem";
    resultDiv.style.lineHeight = "1.2";
    resultDiv.style.whiteSpace = "pre";
}