import express from 'express';

import * as UsersController from '../controllers/users';

const router = express.Router([]);

router.post('/getAllUsers', UsersController.getUsers);

export default router;
