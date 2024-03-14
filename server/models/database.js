const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://wiut00015881:<password>@cluster0.9qyy3xo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

// Models
require('./category');
require('./recipe');