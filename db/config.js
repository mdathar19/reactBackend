const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log('database is connect')
}).catch(()=>{
    console.log('data not connected')
})
