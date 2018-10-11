import client from "../clients";

import Models from "../models"

export const getUsers = async (req, res) => {
	Models.User.find({}).exec((error, item) => {
		if (!item) {
			res.status(200).send({})
		}
		else {
			res.status(200).send(item)
		}
	})
};

export const getUsersDataBase = async (req, res) => {
	const { firstName, lastName, avatarUrl } = req.body;

	const newUser = new Models.User({
		general: {
			firstName,
			lastName,
			avatar: avatarUrl
		}
	});

	newUser.save((error, element) => {
		if (error) {
			res.status(500).send({error: error})
		} else {
			res.status(200).send(element)
		}
	})
}
