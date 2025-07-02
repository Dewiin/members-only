const membershipButton = document.querySelector(".become-member");

membershipButton.addEventListener("click", async () => {
	const membershipPassword = prompt(
		"What word is spelled incorrectly in every dictionary?",
	);

	const res = await fetch("/become-member", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ membershipPassword }),
	});

	if (res.ok) {
		location.reload();
	} else {
		alert("Incorrect password!");
	}
});
