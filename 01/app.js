const formEl = document.querySelector("form");
const ul = document.querySelector("ul");


formEl.addEventListener("submit", function (e) {
	e.preventDefault();
    let firstName = e.target.firstName.value;
    let lastName = e.target.lastName.value;

	const li = document.createElement("li");
    li.classList.add("user-list__person");
    ul.appendChild(li);
	li.innerText = `${firstName} ${lastName}`
    
});
