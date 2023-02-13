const jwt = require('jsonwebtoken')
const createError = require('http-errors')



module.exports = {
    signAccesToken :(user)=> {
        return new Promise((resolve,reject)=>{
            const payload ={
                name:user.fname,
                position:user.position
            }
            const secret = process.env.ACCESS_TOKEN_SECRET
            const options = {
                expiresIn:'20sec',
                issuer:'',
                audience:user.id
            }
            jwt.sign(payload,secret,options,(err,token)=>{
                if(err)return reject(err)
                resolve(token)
            })
        })
    },
    verifyAcessToken:(req,res,next)=>{
        if(!req.headers['authorization']) return (next(createError.Unauthorized()))
        const authHeader = req.headers['authorization']
        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,payload)=>{
            if(err){
                if(err.name==='JsonWebTokenError'){
                    return next(createError.Unauthorized())
                }else{
                    return next(createError.Unauthorized(err.message))
                }
            }
            req.payload = payload
            next()
        })
    },
    signRefreshToken:(user)=> {
        return new Promise((resolve,reject)=>{
            const payload ={
                
            }
            const secret = process.env.REFRESH_TOKEN_SECRET
            const options = {
                expiresIn:'1y',
                issuer:'',
                audience:user.id
            }
            jwt.sign(payload,secret,options,(err,token)=>{
                if(err)return reject(err)
                resolve(token)
            })
        })
    }
}