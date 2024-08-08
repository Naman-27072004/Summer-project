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

// app.put('/manage',(req,res)=>{
//     const {email, password} = req.body
//     console.log(email,password)
//     Users.findOne({email})
//     .then(user =>{
//         if(user){
//             if(user.email === email)
//             {
//                 const userData = Users.updateOne({password:password})
//                 .then(res.json(userData))
//             }
//         }
//     })
//     .catch(err => res.json(err))
// })

app.put('/manage', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await Users.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update the user's password
        user.password = password;
        await user.save();

        res.json({ message: 'Password updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.post('/checkout',(req,res)=>{
    Checkout.create(req.body)
        .then(User => res.json(User))
        .catch(err => res.json(err))
})

app.post('/list', (req, res) => {
    Product.create(req.body)
        .then(User => res.json({status:"Success",user:User}))
        .catch(err => res.json(err))
})




//port
const PORT = process.env.PORT;
const DEV_MODE = process.env.DEV_MODE;


//listen
app.listen(PORT, () => {
    console.log(`Node server is running in ${DEV_MODE} on port : http://localhost:${PORT}`);
});