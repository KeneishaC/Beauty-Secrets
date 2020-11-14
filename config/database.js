//require modules 
const mongoose = require('mongoose')

// create shortcut variable 
const db = mongoose.connection

const connectionURI = 'mongodb+srv://admin:0730@cluster0.lc7xb.mongodb.net/beauty-secrets?retryWrites=true&w=majority'


//connect to the database
mongoose.connect(connectionURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});