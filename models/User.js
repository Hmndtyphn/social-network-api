const { Schema, model } = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email for login']
    },
    
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comments'
        }
    ],

    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);

// Call schema to build user model
const User = model('User', UserSchema);

// get all comments and replies
UserSchema.virtual('getFriends').get(function() {
    return this.friends.length;
});

module.exports = User;
