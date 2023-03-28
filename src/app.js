const dbConnect= require('./dbConnect')

dbConnect.connect((err)=> {
    if (err) throw err;
    dbConnect.query("SELECT * FROM users",  (err, result)=> {
      if (err) throw err;
      console.log(result);
    });
  });
