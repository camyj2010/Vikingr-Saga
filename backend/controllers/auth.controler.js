import { User } from "../models/User.js"
export const login = async (req, res) => {
    const { email, password } = req.body
    try {

        let user = await User.findOne({ email: email })
        if (!user)
            return res.status(403).json({ acceso: false, error: "No existe el usuario registrado" });

        const respuestaPassword = await user.comparePassword(password)
        if (!respuestaPassword)
            return res.status(403).json({ acceso: false, error: "Contraseña incorrecta" });
        //Generar el token 
        const userId = user.id;

        return res.json({ acceso: true, message: "Entro", userid: userId, userNickname: user.nickname });
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ acceso: false, error: "error de servidor" });
    }


};


export const register = async (req, res) => {
    const { email, password, nickname } = req.body
    try {

        //verificar si ya existe este usuario 
        let user = await User.findOne({ email: email })
        if (user) throw ({ code: 11000 })
        let nickuser = await User.findOne({ nickname: nickname })
        if (nickuser) return res.status(403).json({ ok: false, error: "Ya existe ese nombre de usuario" });
        user = new User({ email: email, password: password, nickname: nickname, progress: 0 });
        await user.save()

        return res.json({ ok: true })
    }
    catch (error) {
        console.log(error)
        if (error.code === 11000) {
            return res.status(400).json({ ok: false, error: "Ya existe este email" })
        }
        return res.status(500).json({ ok: false, error: "error de servidor" })
    }
    // console.log(req.body);
    res.json({ ok: true });
};

export const loginGoogle = async (req, res) => {
    const { email, password, nickname } = req.body;
    console.log(email)
    
    try {
        // Verificar si ya existe este usuario
        let user = await User.findOne({ email: email });
        if (user) throw { code: 11000 };

        let nickuser = await User.findOne({ nickname: nickname });
        if (nickuser)throw { code: 11000 };

        user = new User({ email: email, password: password, nickname: nickname, progress: 0 });
        await user.save();

        const userId = user.id;

        return res.json({ acceso: true, message: "Entro", userid: userId, userNickname: user.nickname });
    } catch (error) {
        console.log(error);
        if (error.code === 11000) {
            const user = await User.findOne({ email: email });

            return res.json({ acceso: true, message: "Entro", userid: user.id, userNickname: user.nickname });
        }
        return res.status(500).json({ ok: false, error: "error de servidor" });
    }
};
export const checkLesson1Progress = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        const { progress, lesson1 } = user;

        if (!lesson1) {
            user.progress += 25;
            user.lesson1 = true; // Cambia el valor de lesson1 a true
            await user.save();
        }

        return res.json({ progress, lesson1 });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error de servidor" });
    }
};
export const checkLesson2Progress = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        const { progress, lesson2 } = user;

        if (!lesson2) {
            user.progress += 25;
            user.lesson2 = true; // Cambia el valor de lesson1 a true
            await user.save();
        }

        return res.json({ progress, lesson2 });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error de servidor" });
    }
};
export const checkLesson3Progress = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        const { progress, lesson3 } = user;

        if (!lesson3) {
            user.progress += 25;
            user.lesson3 = true; // Cambia el valor de lesson1 a true
            await user.save();
        }

        return res.json({ progress, lesson3 });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error de servidor" });
    }
};
export const checkLesson4Progress = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        const { progress, lesson4 } = user;

        if (!lesson4) {
            user.progress += 25;
            user.lesson4 = true; // Cambia el valor de lesson1 a true
            await user.save();
        }

        return res.json({ progress, lesson4 });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error de servidor" });
    }
};
export const getUserInfo = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId).select("-password");
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        return res.json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error de servidor" });
    }
};