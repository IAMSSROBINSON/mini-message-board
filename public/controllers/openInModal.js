const cardsContainer = document.querySelector(".cards-container");
console.log("cardsContainer: ", cardsContainer);

cardsContainer.addEventListener('click', (e) => {

    if (Array.from(e.target.classList).includes("openInModalIcon")) {
        console.log("openInModal button clicked");

        const id = getId(e);
        if (id) {
            window.location.assign(`/user/${id}`);
        }
    }
    else if (Array.from(e.target.classList).includes("deleteMessageIcon")) {
        console.log("deleteMessageIcon clicked");

        const id = getId(e);
        if (id) {
             fetch(`/message/${id}`, {
                method: "DELETE",
        })
        .then((response) => {
           if (!response.ok) {
            throw new Error("Error fetching data!");
           }
           return response.json();
        })
        .then((data) => {
            console.log("data: ", data);
            window.location.assign('/');
        })
        .catch((err) => {
            alert("Could not delete message! Please try again.");
            console.log(err);
        })
        }

    }

})


function getId (e) {

    let id = '';
    let parent = '';
    let count = 0;
    let found = '';

    parent = e.target?.parentElement;

    while (!id && count < 4) {
        id = parent?.id;
        
        if (id) {
            found = parent;
           return id;
        }

        parent = parent?.parentElement;
        count++;
    }
    
    return id || null;

}