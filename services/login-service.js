async function login(emailAddress, password) {
    
    console.log(`logging on with ${emailAddress} and ${password}`);
    const response = await fetch('http://localhost:8080/api/users', {
        method: 'POST',
        body: JSON.stringify({
            email: emailAddress,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw 'error during login'
    } 

}

export { login }