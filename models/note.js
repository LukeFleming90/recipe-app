const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    type: { type: String },
    subtype: { type: String },
    description: { type: String },
    date: { type: Date }
    },
    {
        timestamps: true,
    }
);


module.exports = mongoose.model('Note', noteSchema);