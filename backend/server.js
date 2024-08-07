const express = require("express");
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require("./config/db");
const Users = require("./models/user_model")
const Contact = require("./models/contact_model")
const Manage = require("./models/manage_model")
const Checkout = require("./models/checkout_model")
const Product = require("./models/product_model")
//mongodb connection
connectDB();

//dot config
dotenv.config();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
// //routes
// //1 test routes
// app.use('/api/v1/test',require("./routes/testRoutes"));

//testing
app.post('/signup', (req, res) => {
    Users.create(req.body)
        .then(User => res.json(User))
        .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    Users.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("the password is incorrect")
                }
            } else {
                res.json("No record existed")

            }
        })
        .catch(err => res.json(err))
})

app.post('/contact', (req, res) => {
    Contact.create(req.body)
        .then(User => res.json(User))
        .catch(err => res.json(err))
})

// app.post('/manage',(req,res)=>{
//     const{name,email,n_pass,c_n_pass} = req.body
//     Manage.findOne({ name : name, email : email})
//     .then(user =>{
//         if(user){
//             if(user.name === name && user.email === email)
//             {
//                 Users.updateOne({})
//             }
//         }
//     })

// })

app.post('/checkout',(req,res)=>{
    Checkout.create(req.body)
        .then(User => res.json(User))
        .catch(err => res.json(err))
})

app.post('/list', (req, res) => {
    Product.create(req.body)
        .then(User => res.json(User))
        .catch(err => res.json(err))
})




//port
const PORT = process.env.PORT;
const DEV_MODE = process.env.DEV_MODE;


//listen
app.listen(PORT, () => {
    console.log(`Node server is running in ${DEV_MODE} on port : http://localhost:${PORT}`);
});