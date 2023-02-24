const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()

    const {
        elements: {email, password}, 
    } = event.currentTarget

    if (email.value.trim() === "" || password.value.trim() === "") {
        return alert('Fill the empty fields!')
    }

    const userInfo = {
        login: email.value,
        password: password.value
    }

    console.log(userInfo)
    event.currentTarget.reset();
}
