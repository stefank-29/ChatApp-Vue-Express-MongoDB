const passport = require('passport');

exports.login = passport.authenticate('local', {});

exports.sendUser = (req, res) => {
    res.send({ user: req.user });
};

exports.logout = (req, res) => {
    req.logout();
    res.status(200).send();
};

exports.isLoggedIn = (req, res, next) => {
    // from passport
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};
