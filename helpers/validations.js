const jwt = require('jsonwebtoken')

function jwtTokens(username,mobile_no) {
    const user = {
    "username":username
    };

    // console.log(username);

    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '1h' });
    
    return accessToken;
}

module.exports = jwtTokens;