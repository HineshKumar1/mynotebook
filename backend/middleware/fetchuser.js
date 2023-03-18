var jwt = require('jsonwebtoken');
const JWT_SECRET = 'HineshIsAGoodBoy';

const fetchuser = (req,res,next)=>{
    //Get the User from JWT Token & add ID to req Object 
    const token  = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please Authenticate using a Valid Token"})
    }
    try {
        const data = jwt.verify(token,JWT_SECRET)
        req.user = data.user;
        next();    
    } catch (error) {
        res.status(401).send({error:"Please Authenticate using a Valid Token"})
    }
    
}
module.exports = fetchuser;