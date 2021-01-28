const dotenv = require("dotenv")
dotenv.config()
const jwt = require("jsonwebtoken");

const urlMatchers = [{
    method: "GET",
    url: "/users/"
},{ 
    method: "DELETE",
    url: "/users/"
},{
    method: "PUT",
    url: "/users/"
}
, {
    method: "GET",
    url: "/expenses/getByUserId/"
},
{
    method: "POST",
    url: "/expenses/"
},
{
    method: "DELETE",
    url: "/expenses/"
},
{
    method: "PATCH",
    url: "/expenses/"
},
{
    method: "GET",
    url: "/expenses/getByDay"
},{
    method: "GET",
    url: "/expenses/getByMonth"
}] 
module.exports = (req, res, next) => {
    let isMatching = urlMatchers
        .map(item => {
            if(req.url.toString().includes(item.url) && req.method==item.method)return true
        }) 
        .filter(item => item == true);
 
  
    if (isMatching.length > 0) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            console.log(err)
            if (err) return res.sendStatus(403)
            req.user = user
            next()
        })

    } else {
        // if the route should not be protected, 
        // just pass the next function without check
        next()
    }
}