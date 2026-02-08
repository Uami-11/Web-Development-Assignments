// Callback function takes another function as a parameter
function getUser(id, callback) 
{
    console.log("Getting user...");
    setTimeout(()=>
    {
        const user = {id: id, name: "Erika"};
        // Here I call the parameter as a function
        callback(user);
    }, 2000);
}

// Created another function that can be passed as a parameter
function displayUser(user)
{
    console.log(`${user.id}. ${user.name}`);
}

// calling the callback function with the other function
getUser(6, displayUser);