const list = document.querySelector(".fetch-list");
const title = document.querySelector("#title");

async function getListData()
{
    try {
        // loading element
        const loadingLi = document.createElement("li");
        loadingLi.textContent = "Loading...";
        list.appendChild(loadingLi);


        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await response.json();

        // after data has been fetched get rid of the loading element
        loadingLi.remove();

        data.forEach(element => {
            const li = document.createElement("li");
            const commentName = document.createElement("p");
            const email = document.createElement("p");
            const commentBody = document.createElement("p");

            commentName.textContent = element.name;
            email.textContent = element.email;
            commentBody.textContent = element.body;

            li.appendChild(commentName)
            li.appendChild(email)
            li.appendChild(commentBody)

            list.appendChild(li);
        });
    } catch (err) {
        // change the title if data failed to load
        title.textContent = "Failed to load data";
        console.error(err);
    }

}


getListData();