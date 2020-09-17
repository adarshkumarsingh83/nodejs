//https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

var User = require('./../entity/UserEntity');
var logger = require('./../util/ApplicationUtil');

exports.getUserByNameAndPassword = function (user, callback) {
    try {
        User.find({$and: [
            {username: user.username },
            {password: user.password}
        ]}, function (error, user) {
            if (error) {
                callback(false);
                logger.error("Returning User By Name And Password Has Error" + error);
            } else {
                if (user != null && user != "") {
                    logger.info("Returning User By Name And Password " + user);
                    callback(true);
                } else {
                    logger.info("User By Name And Password Not Found");
                    callback(false);
                }
            }
        });
    } catch (catchError) {
        logger.error("Exception Generated in getUserByNameAndPassword " + catchError);
        callback(false);
    }
}

exports.getAllUser = function (callback) {
    try {
        User.find({}, function (error, users) {
            if (error) {
                throw error;
            } else {
                logger.info("Return All Users " + users);
                callback(users);
            }
        });
    } catch (catchError) {
        logger.error("Exception Generated in getAllUser " + catchError);
        callback(null);
    }
}

exports.getUserByName = function (userName, response) {
    try {
        User.find({ username: userName }, function (error, user) {
            if (error) {
                throw error;
            } else {
                logger.info("Returning User ByName " + user);
                response.json(user);
            }
        });
    } catch (catchError) {
        logger.error("Exception Generated in getUserByName " + catchError);
        response.json(null);
    }
}

exports.getUserById = function (userId, callback) {
    try {
        User.findById(userId, function (error, user) {
            if (error) {
                logger.info("Returning Error " + error);
                callback(error);
            } else {
                logger.info("Returning User ById " + user);
                callback(user);
            }
        });
    } catch (catchError) {
        logger.error("Exception Generated in getUserById " + catchError);
        callback(null);
    }
}


exports.findByIdThenUpdateUser = function (userid, user, callback) {
    try {
        User.findByIdAndUpdate(userid, { username: user.username, name: user.name, password: user.password, location: user.location}
            , function (error, user) {
                if (error) {
                    throw error;
                } else {
                    logger.info("FindAndUpdate User ById " + user);
                    callback(user);
                }
            });
    } catch (catchError) {
        logger.error("Exception Generated in findByIdThenUpdateUser " + catchError);
        callback(null);
    }
}

exports.findByNameThenUpdateUser = function (userName, user, callback) {
    try {
        User.findOneAndUpdate({ username: userName }, { username: user.username, name: user.name, password: user.password, location: user.location}
            , function (error, user) {
                if (error) {
                    throw error;
                } else {
                    logger.info("FindAndUpdate User ByName " + user);
                    callback(true);
                }
            });
    } catch (catchError) {
        logger.error("Exception Generated in findByNameThenUpdateUser " + catchError);
        callback(false);
    }
}


exports.findAndRemoveByName = function (userName, callback) {
    try {
        User.findOneAndRemove({ username: userName }
            , function (error) {
                if (error) {
                    throw error;
                } else {
                    logger.info("FindAndRemove User ByName " + userName);
                    callback(true);
                }
            });
    } catch (catchError) {
        logger.error("Exception Generated in findAndRemoveByName " + catchError);
        callback(false);
    }
}

exports.findAndRemoveById = function (userId, callback) {
    try {
        User.findByIdAndRemove(userId
            , function (error) {
                if (error) {
                    throw error;
                } else {
                    logger.info("FindAndRemove User ById " + userId);
                    callback(true);
                }
            });
    } catch (catchError) {
        logger.error("Exception Generated in findAndRemoveById " + catchError);
        callback(false);
    }
}

exports.saveUser = function (user, callback) {
    try {
        new User(user).save(function (error, user) {
            if (error) {
                throw error;
            } else {
                logger.info('User Saved Successfully ' + user);
                callback(true);
            }
        });
    } catch (catchError) {
        logger.error("Exception Generated in saveUser " + catchError);
        callback(false);
    }
}