const jwt = require('jsonwebtoken')

const verifyAcessToken = (req, res, next) => {
    if (!req.headers['authorization']) return res.status(401).json({message:"Unauthorized"})
    const authHeader = req.headers['authorization']
    const bearerToken = authHeader.split(' ')
    const token = bearerToken[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err) {
            if (err.name === 'JsonWebTokenError') {
                return res.status(401).json({message:"Invalid Token"})
            } else {
                return res.status(401).json({message:"Invalid Token"})
            }
        }
        req.payload = payload
        next()
    })
}

module.exports = verifyAcessToken