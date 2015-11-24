/**
 * Created by Adarsh on 11/9/15.
 */
console.log('Application Started ...........');

//importing package for mongoose
var mongoose = require('mongoose');


//creating connection
mongoose.connect('mongodb://localhost/test', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

//creating schema
var PersonSchema = new mongoose.Schema({
    name: String,
    active: Boolean,
    description: String,
    updated_at: { type: Date, default: Date.now }
});
var PersonSchemaEntity = mongoose.model('PersonSchema', PersonSchema);

// saving record
var personSchemaEntityObj = new PersonSchemaEntity(
    {
        name: 'Adarsh Kumar', active: true, description: 'Software Engineer'
    });

personSchemaEntityObj.save(function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log(personSchemaEntityObj);
    }
});

// creating record
PersonSchemaEntity.create(
    {
        name: 'Radha Singh', active: true, description: 'Software Engineer'
    }
    , function (error, personSchemaEntityObj) {
        if (error) {
            console.log(error);
        }
        else {
            console.log(personSchemaEntityObj);
        }
    }
);

// displaying record
PersonSchemaEntity.find(function (error, personSchemaEntityObj) {
    if (error) {
        return console.error(error);
    }
    console.log(personSchemaEntityObj)
});

var callback = function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
}
/*
 Model.find(conditions, [fields], [options], [callback])
 Model.findById(id, [fields], [options], [callback])
 Model.findOne(conditions, [fields], [options], [callback])
 */
PersonSchemaEntity.find({active: true }, callback);
PersonSchemaEntity.find({name: 'ar$' }, callback);
/*
 Model.update(conditions, update, [options], [callback])
 Model.findByIdAndUpdate(id, [update], [options], [callback])
 Model.findOneAndUpdate([conditions], [update], [options], [callback])
 */

PersonSchemaEntity.update(
    { active: false }
    , { active: true }
    , { multi: true }
    , function (err, numberAffected, raw) {
        if (err) {
            return handleError(err);
        }
        console.log('The number of updated documents was %d', numberAffected);
        console.log('The raw response from Mongo was ', raw);
    });
PersonSchemaEntity.findOneAndUpdate({name: 'ar$' }, {active: false}, callback);

var oneYearAgo = new Date();
oneYearAgo.setYear(oneYearAgo.getFullYear() - 1);

// Get all tasks staring with `Master`, completed
PersonSchemaEntity.find({name: /^Radha/, completed: true }, callback);

// Get all tasks staring with `Master`, not completed and created from year ago to now...
PersonSchemaEntity.find({name: /^Adarsh/, completed: false }).where('updated_at').gt(oneYearAgo).exec(callback);


/*
 Model.remove(conditions, [callback])
 Model.findByIdAndRemove(id, [options], [callback])
 Model.findOneAndRemove(conditions, [options], [callback])
 */



