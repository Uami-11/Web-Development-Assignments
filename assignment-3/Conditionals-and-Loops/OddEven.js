const input = document.querySelector("#number-input");

function CheckOddEveness() {
    const num = input.value;
    const result = document.querySelector(".result");
    const image = document.querySelector("#result-image")
    const descriptor = document.querySelector("#result-image-description")

    if (num === "") {
        result.textContent = "Please enter a number";
        return;
    }

    if (num % 2 === 0) {
        result.textContent = "It's Even";
        image.setAttribute("src", "https://balatrowiki.org/images/Even_Steven.png?2595d");
        descriptor.textContent = "*Even Steven from Balatro";
    } else {
        result.textContent = "It's Odd";
        image.setAttribute("src", "https://preview.redd.it/are-odd-todd-and-even-steven-brothers-v0-tm769yzgxo1e1.jpg?width=194&format=pjpg&auto=webp&s=ffe7cf51a0a03e49abdb3c5564ddad13b0f4be4d");
        image.setAttribute("width", "142");
        descriptor.textContent = "*Odd Todd from Balatro"
    }
}

input.addEventListener("keydown", function(event){ 
    if (event.key == "Enter") CheckOddEveness(); 
    if (event.key == "Escape") input.blur(); }
)

document.addEventListener("keydown", function(event){ 
    if (event.key == "Enter") input.focus(); 
}
)