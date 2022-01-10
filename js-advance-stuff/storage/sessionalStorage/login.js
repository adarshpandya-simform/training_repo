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
		window.location.href = "./sessionalStorage-page.html";
	}
});

// getting value from sessional storage
const getToken = (key) => {
	return sessionStorage.getItem(key);
};
