(async () => {
	let userData = document.getElementById("userData");
	// chaining promises
	let data = await fetch("https://randomuser.me/api")
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			let name = data.results[0].name;
			userData.innerHTML = `Welcome, ${name.title} ${name.first} ${name.last}`;
		});
})();
