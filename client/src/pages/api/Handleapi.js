const Swal = require('sweetalert2')
const baseUrl = "https://backend-ajuu.onrender.com"
// const baseUrl = "http://localhost:5000"
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
            return data
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

async function login_google(email,password,nickname) {

    try {
        const response = await fetch(`${baseUrl}/login-google`, {
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

        if(response.status === 200) {
            return data
        } else {
            return data
        }

        // maneja la respuesta del servidor según sea necesario
        console.log(data);

    } catch (error) {
        // maneja cualquier error que se produzca al enviar la solicitud
        console.error(error);
    }
}

// Asume que el userId será proporcionado como argumento
async function checkLesson1Progress(userId) {
    try {
        const response = await fetch(`${baseUrl}/Lesson1_Quiz/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json(); 

        if(response.status === 200) {
            return data
        } else {
            alert("Ha ocurrido un error.");
        }

    } catch (error) {
        console.error(error);
    }
}

async function checkLesson2Progress(userId) {
    try {
        const response = await fetch(`${baseUrl}/Lesson2_Quiz/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json(); 

        if(response.status === 200) {
            return data
        } else {
            alert("Ha ocurrido un error.");
        }

    } catch (error) {
        console.error(error);
    }
}

async function checkLesson3Progress(userId) {
    try {
        const response = await fetch(`${baseUrl}/Lesson3_Quiz/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json(); 

        if(response.status === 200) {
            return data
        } else {
            alert("Ha ocurrido un error.");
        }

    } catch (error) {
        console.error(error);
    }
}

async function checkLesson4Progress(userId) {
    try {
        const response = await fetch(`${baseUrl}/Lesson3_Quiz/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json(); 

        if(response.status === 200) {
            return data
        } else {
            alert("Ha ocurrido un error.");
        }

    } catch (error) {
        console.error(error);
    }
}

async function getUserInfo(userId) {
    try {
        const response = await fetch(`${baseUrl}/user/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json(); 

        if(response.status === 200) {
            return data
        } else {
            alert("Ha ocurrido un error.");
        }

    } catch (error) {
        console.error(error);
    }
}

export {
    sign_in,
    sign_up,
    login_google,
    checkLesson1Progress,
    checkLesson2Progress,
    checkLesson3Progress,
    checkLesson4Progress,
    getUserInfo
}
