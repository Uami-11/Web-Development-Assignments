const colorPicker = document.querySelector("#color-picker");
const area = document.querySelector(".change");

colorPicker.addEventListener("input", function()
{
    const color = this.value;
    area.style.backgroundColor = color;
})

function resetColor()
{
    colorPicker.value = "#000000";
    area.style.backgroundColor = "#000000";
}