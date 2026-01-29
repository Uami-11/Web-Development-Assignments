const colorPicker = document.querySelector("#color-picker");
const area = document.querySelector(".change");
const title = document.querySelector("#doc-title");
ogTitle = title.textContent;

colorPicker.addEventListener("input", function()
{
    const color = this.value;
    area.style.backgroundColor = color;
    if (color == "#ffe4c4")
    {
        title.textContent = "That's the same color as the background!!";
    }
    else 
    {
        title.textContent = ogTitle;
    }
})

function resetColor()
{
    colorPicker.value = "#000000";
    area.style.backgroundColor = "#000000";
}

colorPicker.addEventListener("keydown", function(event)
{
    if (event.key == "Escape") colorPicker.blur();
})

document.addEventListener("keydown", function(event)
{
    if (event.key == "Enter") colorPicker.focus();
})