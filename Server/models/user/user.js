const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	general: {
		type: Object,
		firstName: String,
		lastName: String,
		avatar: String
	},
});

const User = mongoose.model('user', userSchema);

export default User;
