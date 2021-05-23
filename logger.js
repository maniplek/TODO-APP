


function logger(req, res, next) {
    console.log(req.body);
    next();
}

exports.logger = logger;

