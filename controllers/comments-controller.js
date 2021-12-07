const { Comments, User } = require('../models');

const commentsController = {
    // get all comments route
    getAllComments(req, res) {
        Comments.find({})
        .populate({
            path: 'user',
            select: '-__v'
        })
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbCommentsData => res.json(dbCommentsData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
    },

    // get single comment by id
    getCommentsById({ params }, res) {
        Comments.findOne({ _id: params.id })
        .populate({
            path: 'user',
            select: '-__v'
        })
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbCommentsData => res.json(dbCommentsData))
        .catch( err => {
            console.log(err);
            res.status(500).json(err)
        })
    },

    // create comments
    createComments({ params, body }, res) {
        Comments.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { username: body.username },
                { $push: {comments: _id } },
                { new: true }
            );
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    

}