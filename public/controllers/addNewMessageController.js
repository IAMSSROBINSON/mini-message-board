const button = document.querySelector(".addNewMessage-button");
button.addEventListener("click", (e) => {
    console.log("Go to form route /new");
    console.log("Go to form route /new:", window.location);
    window.location.assign('/new');
})