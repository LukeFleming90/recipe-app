const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    drinkName: { type: String },
    instructions: { type: String },
    description: { type: String },
    date: { type: Date },
    image: { type: String },
    drinkType: { type: String },
    drinkCategory: { type: String },
    drinkGlass: { type: String },
    rating: {type: Number },
    },
    {
        timestamps: true,
    }
);


module.exports = mongoose.model('Note', noteSchema);