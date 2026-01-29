const generate = document.getElementById("gen-btn");

function FizzBuzz() {
    const resultDiv = document.querySelector("div.result");
    
    resultDiv.innerHTML = "";
    
    const title = document.createElement("h3");
    title.textContent = "FizzBuzz from 1 to 20:";
    resultDiv.appendChild(title);
    
    for (let i = 1; i <= 20; i++) {
        let output = "";
        
        if (i % 3 === 0 && i % 5 === 0) {
            output = "FizzBuzz";
        } else if (i % 3 === 0) {
            output = "Fizz";
        } else if (i % 5 === 0) {
            output = "Buzz";
        } else {
            output = i.toString();
        }
        
        const line = document.createElement("div");
        line.textContent = `${i} → ${output}`;
        line.style.margin = "4px 0";
        
        resultDiv.appendChild(line);
    }
}


document.addEventListener("keydown", function(event)
{
    if (event.key == "Enter") generate.click();
})