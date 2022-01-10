// event happend on dom content load
document.addEventListener("DOMContentLoaded", () => {
	const username = getToken("username");
	const isLoggedIn = getToken("isLoggedIn");
	// validate the values
	if (
		username !== null &&
		username !== "" &&
		isLoggedIn !== "" &&
		isLoggedIn !== null
	) {
		// redirect
		window.location.href = "./localStorage-page.html";
	}
});

// getting value from local storage
const getToken = (key) => {
	return localStorage.getItem(key);
};
