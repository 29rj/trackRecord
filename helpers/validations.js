const jwt = require('jsonwebtoken')

function jwtTokens(username,mobile_no) {
    const user = {
    "username":username
    };

    // console.log(username);

    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '1h' });
    
    return accessToken;
}

const validateAmount = (amount) => {
    if(amount < 0 || isNaN(amount)){
        return false;
    }
    return true;
}

module.exports = {
    jwtTokens,
    validateAmount
}