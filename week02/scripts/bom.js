let inputElement = document.getElementById("favchap");
let buttonElement = document.querySelector("button");
let listElement = document.querySelector("#list");

buttonElement.addEventListener("click", function () {
    if (inputElement.value.length > 0) {
        let liElement = document.createElement("li");
        let deleteButtonElement = document.createElement("button");

        deleteButtonElement.addEventListener("click", function () {
            liElement.remove();
        })

        liElement.textContent = inputElement.value;

        deleteButtonElement.textContent = "❌";

        liElement.appendChild(deleteButtonElement);

        listElement.append(liElement);

        inputElement.value = "";
    }

    inputElement.focus();
});