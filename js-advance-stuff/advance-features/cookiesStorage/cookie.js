const loginButton = document.getElementById("login");
const logoutButton = document.getElementById("logout");
const username = document.getElementById("username");
const password = document.getElementById("password");

/**
 * Cookies are usually set by a web-server using the response Set-Cookie HTTP-header. Then, the browser automatically adds them to (almost) every request to the same domain using the Cookie HTTP-header.
 */

// on login button click
loginButton &&
	loginButton.addEventListener("click", () => {
		if (username.value !== "" && password.value !== "") {
			if (username.value === "simform" && password.value === "123456") {
				setToken("username", username.value);
				setToken("isLoggedIn", true);
				window.location.href = "./cookie-page.html";
			} else {
				alert("wrong username or password");
			}
		} else {
			alert("please fill proper details");
		}
	});

// on logout button click
logoutButton &&
	logoutButton.addEventListener("click", () => {
		setToken("username", "");
		setToken("isLoggedIn", "");
		window.location.href = ".	/cookie-login.html";
	});

// function to set values in cookies
const setToken = (key, value) => {
	let cookie = `${key}=${value};secure`;
	document.cookie = cookie;
};
