let express = require('express');
let mongoose = require('mongoose');
let dotenv = require('dotenv').config({ path: './conf/.env' });

let app = express();
app.set('view engine', 'pug');
app.set('views', './views');

// db
mongoose.connect(process.env.MONGO_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open', () => {
        console.log('connected to mongo...');
});
const kittySchema = new mongoose.Schema({
  name: String,
  age: Number,
  location: String,
  grow: Boolean
});
const Kitten = mongoose.model('Kitten', kittySchema);
const silence = new Kitten({name: 'suosuoli', age: 20, location: 'Beijing', grow: true});
silence.save();
Kitten.find({location: /^Bei/}, (err, data)=>{
    if (err) {
        console.log(`error find: ${err}`);
    } else {
    console.log(`find some...\n${data}`);
    }
});

// routers 
app.get('/', (req, res) => {
    //res.send('hello...');
    res.render('home', {pageTitle:'NodeJs', message:'hello......', href:'www.suosuoli.cn'});
})
app.get('/add', (req, res) => {
    res.render('add', {});
})

let server = app.listen(8080, () => {
    console.log('server listen on 8080...');
});
