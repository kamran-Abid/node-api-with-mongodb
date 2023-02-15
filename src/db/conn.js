const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

mongoose.connect('mongodb://127.0.0.1:27017/students-api',{
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true
    // useFindAndModify: false
}).then(() => console.log("Database connected successfully"))
.catch(e => console.log(`Error in database connection :\n ${e} `))