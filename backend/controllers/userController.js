const User = require("../models/userModel")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const register = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, profilePhoto, gender } = req.body
        if (!fullName || !userName || !password || !confirmPassword || !gender) {
            return res.status(400).json({ message: "All fields are required" })
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password does not match" })
        }
        const user = await User.findOne({ userName });
        if (user) {
            return res.status(400).json({ message: "User Name already exists, please try different name" })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser = await User.create({
            fullName,
            userName,
            password: hashedPassword,
            profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
            gender
        })
        return res.status(200).json({ message: "Account created successfully", success: true, user: newUser })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message })
    }
}

const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        if (!userName || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const user = await User.findOne({ userName });
        if (!user) {
            return res.status(400).json({ message: "incorrect user name or password", success: false })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "incorrect user name or password", success: false })
        }

        const tokenData = {
            userId: user.id
        }
        const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
        return res.status(200).cookie('token', token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: "none"}).json({
            message: "User logged in successfully", user
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message })
    }
}

const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "User logged out successfully"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message })
    }
}

const getOtherUsers = async (req, res) => {
    try {
        const otherUsers = await User.find({
            _id: {
                $ne: req.id
            }
        }).select("-password");
        return res.status(200).json(otherUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message })
    }
}
module.exports = {
    register,
    login,
    logout,
    getOtherUsers
}