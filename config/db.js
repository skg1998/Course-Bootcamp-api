const mongoose = require('mongoose');
//const mysql = require('mysql);

const connectDB = async ()=>{
    const conn = await mongoose.Connection(process.env.MONGO_URI,{
        useNewUrlParser :true,
        useCreateIndex :true,
         useFindAndModify:false,
        useUnifiedTopology:true
    }).catch(error => { throw error});
    console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline.bold);
}

/* 
  var connection = mysql.createConnection({
      host:'localhost',
      user:'username',
      database :'join_us'
  })


  //create user file user.js
  var q = 'select curtime() as time ,curdate() as  date , now() as now'
  connection.query(q,(error,result,fields)=>{
      if(error) throw error;
      console.log(result);
  })

*/




module.exports = mongoose;
