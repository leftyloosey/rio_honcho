const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
// const { Schema, model } = require('mongoose');

const UserSchema = new mongoose.Schema({

// const UserSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
})
    // userSchema.pre('save', async function (next) {
    //     if (this.isNew || this.isModified('password')) {
    //     const saltRounds = 10;
    //     this.password = await bcrypt.hash(this.password, saltRounds);
    //     }
    
    //     next();
    // });
    
    // userSchema.methods.isCorrectPassword = async function (password) {
    //     return bcrypt.compare(password, this.password);
    // };
  
    // const User = model('User', userSchema);

    // module.exports = User;


module.exports = mongoose.model('User', UserSchema)

// const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

// const User = new Schema({
//   name: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     match: [/.+@.+\..+/, 'Must match an email address!'],
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 5,
//   },
// });

// // set up pre-save middleware to create password
// userSchema.pre('save', async function (next) {
//   if (this.isNew || this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// // compare the incoming password with the hashed password
// userSchema.methods.isCorrectPassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };

// const User = model('User', userSchema);

// module.exports = User;
