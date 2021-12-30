const loginButton = document.getElementById("login");
const logoutButton = document.getElementById("logout");
const username = document.getElementById("username");
const password = document.getElementById("password");

// localStorage works with multiple tabs, and only gets removed once we remove it. unlike session where the storage gets erased when you close the tab

loginButton &&
	loginButton.addEventListener("click", () => {
		if (username.value !== "" && password.value !== "") {
			if (username.value === "simform" && password.value === "123456") {
				setToken("username", username.value);
				setToken("isLoggedIn", true);
				window.location.href = "./localStorage-page.html";
			} else {
				alert("wrong username or password");
			}
		} else {
			alert("please fill proper details");
		}
	});

logoutButton &&
	logoutButton.addEventListener("click", () => {
		setToken("username", "");
		setToken("isLoggedIn", "");
		window.location.href = ".	/localStorage-login.html";
	});

const setToken = (key, value) => {
	localStorage.setItem(key, value);
};
