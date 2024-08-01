const  express = require("express");
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require("./config/db");

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
//routes
//1 test routes
app.use('/api/v1/test',require("./routes/testRoutes"));

//port
const PORT = process.env.PORT;
const DEV_MODE = process.env.DEV_MODE;


//listen
app.listen(PORT,()=>{
    console.log(`Node server is running in ${DEV_MODE} on port : http://localhost:${PORT}/api/v1/test`);
});