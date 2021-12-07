const { Schema, model, Types} = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema(
    {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
       type: String,
       required: true,
       trim: true,
       minLength: 1,
       maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MM DD, YY [at] hh:mm a')
    }
    },
    {
        toJSON: {
            getters: true
        }
    }
);




module.exports = Thought;