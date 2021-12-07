const { User } = require('../models')

const userController = {
    getAllUsers(req, res) {
        User.find({})
        .populate({
            path: 'comments',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
    },
}

module.exports = userController