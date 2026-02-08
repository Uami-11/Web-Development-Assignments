function getUser(id)
{
    return new Promise((resolve) =>
    {
        setTimeout(()=>
        {
            const user = {id: id, name: "Erika"};
            console.log("User fetched");
            resolve(user);
        }, 1000);
    })
}

function getPost()
{
    return new Promise((resolve)=>
    {
        setTimeout(()=>
        {
            const posts = ["post1", "post2"];
            console.log("Posts fetched");
            resolve(posts);
        }, 1000);
    })
}

function getComment()
{
    return new Promise((resolve)=>
    {
        setTimeout(()=>
        {
            const comments = ["Nice", "Good"];
            console.log("Comments fetched");
            resolve(comments);
        }, 1000);
    })
}

const userDetails = getUser().then((res)=>
{
    console.log(res);
    return getPost().then((res)=>{
        console.log(res);
        return getComment().then((res)=>
        {
            console.log(res);
        })
    })
})