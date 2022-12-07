jQuery(function() {
	$('#login-btn').on('click', {event: event}, login);
});

const login = async (event) => {
    event.preventDefault();
	let user = $('#username').val();
	let pass = $('#password').val();

	if (user.trim() === '' || pass.trim() === '') {
		return;
	}

	await fetch('/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
                'username': user,
                'password': pass
            }),
		})
		.then((response) => response.json())
        .then((response) => {
            if(response.status === "authenticated") {
                window.location.href = "/";
            }
        })
		.catch((error) => {
			console.log(error);
		});
}
