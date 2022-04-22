async function login(emailAddress, password) {
    
    console.log(`logging on with ${emailAddress} and ${password}`);
    const response = await fetch('http://10.0.0.138:8080/api/users', {
        method: 'POST',
        body: JSON.stringify({
            email: emailAddress,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log('raw response', response);

    if (response.ok) {
        const responseJson = await response.json();
        console.log(`Login Response: `, responseJson);
        return responseJson;
    } else {
        throw 'error during login'
    } 

}

async function registerNewUser(emailAddress, password) {

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
        const responseJson = await response.json();
        console.log(`Login Response: `, responseJson);
        return responseJson;
    } else {
        throw 'error during login'
    } 

}

export { login, registerNewUser }