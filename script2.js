let create = document.querySelector(".create");
let join = document.querySelector(".join");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

create.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

join.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});
