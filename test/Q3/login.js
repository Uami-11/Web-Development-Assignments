const title = document.querySelector("#title");
const logButton = document.querySelector("#login");

logButton.addEventListener("click", (event)=>
{
    // Preventing the use of the log in button while its in process
    if (title.textContent != "Logging In...") 
    {
        login();
    }
})

function finishLogin()
{
    // simulating login for 2 seconds
    return new Promise((resolve) =>
    {
        setTimeout(() => {
            resolve("Welcome back!");
        }, 2000);
    })
}

function login()
{

    title.textContent = "Logging In...";

    finishLogin().then((res)=>
    {
        title.textContent = res;
        logButton.remove();
    })
        
}

