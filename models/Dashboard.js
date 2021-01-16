const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const DashboardSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        required: true,
        type: String,
        trim: true
    },
    score: {
        type: Number,
        required: true,
        trim: true,
    },
    highScore: {
        required: true,
        type: Number,
        trim: true,

    },
    status: [{
        required: true,
        type: String,
        trim: true
    }

    ]
    // ..anything else you want on your user
});

// //hashing a password before saving it to the database
// GameSchema.pre('save', function (next) {
//     const user = this;
//     bcrypt.hash(Dashboard.password, 14, function (err, hash) {
//         if (err) {
//             return next(err);
//         }
//         user.password = hash;
//         next();
//     })
// });

// // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
// GameSchema.methods.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
// };
const Dashboard = mongoose.model('Dashboard', DashboardSchema);
User.createIndexes();

module.exports = Dashboard;