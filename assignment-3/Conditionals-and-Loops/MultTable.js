function GenerateTable() {
    // Get the values
    const input = document.querySelector("#number-input");
    const number = input.value;
    const resultElement = document.querySelector(".result");
    
    // Clear previous content
    resultElement.innerHTML = "";
    resultElement.style.color = "black";
    
    // Basic validation
    if (isNaN(number) || number == "") {
        resultElement.textContent = "Please enter a valid number!";
        resultElement.style.color = "red";
        return;
    }

    // Create the title
    const title = document.createElement("div");
    title.textContent = `Multiplication table for ${number}`;
    title.style.fontWeight = "bold";
    title.style.marginBottom = "10px";
    resultElement.appendChild(title);

    // Use a loop to create the multiplication lines
    for (let i = 1; i <= 10; i++) {
        const line = document.createElement("div");
        line.textContent = `${number} × ${i} = ${number * i}`;
        line.style.margin = "4px 0";
        resultElement.appendChild(line);
    }

}