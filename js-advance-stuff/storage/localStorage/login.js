document.addEventListener("DOMContentLoaded", () => {
	const username = getToken("username");
	const isLoggedIn = getToken("isLoggedIn");
	if (
		username !== null &&
		username !== "" &&
		isLoggedIn !== "" &&
		isLoggedIn !== null
	) {
		window.location.href = "./localStorage-page.html";
	}
});

const getToken = (key) => {
	return localStorage.getItem(key);
};
