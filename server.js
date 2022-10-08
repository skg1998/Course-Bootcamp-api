const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const bootcamps = require('./routes/bootcamps');
const errorHandler = require('./middleware/error');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
dotenv.config({path:'./config/config.env'});



const app = express();

app.use(bodyParser.json());


//connect database
//connectDB();

//dev logging Morgan
if(process.env.NODE_ENV==='development'){
     app.use(morgan('dev'));
}

// Router
app.use('/api/v1/bootcamps',bootcamps);
app.use(errorHandler);


const PORT =Number(process.env.PORT )|| 3000;
const server =  app.listen(PORT,()=>{
     console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});


//Handle unhandled promise rejection
process.on('unhandledRejection',(err,promise)=>{
     console.log(`Error:${err.message}`.red);
     //close server & exit process
    server.close(()=>{
         process.exit(1);
    });
});