var log4js = require('log4js');

log4js.configure({
    appenders: {
     out: { type: 'stdout' },
     file: { type: 'file', filename: 'log/express.log' }
    },
    categories: {
      default: { appenders: ['out', 'file'], level: 'debug' }
    }
  });


const loggerFile = log4js.getLogger("fileAppender");
const loggerConsole = log4js.getLogger("consoleAppender");

exports.info = (message) => {
    loggerFile.info(message);
    loggerConsole.info(message);
}

exports.debug = (message) => {
    loggerFile.debug(message);
    loggerConsole.debug(message);
}

exports.error = (message) => {
    loggerFile.error(message);
    loggerConsole.error(message);
}

exports.fatal = (message) => {
    loggerFile.fatal(message);
    loggerConsole.fatal(message);
}