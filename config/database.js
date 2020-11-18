//mongodb+srv:/<username/password>@cluster0.lc7xb.mongodb.net/beauty-secrets?retryWrites=true&w=majority'
//require modules 
const mongoose = require('mongoose')

// create shortcut variable 
const db = mongoose.connection



//connect to the database
mongoose.connect(process.env.DATABASE_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});