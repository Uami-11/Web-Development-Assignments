const input = document.querySelector("#number-input");

function GenerateTable() {
    const number = input.value;
    const resultElement = document.querySelector(".result");
    
    resultElement.innerHTML = "";
    resultElement.style.color = "black";
    
    if (isNaN(number) || number == "") {
        resultElement.textContent = "Please enter a valid number!";
        resultElement.style.color = "red";
        return;
    }

    const title = document.createElement("div");
    title.textContent = `Multiplication table for ${number}`;
    title.style.fontWeight = "bold";
    title.style.marginBottom = "10px";
    resultElement.appendChild(title);

    for (let i = 1; i <= 10; i++) {
        const line = document.createElement("div");
        line.textContent = `${number} × ${i} = ${number * i}`;
        line.style.margin = "4px 0";
        resultElement.appendChild(line);
    }

}

input.addEventListener("keydown", function(event){ 
    if (event.key == "Enter") GenerateTable(); 
    if (event.key == "Escape") input.blur(); }
)

document.addEventListener("keydown", function(event){ 
    if (event.key == "Enter") input.focus(); 
}
)