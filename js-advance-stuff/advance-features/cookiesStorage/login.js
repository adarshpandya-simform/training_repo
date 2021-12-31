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
		window.location.href = "./cookie-page.html";
	}
});

// getting value from cookies
const getToken = (key) => {
	let obj = {};
	document.cookie.split("; ").map((cookie) => {
		let creds = cookie.split("=");
		let key = creds[0];
		let value = creds[1];
		obj[key] = value;
	});
	console.log(obj);
	return obj[key];
};
