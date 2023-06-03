const Swal = require('sweetalert2')
const baseUrl = "https://backend-ajuu.onrender.com"

async function sign_in(email, password) {
    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            }),
        });

        const data = await response.json(); // convierte la respuesta del servidor a JSON

        if(response.status === 200) {
            return data.acceso
        } else {
            alert("Ha ocurrido un error.");
        }

        // maneja la respuesta del servidor según sea necesario
        console.log(data);

    } catch (error) {
        // maneja cualquier error que se produzca al enviar la solicitud
        console.error(error);
    }
}

async function sign_up(nickname,email,password) {
    try {
        const response = await fetch(`${baseUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                nickname
            }),
        });

        const data = await response.json(); // convierte la respuesta del servidor a JSON
        console.log(data);
        console.log(response.status);
        if(response.status === 200) {
            return {"ok": data.ok }
        } else {
            return {"ok": data.ok , "error": data.error}
        }

        // maneja la respuesta del servidor según sea necesario
        console.log(data);

    } catch (error) {
        // maneja cualquier error que se produzca al enviar la solicitud
        console.error(error);
    }
}

async function login_google(nickname,email,password) {
    try {
        const response = await fetch(`http://localhost:5000/login-google`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                nickname
            }),
        });

        const data = await response.json(); // convierte la respuesta del servidor a JSON
        console.log(data);
        console.log(response.status);
        if(response.status === 200) {
            return 'exito'
        } else {
            return {"ok": data.ok , "error": data.error}
        }

        // maneja la respuesta del servidor según sea necesario
        console.log(data);

    } catch (error) {
        // maneja cualquier error que se produzca al enviar la solicitud
        console.error(error);
    }
}

export {
    sign_in,
    sign_up,
    login_google
}