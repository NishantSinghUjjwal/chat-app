const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "User not authenticated" })
        }
        const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY)
        if (!decode) {
            return res.status(401).json({ message: "User not authenticated" })
        }
        req.id = decode.userId
        next()
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
module.exports = authenticateUser