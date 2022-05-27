const pool = require('../db/db');
const bcrypt = require('bcryptjs');
const jwtTokens = require('../helpers/validations');


const signupUser = async (req, res) => {

    //validations od password and username

    try {
        const { username, name, mobile_no, password } = req.body;

        const hashPassword = bcrypt.hashSync(password,10);

        // console.log(hashPassword);

        const createUserQuery = await pool.query('INSERT INTO users(username,name,password,mobile_no) VALUES($1,$2,$3,$4) returning *',[username,name,hashPassword,mobile_no]);

        const createTransactionQuery = await pool.query('INSERT INTO transactions(id,curr_bal) VALUES($1,$2) returning *',[username,0]);

        if(createTransactionQuery.rowCount == 0 || createUserQuery.rowCount == 0){
            pool.query('DELECT FROM users WHERE username=$1',[username]);
            return res.send(501).send("Cannot be inserted");
        }

        const successMessage = {
            status:"Successfully Opened Account with 0 balance!!!",
            data:createUserQuery.rows[0]
        }

        return res.send(successMessage);

    } catch (err) {
        console.error(err);
        res.status(501).send(err);
    }
}

const signinUser = async (req, res) => {

    //validations of password and email

    try {
        const { username,password } = req.body;

        //if username already exist
        const checkUserQuery  = await pool.query('SELECT * FROM users WHERE username=$1',[username]);

        if(checkUserQuery.rowCount == 0){
            return res.status(501).send("Username does not exist!!");
        }

        const currUser = checkUserQuery.rows[0];

        //checking password
        const validPassword = await bcrypt.compare(password,currUser.password);

        if(!validPassword){
            return res.send("Invalid password!!");
        }

        //sign the tokens using username an mobile_no
        const token = jwtTokens(currUser.username,currUser.mobile_no);

        // console.log(token);
        const successMessage = {
            status : "success",
            username:username,
            name:currUser.name,
            mobile_no: currUser.mobile_no,
            tokens: token
        };

        return res.send(successMessage);

    } catch (err) {
        console.error(err);
        res.status(501).send(err);
    }
}


module.exports ={
    signupUser,
    signinUser
}