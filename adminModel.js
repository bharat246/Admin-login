const { trusted } = require("mongoose");

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default: 0 // 0:Admin, 1:SalesManager, 2:Employes, 3:Hr
    }
});

module.exports = mongoose.model('Admin', adminschema);
