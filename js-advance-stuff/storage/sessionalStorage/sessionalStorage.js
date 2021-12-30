const loginButton = document.getElementById("login");
const logoutButton = document.getElementById("logout");
const username = document.getElementById("username");
const password = document.getElementById("password");

// sessionalStorage stores values like localStorage but
// works only for partcular session
// i.e won't work with multiple tabs

// on login button click
loginButton &&
	loginButton.addEventListener("click", () => {
		if (username.value !== "" && password.value !== "") {
			if (username.value === "simform" && password.value === "123456") {
				setToken("username", username.value);
				setToken("isLoggedIn", true);
				window.location.href = "./sessionalStorage-page.html";
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
		window.location.href = ".	/sessionalStorage-login.html";
	});

// function to set values in sessionalStorage
const setToken = (key, value) => {
	sessionStorage.setItem(key, value);
};
