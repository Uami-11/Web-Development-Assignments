function getUser(id, callback)
{
    setTimeout(()=>
    {
        const user = {id: id, name: "Erika"};
        console.log("User fetched");
        callback(user);
    }, 1000);
}

function getPost(callback)
{
    setTimeout(()=>
    {
        const posts = ["post1", "post2"];
        console.log("Posts fetched");
        callback(posts);
    }, 1000);
}

function getComment(callback)
{
    setTimeout(()=>
    {
        const comments = ["Nice", "Good"];
        console.log("Comments fetched");
        callback(comments);
    }, 1000);
}

// Callback hell refers to nested callbacks and when these callbacks get to a tree like structure
// it gets really confusing to look at, I was also confused while trying to connect these callbacks...
getUser(7, (user)=>
{
    getPost((posts)=>
    {
        getComment((comments)=>
        {
            console.log(user);
            console.log(posts);
            console.log(comments);
        })
    })
})