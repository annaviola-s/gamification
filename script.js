document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const input = document.querySelector("input[name='name']");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form submission for now
        
        if (input.value.trim() !== "") {
            alert(`Hello, ${input.value}!`);
        } else {
            alert("You must have a name!");
        }
    });
});
