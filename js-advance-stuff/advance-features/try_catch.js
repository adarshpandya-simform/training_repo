(async () => {
	let userData = document.getElementById("user-data");
	let isError = false;
	try {
		// the code which can probably generate error
		// should be written inside try block

		// passing wrong url
		await fetch("htt://abcd.userdata.com");
	} catch (error) {
		isError = true;
		// catching error and handling with
		// catch block
		console.log(error);
	} finally {
		// finally block executes no matter error is being thrown or not
		// the code which should run regardless of error should be written here
		if (isError) {
			userData.innerHTML = "something went wrong";
		} else {
			userData.innerHTML = "dummy user data...";
		}
	}
})();

// throwing error manually
(() => {
	setTimeout(() => {
		try {
			Array(900000)
				.fill("hi")
				.map((elem, index) => {
					if (index === 899990) {
						// manually throwing error
						throw "faulty data found";
						console.log("this statement won't be executed");
					}
				});
		} catch (err) {
			alert(err);
			console.error(err);
		}
	}, 3000);
})();
