var logger = require('../util/LogUtils');
const { response } = require("express");

var User  = function (id, name, email){

    this.id = id;
    this.name = name;
    this.email = email;

    function display(){
        return `{"id":${id},"name":${name},"email":${email}}`
    }
}

var usersList = [];
usersList.push(new User(10,'adarsh kumar','adarsh@kumar') );
usersList.push(new User(20,'radha singh','radha@singh') );
usersList.push(new User(30,'amit kumar','amit@kumar') );

exports.getAllUsers = () => {
    logger.info(`DataService getAllUsers()`);
    return usersList;
}

exports.getUserById = (id) => {
    logger.info(`DataService getUserById() ${id}`);
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].id == id){
            return usersList[i];
        }         
    }
    return null;
}

exports.saveUser = (user) => {
    logger.info(`DataService saveUser() ${user}`)
    usersList .push(user);
    return user;
}

exports.deleteUser = (id) => {
    logger.info(`DataService deleteUser() ${id}`)
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
    logger.info(`DataService updateUser() ${id} ${user}`)
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].id == id){
           usersList[i] = user ;
           return usersList[i];
        }         
    }
    return null;
}