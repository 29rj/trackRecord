const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const port = process.env.PORT || 4000;

console.log(process.env.PORT)

// app.get('/',(req,res)=>{
//     res.send("<h1>Track Record</h1>");
// });

app.use('/',require('./routes'));

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
