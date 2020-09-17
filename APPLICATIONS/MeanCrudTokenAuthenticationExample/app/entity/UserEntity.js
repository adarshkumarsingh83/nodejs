/**
 * @author Adarsh Kumar
 * @author $LastChangedBy: Adarsh Kumar$
 * @version $Revision: 0001 $, $Date:: 1/1/10 0:00 AM#$
 * @Espark @copyright all right reserve
 */

// npm install mongoose --save
var logger = require('./../util/ApplicationUtil');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/espark');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    _id:Number,
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    location: String,
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date
});

userSchema.methods.getName = function() {
    return this.name;
};

userSchema.methods.getUserName = function() {
    return this.username;
};

userSchema.methods.isUserAdmin = function() {
    return this.admin;
};

userSchema.methods.getLocation = function() {
    return this.location;
};

userSchema.methods.getUserData = function() {
    return "Name "+this.name+" UserName "+this.username+" Location "+this.location;
};

// on every save, add the date
userSchema.pre('save', function(next) {
    logger.info("onSaveCallback method execution");
    // get the current date
    var currentDate = new Date();
    // change the updated_at field to current date
    this.updated_at = currentDate;
    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;
    next();
});

// on every save, add the date
userSchema.pre('update', function(next) {
    logger.info("onUpdateCallback method execution");
    // get the current date
    var currentDate = new Date();
    // change the updated_at field to current date
    this.updated_at = currentDate;
    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;
    next();
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;