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
                expiresIn:'1day',
                issuer:'',
                audience:user.id
            }
            jwt.sign(payload,secret,options,(err,token)=>{
                if(err)return reject(err)
                resolve(token)
            })
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