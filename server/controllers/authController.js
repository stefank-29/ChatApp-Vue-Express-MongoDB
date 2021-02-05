const passport = require('passport');

exports.login = passport.authenticate('local', {
    successFlash: 'Successfully loged in!   ',
});

exports.sendUser = (req, res) => {
    res.send({ user: req.user, error: false, gravatar: req.user.gravatar });
};

exports.logout = (req, res) => {
    req.logout();
    res.status(200).send();
};

exports.isUserLoggedIn = (req, res) => {
    if (req.isAuthenticated()) {
        res.send({ user: req.user, gravatar: req.user.gravatar });
    } else {
        res.send(null);
    }
};

// exports.isLoggedIn = (req, res, next) => {
//     // from passport
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     //res.redirect('/login');
// };
