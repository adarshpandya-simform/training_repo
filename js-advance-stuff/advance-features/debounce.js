let fired = document.querySelector("#fired");
let debouncefired = document.querySelector("#debounce");
let search = document.querySelector("#search");
let result = document.querySelector("#result");

let count = 0;
let debCount = 0;
let timerId = 0;

/**
 * In the debouncing technique, no matter how many times the user fires the event, the attached function will be executed only after the specified time once the user stops firing the event.
 */

search.addEventListener("input", (e) => {
	result.innerHTML = e.target.value;
	// heavy api call here
	debounceFunction(200, apiCall);
	count += 1;
	fired.innerHTML = count;
});

const apiCall = () => {
	debCount += 1;
	debouncefired.innerHTML = debCount;
};

const debounceFunction = (time) => {
	clearInterval(timerId);
	timerId = setTimeout(apiCall, time);
};
