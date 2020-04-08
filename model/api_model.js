const mongoose = require('mongoose');// Setup schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true},
    email: {
        type: String,
        required: true
    },
    gender: String,
    age: String,
    create_date: {
        type: Date,
        default: Date.now
    },
    role:{type:String ,required:true }
});// Export User model
const user = module.exports = mongoose.model('user', userSchema);
module.exports.get = function (callback, limit) {
    user.find(callback).limit(limit);
}