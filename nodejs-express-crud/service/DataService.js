const { response } = require("express");

var User  = function (id, name, email){
    this.id = id;
    this.name = name;
    this.email = email;
}

var usersList = [];
usersList.push(new User(10,'adarsh kumar','adarsh@kumar') );
usersList.push(new User(20,'radha singh','radha@singh') );
usersList.push(new User(30,'amit kumar','amit@kumar') );

exports.getAllUsers = () => {
    return usersList;
}

exports.getUserById = (id) => {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].id == id){
            return usersList[i];
        }         
    }
    return null;
}

exports.saveUser = (user) => {
    usersList .push(user);
    return user;
}

exports.deleteUser = (id) => {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].id == id){
            var user =  usersList[i];
             usersList.splice(i,1);
            return user;
        }         
    }
    return null;
}

exports.updateUser = (id, user) => {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].id == id){
           usersList[i] = user ;
           return usersList[i];
        }         
    }
    return null;
}