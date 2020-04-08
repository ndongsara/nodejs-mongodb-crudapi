// Import user model


User = require('../model/api_model');// Handle index actions
exports.app = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.render({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "user retrieved successfully",
            data: User
        });
    });
};// Handle create contact actions
exports.new = function (req, res) {
    var user = new User();
    user.name = req.body.name ? req.body.name : user.name;
    user.gender = req.body.gender;
    user.role = req.body.role;
    user.age = req.body.age;
    user.email = req.body.email;
    user.phone = req.body.phone;// save the contact and check for errors
    user.save(function (err) {
        // if (err)
        //     res.json(err);

 res.json({
        message: 'New user created!',
            data: user
            });
        });
};

// Handle view contact info
exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.render({
            message: 'user details loading..',
            data: User
        });
    });
};// Handle update contact info
exports.update = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
    if (err)
        res.send(err);
    user.name = req.body.name ? req.body.name : user.name;
    user.gender = req.body.gender;
    user.email = req.body.email;
    user.role = req.body.role;
    user.age= req.body.age;
    user.phone = req.body.phone;// save the contact and check for errors
    user.save(function (err) {
        if (err)
            res.json(err);
        res.render({
            message: 'user Info updated',
            data: user
        });
    });
});
};// Handle delete contact
exports.delete = function (req, res) {
    User.remove({
        _id: req.params.user_id
    }, function (err, user) {
        if (err)
            res.send(err);
res.json({
    status: "success",
    message: 'user deleted'
        });
    });
};