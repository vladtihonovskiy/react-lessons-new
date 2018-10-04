import client from "../clients";

export const getUsers = async (req, res) => {
	res.status(200).send(client);
};
