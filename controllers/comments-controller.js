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

    
}