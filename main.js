// Get elements from the DOM
const adviceId = document.querySelector("#advice-id");
const adviceString = document.querySelector("#advice-string");
const generateAdviceBtn = document.querySelector("#generate-advice-btn");

const url = "https://api.adviceslip.com/advice";
console.log(adviceId, adviceString, generateAdviceBtn);


generateAdviceBtn.addEventListener("click", () => {
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			adviceString.innerHTML = data.slip.advice;
			adviceId.innerHTML = data.slip.id
			console.log(data.slip.id, data.slip.advice);
		});
});

window.onload = generateAdviceBtn.click();
